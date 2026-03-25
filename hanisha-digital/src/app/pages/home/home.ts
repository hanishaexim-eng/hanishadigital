import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.apply({
      title: 'Affordable IT for Startups',
      description:
        'Build your startup with Hanisha Exim — SaaS, ecommerce, and healthcare software. Affordable, scalable, global delivery.',
      keywords:
        'startup IT, MVP development, SaaS development, ecommerce development, healthcare software, affordable developers',
    });
  }
}
