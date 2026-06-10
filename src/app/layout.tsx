import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "WC 2026 Predictor — Tebak Skor Piala Dunia",
  description: "Prediksi skor FIFA World Cup 2026 dengan analisis taktis AI berlapis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="pitch-bg min-h-screen">
        <Providers>
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col md:flex-row">
            <Nav />
            <main className="flex-1 px-4 pb-24 pt-6 md:px-8 md:pb-10">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
