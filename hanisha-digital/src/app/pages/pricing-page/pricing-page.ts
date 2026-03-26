import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.scss',
})
export class PricingPage implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.apply({
      title: 'Pricing & Engagement Models',
      description:
        'Fixed-price projects, MVP packages ($5k–$20k range), and monthly developer hiring for US startups. Transparent pricing from Hanisha Exim.',
      keywords: 'MVP pricing, startup development cost, hire developers India monthly, SaaS MVP cost',
      canonicalPath: '/pricing',
    });
  }
}
