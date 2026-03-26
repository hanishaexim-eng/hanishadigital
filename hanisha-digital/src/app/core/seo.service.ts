import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

/** Set to your production origin (no trailing slash) — used for canonical & OG URLs */
export const SITE_ORIGIN = 'https://hanisha-exim.vercel.app';

export interface SeoOptions {
  title: string;
  description: string;
  keywords?: string;
  /** Path only, e.g. `/contact` — combined with SITE_ORIGIN for canonical */
  canonicalPath?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  apply(opts: SeoOptions): void {
    const fullTitle = `${opts.title} | Hanisha Exim`;
    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: opts.description });
    if (opts.keywords) {
      this.meta.updateTag({ name: 'keywords', content: opts.keywords });
    }

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: opts.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Hanisha Exim' });
    const path = opts.canonicalPath ?? '/';
    const base =
      typeof window !== 'undefined' && window.location?.origin ? window.location.origin : SITE_ORIGIN;
    const pageUrl = `${base}${path === '/' ? '' : path}`;
    this.meta.updateTag({ property: 'og:url', content: pageUrl });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: opts.description });

    this.setCanonical(pageUrl);
  }

  private setCanonical(href: string): void {
    let link = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}
