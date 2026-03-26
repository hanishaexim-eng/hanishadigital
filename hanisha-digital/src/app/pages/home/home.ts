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

  readonly trustBadge = 'Serving clients globally · India-based engineering team · US time-zone friendly';

  readonly urgency = 'Limited slots for new projects this quarter — book a discovery call to reserve capacity.';

  readonly serviceOfferings: ReadonlyArray<{
    icon: IconName;
    title: string;
    outcome: string;
    tech: string;
    timeline: string;
    accent: string;
  }> = [
    {
      icon: 'cloud',
      title: 'SaaS MVP Development',
      outcome: 'Multi-tenant MVP with auth, billing hooks, and admin — ready for your first paying users.',
      tech: 'Angular / React, Node, PostgreSQL, Stripe, AWS',
      timeline: 'Typical MVP: 6–10 weeks',
      accent: 'text-indigo-600 dark:text-indigo-200',
    },
    {
      icon: 'grid',
      title: 'Web App Development',
      outcome: 'Fast, SEO-aware web apps with APIs, dashboards, and integrations your team can extend.',
      tech: 'TypeScript, REST / GraphQL, cloud deploy, CI/CD',
      timeline: 'Phased sprints: 2-week milestones',
      accent: 'text-violet-600 dark:text-violet-200',
    },
    {
      icon: 'phone',
      title: 'Mobile App Development',
      outcome: 'Cross-platform or native-aligned UX for iOS/Android with secure backends.',
      tech: 'Capacitor / native bridges, push, offline-first patterns',
      timeline: 'MVP builds: 8–14 weeks (scope-dependent)',
      accent: 'text-cyan-600 dark:text-cyan-200',
    },
    {
      icon: 'paint',
      title: 'UI/UX Design',
      outcome: 'Product flows, design systems, and dev-ready specs so engineering ships without rework.',
      tech: 'Figma, accessibility-minded components, design tokens',
      timeline: 'Design phases: 2–4 weeks before build',
      accent: 'text-pink-600 dark:text-pink-200',
    },
    {
      icon: 'users',
      title: 'Dedicated Developer Hiring',
      outcome: 'Embedded engineers who work in your tools, standups, and release cadence.',
      tech: 'Aligned to your stack · overlap hours with US teams',
      timeline: 'Monthly retainers · 30-day notice',
      accent: 'text-emerald-600 dark:text-emerald-200',
    },
  ];

  readonly processSteps: ReadonlyArray<{ step: number; title: string; desc: string }> = [
    { step: 1, title: 'Discovery call', desc: 'Goals, constraints, success metrics, and fit — no fluff.' },
    { step: 2, title: 'Planning', desc: 'Scope, milestones, stack, and a fixed roadmap you can share with investors.' },
    { step: 3, title: 'Development', desc: 'Weekly demos, Slack/Email async, transparent backlog.' },
    { step: 4, title: 'Testing', desc: 'QA, performance passes, and hardening before users touch production.' },
    { step: 5, title: 'Launch + Support', desc: 'Go-live, monitoring, and post-launch fixes — then ongoing options.' },
  ];

  readonly whyUs: ReadonlyArray<{ icon: IconName; t: string; d: string }> = [
    {
      icon: 'dollar',
      t: 'Cost vs US agencies',
      d: 'Lean India-based delivery — invest more in product and GTM, not overhead.',
    },
    { icon: 'zap', t: 'Fast delivery', d: 'Ship MVPs in weeks with weekly demos — not silent months.' },
    { icon: 'globe', t: 'Built for US startups', d: 'Remote-first, async-friendly, overlapping hours for calls.' },
    { icon: 'grid', t: 'Startup-friendly', d: 'Clear scope, milestones, and no surprise change orders.' },
  ];

  readonly techStack = [
    'Angular',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'REST & GraphQL',
    'AWS / cloud',
    'Docker',
    'CI/CD',
  ] as const;

  /** Placeholder client logos — replace with real SVG/PNG WebP when available */
  readonly clientLogos = ['Startup A', 'B2B Co', 'HealthTech', 'D2C Brand', 'SaaS Co'] as const;

  readonly pricingModels: ReadonlyArray<{
    name: string;
    badge?: string;
    price: string;
    desc: string;
    highlight?: boolean;
  }> = [
    {
      name: 'Fixed-price projects',
      price: 'Scoped milestones',
      desc: 'Best when requirements are clear — fixed scope, fixed timeline, transparent invoice.',
    },
    {
      name: 'MVP packages',
      badge: 'Popular',
      price: '$5k – $20k',
      desc: 'Typical US-startup MVP range — from thin validation build to fuller product-ready MVP.',
      highlight: true,
    },
    {
      name: 'Monthly developer',
      price: 'From $3k / mo',
      desc: 'Dedicated engineer embedded in your workflow — Slack, PRs, reviews, releases.',
    },
  ];

  readonly caseStudies: ReadonlyArray<{
    tag: string;
    tagClass: string;
    title: string;
    problem: string;
    before: string;
    after: string;
    techUsed: string;
    result: string;
    metrics: ReadonlyArray<{ label: string; value: string }>;
  }> = [
    {
      tag: 'SaaS',
      tagClass: 'text-indigo-700 dark:text-indigo-200',
      title: 'B2B analytics MVP',
      problem: 'US founders had spreadsheets — no single dashboard for customer health.',
      before: 'Manual exports, delayed decisions, no shared view for the team.',
      after: 'Multi-tenant MVP with auth, roles, and weekly demo-ready releases.',
      techUsed: 'Angular, Node, PostgreSQL, AWS',
      result: 'Fundable demo in 5 weeks; infra cost down 32% vs prior stack.',
      metrics: [
        { label: 'Time to demo', value: '5 weeks' },
        { label: 'Infra cost', value: '−32%' },
      ],
    },
    {
      tag: 'Ecommerce',
      tagClass: 'text-violet-700 dark:text-violet-200',
      title: 'D2C launch (US)',
      problem: 'Checkout felt slow on mobile before a paid campaign.',
      before: 'Heavy theme, blocking scripts, unclear shipping steps.',
      after: 'Streamlined checkout, lighter front-end, step analytics.',
      techUsed: 'Headless storefront, Node APIs, CDN',
      result: 'Checkout speed +41%, mobile CVR +18% in pilot.',
      metrics: [
        { label: 'Checkout speed', value: '+41%' },
        { label: 'Mobile CVR', value: '+18%' },
      ],
    },
    {
      tag: 'Healthcare',
      tagClass: 'text-cyan-800 dark:text-cyan-200',
      title: 'Clinic workflow pilot',
      problem: 'Staff duplicated data between intake and scheduling.',
      before: 'Double entry, handoff errors, weak audit trail.',
      after: 'Single workflow with permissions and audit history.',
      techUsed: 'Secure web app, encrypted transport, role-based access',
      result: '12 hrs/week admin time saved; 94% staff adoption in pilot.',
      metrics: [
        { label: 'Admin time saved', value: '12 hrs/wk' },
        { label: 'Pilot adoption', value: '94%' },
      ],
    },
  ];

  readonly starSlots = [0, 1, 2, 3, 4] as const;

  readonly testimonials: ReadonlyArray<{
    quote: string;
    author: string;
    role: string;
    rating: number;
  }> = [
    {
      quote:
        'Clear scope, weekly demos, and a stack we could actually maintain — exactly what we needed pre-seed.',
      author: 'Alex M.',
      role: 'Founder, US SaaS',
      rating: 5,
    },
    {
      quote: 'They respected MVP discipline — no bloat before we had validation. Rare find.',
      author: 'Priya R.',
      role: 'Ecommerce founder, USA',
      rating: 5,
    },
    {
      quote: 'Clinical workflows are messy; they shipped something we could pilot with real staff.',
      author: 'Dr. James L.',
      role: 'Medical director, US',
      rating: 5,
    },
  ];

  ngOnInit(): void {
    this.seo.apply({
      title: 'SaaS MVP & Web App Development for US Startups',
      description:
        'Hanisha Exim — SaaS development company for US startups. MVP development services, web & mobile apps, hire developers from India. Fixed-price projects & monthly engineers. Book a free consultation.',
      keywords:
        'SaaS development company, MVP development services, hire developers from India, web app development for startups, US startup software, offshore development team, Angular development, MVP cost',
      canonicalPath: '/',
    });
  }
}
