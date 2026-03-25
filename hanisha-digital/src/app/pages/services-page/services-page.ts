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
      title: 'IT Services',
      description:
        'SaaS development, ecommerce platforms, and healthcare software for startups. Affordable, scalable delivery from Hanisha Exim.',
      keywords: 'SaaS development, ecommerce development, healthcare software, clinical systems, startup developers',
    });
  }
}
