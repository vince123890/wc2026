"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Beranda", icon: "⚽" },
  { href: "/fixtures", label: "Jadwal", icon: "📅" },
  { href: "/standings", label: "Klasemen", icon: "📋" },
  { href: "/coaches", label: "Pelatih", icon: "🧠" },
  { href: "/leaderboard", label: "Peringkat", icon: "🏆" },
  { href: "/settings", label: "Pengaturan", icon: "⚙️" },
];

export function Nav() {
  const path = usePathname();
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <>
      {/* Desktop rail */}
      <nav className="sticky top-0 hidden h-screen w-52 shrink-0 flex-col border-r border-pitch-700 bg-pitch-900/70 px-3 py-5 backdrop-blur md:flex">
        <div className="mb-8 flex items-center gap-2 px-2">
          <span className="text-2xl">🏆</span>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold text-gold">WC 2026</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink-low">Predictor</div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                isActive(it.href)
                  ? "bg-pitch-700 text-ink-hi"
                  : "text-ink-mid hover:bg-pitch-800 hover:text-ink-hi"
              }`}
            >
              <span>{it.icon}</span>
              <span>{it.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile bottom bar */}
      <nav className="fixed inset-x-0 bottom-0 z-20 flex justify-around border-t border-pitch-700 bg-pitch-900/95 px-1 py-2 backdrop-blur md:hidden">
        {items.slice(0, 5).map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] ${
              isActive(it.href) ? "text-gold" : "text-ink-mid"
            }`}
          >
            <span className="text-lg">{it.icon}</span>
            <span>{it.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
