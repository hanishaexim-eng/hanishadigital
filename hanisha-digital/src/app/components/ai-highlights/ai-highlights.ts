import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiHighlightsService, AiHighlightItem } from '../../services/ai-highlights.service';

@Component({
  selector: 'app-ai-highlights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-highlights.html',
  styleUrl: './ai-highlights.scss',
})
export class AiHighlights implements OnInit {
  items = signal<AiHighlightItem[]>([]);
  loading = signal(true);
  error = signal(false);

  constructor(private highlights: AiHighlightsService) {}

  ngOnInit(): void {
    this.loadHeadlines();
  }

  private loadHeadlines(): void {
    this.loading.set(true);
    this.error.set(false);
    this.highlights.getHeadlines().subscribe({
      next: (list) => {
        this.items.set(list);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set(true);
        this.items.set([]);
      },
    });
  }

  formatDate(iso: string): string {
    if (!iso) return '';
    const d = new Date(iso);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    if (diff < 86400000) return 'Today';
    if (diff < 172800000) return 'Yesterday';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: d.getFullYear() !== now.getFullYear() ? 'numeric' : undefined });
  }
}
