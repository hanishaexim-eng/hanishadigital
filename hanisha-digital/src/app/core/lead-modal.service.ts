import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LeadModalService {
  readonly open = signal(false);

  show(): void {
    this.open.set(true);
  }

  hide(): void {
    this.open.set(false);
  }
}
