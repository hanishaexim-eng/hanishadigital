import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { LeadModalService } from '../../core/lead-modal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly seo = inject(SeoService);
  protected readonly lead = inject(LeadModalService);

  readonly whyUs = [
    { icon: '💸', t: 'Low Cost', d: 'Startup-friendly packages with clear scope and milestones.' },
    { icon: '⚡', t: 'Fast MVP Delivery', d: 'Ship in weeks with demos — not months of silence.' },
    { icon: '🌍', t: 'Global Clients', d: 'Remote-first delivery across time zones.' },
    { icon: '📐', t: 'Scalable Architecture', d: 'Cloud-ready patterns that grow with usage.' },
  ] as const;

  readonly testimonials = [
    { quote: 'Clear scope, weekly demos, and a stack we could actually maintain.', author: 'Alex M.', role: 'SaaS founder' },
    { quote: 'They understood MVP discipline — no feature bloat before validation.', author: 'Priya R.', role: 'Ecommerce' },
    {
      quote: 'Clinical workflows are messy; they shipped something we could pilot for real.',
      author: 'Dr. James L.',
      role: 'Healthtech',
    },
  ] as const;

  ngOnInit(): void {
    this.seo.apply({
      title: 'Affordable IT for Global Startups',
      description:
        'Hanisha Exim — affordable IT for global startups. SaaS, ecommerce, and healthcare platforms. Fast MVP, scalable architecture. hanishaexim@gmail.com',
      keywords:
        'affordable IT services, startup MVP, SaaS development, ecommerce development, healthcare software, global IT company',
    });
  }
}
