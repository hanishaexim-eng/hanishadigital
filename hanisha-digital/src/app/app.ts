import { Component, OnInit, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { HowWeWork } from './components/how-we-work/how-we-work';
import { WhyChooseUs } from './components/why-choose-us/why-choose-us';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { TranslationService, LanguageCode } from './i18n/translation.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    Header,
    Hero,
    About,
    Services,
    HowWeWork,
    WhyChooseUs,
    Portfolio,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  showLanguagePrompt = false;
  suggestedLanguage: LanguageCode | null = null;
  suggestedLanguageLabel = '';
  suggestedCountry = '';

  constructor(
    private readonly http: HttpClient,
    private readonly i18n: TranslationService,
  ) {}

  ngOnInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const saved = this.i18n.getSavedLanguage();
    if (saved) {
      this.i18n.setLanguage(saved);
      return;
    }

    if (!('geolocation' in navigator)) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        this.http.get<any>(url).subscribe({
          next: (data) => {
            const countryCode = (data?.countryCode as string | undefined) ?? null;
            const countryName = (data?.countryName as string | undefined) ?? '';
            const suggestion = this.i18n.suggestLanguage(countryCode);

            if (suggestion && suggestion !== 'en') {
              this.suggestedLanguage = suggestion;
              this.suggestedLanguageLabel = this.i18n.getLanguageLabel(suggestion);
              this.suggestedCountry = countryName || countryCode || '';
              this.showLanguagePrompt = true;
            }
          },
          error: (err) => {
            if (isDevMode()) {
              console.warn('Geolocation reverse lookup failed', err);
            }

            const fallbackSuggestion = this.i18n.suggestLanguage(null);
            if (fallbackSuggestion && fallbackSuggestion !== 'en') {
              this.suggestedLanguage = fallbackSuggestion;
              this.suggestedLanguageLabel =
                this.i18n.getLanguageLabel(fallbackSuggestion);
              this.suggestedCountry = '';
              this.showLanguagePrompt = true;
            }
          },
        });
      },
      () => {
        // User denied or error – stay in English without prompting.
      },
    );
  }

  acceptSuggestedLanguage() {
    if (this.suggestedLanguage) {
      this.i18n.setLanguage(this.suggestedLanguage);
    }
    this.showLanguagePrompt = false;
  }

  keepEnglish() {
    this.i18n.setLanguage('en');
    this.showLanguagePrompt = false;
  }
}
