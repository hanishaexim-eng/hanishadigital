import { Component, input } from '@angular/core';

/** Shared 24×24 outline icons, stroke width 2 — consistent line weight across the site */
export type IconName =
  | 'cloud'
  | 'cart'
  | 'beaker'
  | 'dollar'
  | 'zap'
  | 'globe'
  | 'grid'
  | 'sun'
  | 'moon'
  | 'mail'
  | 'star'
  | 'link'
  | 'phone'
  | 'paint'
  | 'users';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg
      class="icon"
      [class]="sizeClass()"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      [attr.aria-hidden]="decorative() ? 'true' : null"
      [attr.role]="decorative() ? null : 'img'"
    >
      @switch (name()) {
        @case ('cloud') {
          <path
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        }
        @case ('cart') {
          <path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        }
        @case ('beaker') {
          <path
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        }
        @case ('dollar') {
          <path
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        }
        @case ('zap') {
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        }
        @case ('globe') {
          <path
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        }
        @case ('grid') {
          <path
            d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
          />
        }
        @case ('sun') {
          <path
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        }
        @case ('moon') {
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        }
        @case ('mail') {
          <path
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        }
        @case ('star') {
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        }
        @case ('link') {
          <path
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        }
        @case ('phone') {
          <path
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3"
          />
        }
        @case ('paint') {
          <path
            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25c0-1.423-.9-2.65-2.16-3.15m-7.5-9.75a3 3 0 11-4.5 4.5 3 3 0 014.5-4.5M12 3v18"
          />
        }
        @case ('users') {
          <path
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        }
      }
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        flex-shrink: 0;
        vertical-align: middle;
      }
      .icon {
        flex-shrink: 0;
      }
    `,
  ],
})
export class IconComponent {
  /** Icon glyph */
  name = input.required<IconName>();
  /** Tailwind size classes, e.g. h-6 w-6 */
  sizeClass = input<string>('h-6 w-6');
  /** When true, hide from assistive tech (decorative) */
  decorative = input(true);
}
