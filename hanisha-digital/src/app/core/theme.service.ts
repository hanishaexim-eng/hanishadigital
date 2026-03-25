import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal, effect } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'hanisha-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);

  readonly mode = signal<ThemeMode>(this.readInitial());

  constructor() {
    effect(() => {
      const m = this.mode();
      const el = this.doc.documentElement;
      el.setAttribute('data-theme', m);
      el.classList.toggle('dark', m === 'dark');
      try {
        localStorage.setItem(STORAGE_KEY, m);
      } catch {
        /* ignore */
      }
    });
  }

  private readInitial(): ThemeMode {
    if (typeof localStorage === 'undefined') {
      return 'dark';
    }
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }

  toggle(): void {
    this.mode.update((m) => (m === 'dark' ? 'light' : 'dark'));
  }

  setTheme(mode: ThemeMode): void {
    this.mode.set(mode);
  }
}
