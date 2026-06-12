import type { NewsItem } from "@/lib/types";

interface Props {
  homeName: string;
  awayName: string;
  homeNews: NewsItem[];
  awayNews: NewsItem[];
}

export function MatchNewsPanel({ homeName, awayName, homeNews, awayNews }: Props) {
  if (homeNews.length === 0 && awayNews.length === 0) return null;

  return (
    <div className="rounded-xl border border-pitch-700 bg-pitch-900/60 p-4">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink-hi">📰 Berita Terkini</h3>
        <span className="rounded bg-pitch-700 px-2 py-0.5 text-[10px] text-ink-low">Google News</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <NewsColumn teamName={homeName} items={homeNews} />
        <NewsColumn teamName={awayName} items={awayNews} />
      </div>
    </div>
  );
}

function NewsColumn({ teamName, items }: { teamName: string; items: NewsItem[] }) {
  if (items.length === 0) {
    return (
      <div>
        <div className="mb-1 text-[11px] font-semibold text-gold">{teamName}</div>
        <p className="text-[11px] text-ink-low">Tidak ada berita terbaru.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-1 text-[11px] font-semibold text-gold">{teamName}</div>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="text-[11px] leading-snug">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-mid hover:text-ink-hi hover:underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
