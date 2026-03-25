import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';
import { SeoService } from '../../core/seo.service';
import { LeadModalService } from '../../core/lead-modal.service';
import { IconComponent, IconName } from '../../components/icon/icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective, IconComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly seo = inject(SeoService);
  protected readonly lead = inject(LeadModalService);

  readonly whyUs: ReadonlyArray<{ icon: IconName; t: string; d: string }> = [
    { icon: 'dollar', t: 'Low Cost', d: 'Startup-friendly packages with clear scope and milestones.' },
    { icon: 'zap', t: 'Fast MVP Delivery', d: 'Ship in weeks with demos — not months of silence.' },
    { icon: 'globe', t: 'Global Clients', d: 'Remote-first delivery across time zones.' },
    { icon: 'grid', t: 'Scalable Architecture', d: 'Cloud-ready patterns that grow with usage.' },
  ];

  /** Stack badges — text-only for fast LCP (no logo bitmaps) */
  readonly techStack = [
    'Angular',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'REST & GraphQL',
    'AWS / cloud',
    'Docker',
  ] as const;

  readonly caseStudies: ReadonlyArray<{
    tag: string;
    tagClass: string;
    title: string;
    problem: string;
    before: string;
    after: string;
    metrics: ReadonlyArray<{ label: string; value: string }>;
  }> = [
    {
      tag: 'SaaS',
      tagClass: 'text-indigo-700 dark:text-indigo-200',
      title: 'B2B analytics MVP',
      problem: 'Founders had spreadsheets and a vague idea of “dashboards” — no single place for customer metrics.',
      before: 'Manual exports, delayed decisions, no shared view for the team.',
      after: 'A multi-tenant MVP with role-based dashboards and weekly demo-ready releases.',
      metrics: [
        { label: 'Time to demo', value: '5 weeks' },
        { label: 'Infra cost', value: '−32% vs legacy' },
      ],
    },
    {
      tag: 'Ecommerce',
      tagClass: 'text-violet-700 dark:text-violet-200',
      title: 'D2C launch',
      problem: 'Checkout felt slow on mobile; cart abandonment was high before the first campaign.',
      before: 'Heavy theme, blocking scripts, unclear shipping steps.',
      after: 'Streamlined checkout, lighter front-end, and analytics on conversion steps.',
      metrics: [
        { label: 'Checkout speed', value: '+41%' },
        { label: 'Mobile CVR', value: '+18%' },
      ],
    },
    {
      tag: 'Healthcare',
      tagClass: 'text-cyan-800 dark:text-cyan-200',
      title: 'Clinic workflow pilot',
      problem: 'Staff duplicated data between intake forms and the internal scheduling tool.',
      before: 'Double entry, errors at handoff, no audit trail for changes.',
      after: 'Pilot workflow with one source of truth, permissions, and simple audit history.',
      metrics: [
        { label: 'Admin time saved', value: '12 hrs/wk' },
        { label: 'Pilot adoption', value: '94% staff' },
      ],
    },
  ];

  /** Star rating slots for testimonial display */
  readonly starSlots = [0, 1, 2, 3, 4] as const;

  readonly testimonials: ReadonlyArray<{
    quote: string;
    author: string;
    role: string;
    rating: number;
  }> = [
    {
      quote: 'Clear scope, weekly demos, and a stack we could actually maintain.',
      author: 'Alex M.',
      role: 'SaaS founder',
      rating: 5,
    },
    {
      quote: 'They understood MVP discipline — no feature bloat before validation.',
      author: 'Priya R.',
      role: 'Ecommerce',
      rating: 5,
    },
    {
      quote: 'Clinical workflows are messy; they shipped something we could pilot for real.',
      author: 'Dr. James L.',
      role: 'Healthtech',
      rating: 5,
    },
  ];

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
