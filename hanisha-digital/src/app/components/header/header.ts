import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { TranslationService, LanguageCode } from '../../i18n/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  scrolled = signal(false);
  menuOpen = signal(false);
  languages: LanguageCode[] = ['en', 'es', 'de', 'ur', 'ja', 'zh', 'fr'];

  constructor(private readonly i18n: TranslationService) {}

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  currentLanguage(): LanguageCode {
    return this.i18n.currentLanguage();
  }

  languageLabel(code: LanguageCode): string {
    return this.i18n.getLanguageLabel(code);
  }

  changeLanguage(lang: string) {
    this.i18n.setLanguage(lang as LanguageCode);
  }
}
