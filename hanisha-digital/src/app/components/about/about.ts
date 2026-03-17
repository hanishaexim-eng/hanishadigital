import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  // selected index for the detail card; null means no detail open
  readonly selectedIndex = signal<number | null>(null);

  toggle(index: number): void {
    const current = this.selectedIndex();
    this.selectedIndex.set(current === index ? null : index);
  }

  isExpanded(index: number): boolean {
    return this.selectedIndex() === index;
  }
}
