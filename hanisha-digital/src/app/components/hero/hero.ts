import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, inject, signal, computed, NgZone } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { TranslationService, type LanguageCode } from '../../i18n/translation.service';

const CHAR_INTERVAL_MS = 50;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, AfterViewInit {
  @ViewChild('heroVideo') heroVideoRef?: ElementRef<HTMLVideoElement>;

  private readonly i18n = inject(TranslationService);
  private readonly zone = inject(NgZone);

  readonly quoteKeys = [
    'hero.quote',
    'hero.quote2',
    'hero.quote3',
    'hero.quote4',
    'hero.quote5',
  ] as const;
  readonly quoteTexts = computed(() =>
    this.quoteKeys.map((k) => this.i18n.translate(k) ?? ''),
  );
  readonly quoteCount = computed(() => this.quoteKeys.length);
  readonly quoteText = computed(() => this.i18n.translate('hero.quote') ?? '');
  readonly totalChars = computed(() => this.quoteText().length);

  visibleCount = signal(0);
  currentSlideIndex = signal(0);
  showGeoPopup = signal(false);
  suggestedLang = signal<LanguageCode | null>(null);

  readonly slideTransform = computed(() => {
    const i = this.currentSlideIndex();
    const n = this.quoteKeys.length;
    return `translateX(-${(i * 100) / n}%)`;
  });

  readonly quoteVisible = computed(() => {
    const count = this.visibleCount();
    const text = this.quoteText();
    return text.substring(0, Math.min(count, text.length));
  });

  readonly showCursor = computed(() => this.visibleCount() < this.totalChars());

  private timerId: ReturnType<typeof setInterval> | null = null;
  private secondQuoteTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private readonly SECOND_QUOTE_DELAY_MS = 1800;

  ngOnInit(): void {
    if (typeof window === 'undefined') return;

    // If user already picked a language before, respect it and don't show geo popup again.
    const saved = this.i18n.getSavedLanguage();
    if (saved) {
      this.startTyping();
      return;
    }

    const tryGeoThenStart = (suggested: LanguageCode | null) => {
      this.suggestedLang.set(suggested);
      if (suggested) {
        this.showGeoPopup.set(true);
      } else {
        this.startTyping();
      }
    };

    fetch('https://ip-api.com/json?fields=countryCode')
      .then((r) => r.json())
      .then((data: { countryCode?: string }) => {
        const suggested = this.i18n.suggestLanguage(data?.countryCode ?? null);
        tryGeoThenStart(suggested);
      })
      .catch(() => {
        const suggested = this.i18n.suggestLanguage(null);
        tryGeoThenStart(suggested);
      });
  }

  private startTyping(): void {
    const total = this.quoteText().length;
    if (total === 0) {
      this.visibleCount.set(99999);
      return;
    }
    this.visibleCount.set(0);
    this.zone.runOutsideAngular(() => {
      let count = 0;
      this.timerId = setInterval(() => {
        count++;
        this.zone.run(() => this.visibleCount.set(count));
        if (count >= total) {
          if (this.timerId) clearInterval(this.timerId);
          this.timerId = null;
          this.scheduleSecondQuote();
        }
      }, CHAR_INTERVAL_MS);
    });
  }

  private scheduleSecondQuote(): void {
    if (this.secondQuoteTimeoutId) return;
    this.secondQuoteTimeoutId = setTimeout(() => {
      this.zone.run(() => this.currentSlideIndex.set(1));
      this.secondQuoteTimeoutId = null;
    }, this.SECOND_QUOTE_DELAY_MS);
  }

  goPrev(): void {
    this.currentSlideIndex.update((i) => Math.max(0, i - 1));
  }

  goNext(): void {
    this.currentSlideIndex.update((i) =>
      Math.min(this.quoteKeys.length - 1, i + 1),
    );
  }

  dismissGeoPopup(useSuggested: boolean): void {
    if (useSuggested) {
      const lang = this.suggestedLang();
      if (lang) this.i18n.setLanguage(lang);
    }
    this.showGeoPopup.set(false);
    this.startTyping();
  }

  getSuggestedLanguageLabel(): string {
    const code = this.suggestedLang();
    return code ? this.i18n.getLanguageLabel(code) : '';
  }

  ngAfterViewInit(): void {
    this.ensureVideoPlaying();
    setTimeout(() => this.ensureVideoPlaying(), 300);
    setTimeout(() => this.ensureVideoPlaying(), 1000);
  }

  onVideoLoaded(): void {
    this.ensureVideoPlaying();
  }

  onVideoCanPlay(): void {
    this.ensureVideoPlaying();
  }

  private ensureVideoPlaying(): void {
    const video =
      this.heroVideoRef?.nativeElement ??
      (document.querySelector('.hero-video') as HTMLVideoElement | null);

    if (video instanceof HTMLVideoElement && video.paused) {
      video.muted = true;
      video
        .play()
        .catch(() => {
          // Autoplay can be blocked by the browser; ignore failures.
        });
    }
  }
}
