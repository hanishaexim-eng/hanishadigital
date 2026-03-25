import { Component, inject, OnInit } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { SeoService } from '../../core/seo.service';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  keywords: string[];
}

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss',
})
export class BlogPage implements OnInit {
  private readonly seo = inject(SeoService);

  readonly posts: BlogPost[] = [
    {
      id: 'startup-app-30-days',
      title: 'How to build a startup app in 30 days',
      excerpt:
        'A lean roadmap from problem statement to demo: scope discipline, tech choices, and what to cut when time is short.',
      date: '2026-03-01',
      keywords: ['MVP', 'startup app', 'timeline'],
    },
    {
      id: 'mvp-cost-usa-2026',
      title: 'Cost to build an MVP in the USA (2026 guide)',
      excerpt:
        'What drives cost — integrations, compliance, design depth — and how global teams keep quality without enterprise price tags.',
      date: '2026-03-10',
      keywords: ['MVP cost', 'startup budget', '2026'],
    },
    {
      id: 'mvp-vs-full-product',
      title: 'MVP vs full product — what startups should choose',
      excerpt:
        'When to ship thin, when to invest in depth, and how to sequence features so learning beats perfection.',
      date: '2026-03-18',
      keywords: ['MVP', 'product strategy', 'startups'],
    },
    {
      id: 'seo-app-development',
      title: 'App development company vs product partner',
      excerpt:
        'Why “order-taking” vendors fail founders — and what to look for in a team that owns outcomes with you.',
      date: '2026-03-20',
      keywords: ['app development', 'startup partner'],
    },
  ];

  ngOnInit(): void {
    this.seo.apply({
      title: 'Blog',
      description:
        'Guides for founders: MVP timelines, costs, and product strategy. Hanisha Exim — affordable IT for global startups.',
      keywords: 'startup MVP, app development blog, MVP cost, build startup app, software development blog',
    });
  }
}
