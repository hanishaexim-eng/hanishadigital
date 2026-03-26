import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './services-page.html',
  styleUrl: './services-page.scss',
})
export class ServicesPage implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.apply({
      title: 'IT Services — SaaS MVP, Web & Mobile',
      description:
        'SaaS MVP development, web apps, mobile, UI/UX, and dedicated developers for US startups. Outcomes, tech stack, timelines from Hanisha Exim.',
      keywords:
        'SaaS development company, MVP development services, web app development, hire developers from India, startup engineering',
      canonicalPath: '/services',
    });
  }
}
