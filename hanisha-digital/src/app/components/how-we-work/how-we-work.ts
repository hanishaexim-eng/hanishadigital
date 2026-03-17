import {
  Component,
  signal,
} from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-how-we-work',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './how-we-work.html',
  styleUrl: './how-we-work.scss',
})
export class HowWeWork {
  readonly showJourneyModal = signal(false);

  openJourneyModal(): void {
    this.showJourneyModal.set(true);
  }

  closeJourneyModal(): void {
    this.showJourneyModal.set(false);
  }
}
