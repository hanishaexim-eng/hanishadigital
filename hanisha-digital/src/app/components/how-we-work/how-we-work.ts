import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';

const STEPS_COUNT = 15;
const STEP_DELAY_MS = 450;

@Component({
  selector: 'app-how-we-work',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './how-we-work.html',
  styleUrl: './how-we-work.scss',
})
export class HowWeWork implements AfterViewInit {
  @ViewChild('root', { static: true })
  rootRef!: ElementRef<HTMLElement>;

  /** Number of steps currently revealed (0..15). Steps 0..visibleStepCount-1 are shown. */
  visibleStepCount = signal(0);

  readonly stepsCount = STEPS_COUNT;

  private hasAnimated = false;
  private timerId: ReturnType<typeof setInterval> | null = null;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || !this.rootRef?.nativeElement) return;

    const el = this.rootRef.nativeElement;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          observer.disconnect();
          this.revealStepsOnce();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
  }

  isStepVisible(index: number): boolean {
    return this.visibleStepCount() > index;
  }

  private revealStepsOnce(): void {
    if (this.hasAnimated) return;
    this.hasAnimated = true;

    let count = 0;

    this.timerId = setInterval(() => {
      count++;
      this.visibleStepCount.set(count);
      if (count >= STEPS_COUNT && this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    }, STEP_DELAY_MS);
  }
}
