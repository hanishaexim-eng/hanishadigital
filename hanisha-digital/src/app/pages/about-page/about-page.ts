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
        'Hanisha Exim — India-based engineering partner for US startups. SaaS MVP, web apps, and dedicated teams with transparent scope.',
      keywords: 'Hanisha Exim, offshore development India, US startup software partner, SaaS agency',
      canonicalPath: '/about',
    });
  }
}
