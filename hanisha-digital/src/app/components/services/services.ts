import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  @ViewChild('servicesSlider') slider?: ElementRef<HTMLElement>;

  scrollPrev(): void {
    const el = this.slider?.nativeElement;
    if (!el) return;
    el.scrollBy({ left: -Math.round(el.clientWidth * 0.9), behavior: 'smooth' });
  }

  scrollNext(): void {
    const el = this.slider?.nativeElement;
    if (!el) return;
    el.scrollBy({ left: Math.round(el.clientWidth * 0.9), behavior: 'smooth' });
  }
}
