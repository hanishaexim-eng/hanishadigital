import { Component, inject, OnInit } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.apply({
      title: 'About Us',
      description:
        'Hanisha Exim is a global IT export partner for startups — affordable SaaS, ecommerce, and healthcare software with scalable delivery.',
      keywords: 'Hanisha Exim, IT export company, startup software partner, offshore development',
    });
  }
}
