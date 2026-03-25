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
      title: 'Pricing',
      description:
        'Startup-friendly packages for SaaS, ecommerce, and healthcare builds. Transparent tiers from Hanisha Exim.',
      keywords: 'MVP pricing, startup development cost, affordable software development, SaaS build cost',
    });
  }
}
