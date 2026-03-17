import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map, catchError } from 'rxjs';

const RSS2JSON = 'https://api.rss2json.com/v1/api.json';

export interface AiHighlightItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  thumbnail?: string;
  description?: string;
}

export const AI_HEADLINES_FEED = {
  id: 'headlines',
  label: 'Headlines',
  // World‑wide, well‑known tech news source focused on AI.
  feedUrl: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml',
} as const;

@Injectable({ providedIn: 'root' })
export class AiHighlightsService {
  private cache = new Map<string, { items: AiHighlightItem[]; at: number }>();
  private readonly CACHE_MS = 1000 * 60 * 15; // 15 min

  constructor(private http: HttpClient) {}

  getHeadlines(): Observable<AiHighlightItem[]> {
    const tab = AI_HEADLINES_FEED;
    const cached = this.cache.get(tab.id);
    if (cached && Date.now() - cached.at < this.CACHE_MS) {
      return of(cached.items);
    }
    const url = `${RSS2JSON}?rss_url=${encodeURIComponent(tab.feedUrl)}&count=4`;
    return this.http.get<{ items?: Array<{ title: string; link: string; pubDate: string; thumbnail?: string; description?: string }>; feed?: { title?: string } }>(url).pipe(
      map((res) => {
        const raw = res?.items ?? [];
        const source = res?.feed?.title ?? tab.label;
        const items: AiHighlightItem[] = raw.map((i) => ({
          title: i.title ?? '',
          link: i.link ?? '#',
          pubDate: i.pubDate ?? '',
          source,
          thumbnail: i.thumbnail,
          description: stripHtml(i.description ?? '').slice(0, 140),
        }));
        this.cache.set(tab.id, { items, at: Date.now() });
        return items;
      }),
      catchError(() => of(getFallbackItems(tab)))
    );
  }
}

function stripHtml(html: string): string {
  const div = typeof document !== 'undefined' ? document.createElement('div') : null;
  if (div) {
    div.innerHTML = html;
    return (div.textContent ?? div.innerText ?? '').trim();
  }
  return html.replace(/<[^>]*>/g, '').trim();
}

function getFallbackItems(tab: { label: string }): AiHighlightItem[] {
  const base = [
    { title: 'AI and the future of work', link: 'https://www.technologyreview.com', pubDate: new Date().toISOString(), source: tab.label },
    { title: 'Latest advances in large language models', link: 'https://openai.com', pubDate: new Date().toISOString(), source: tab.label },
    { title: 'Enterprise AI adoption trends', link: 'https://venturebeat.com', pubDate: new Date().toISOString(), source: tab.label },
    { title: 'New tools for developers', link: 'https://techcrunch.com', pubDate: new Date().toISOString(), source: tab.label },
    { title: 'Ethics and regulation updates', link: 'https://www.technologyreview.com', pubDate: new Date().toISOString(), source: tab.label },
  ];
  return base.map((b) => ({ ...b, description: undefined }));
}
