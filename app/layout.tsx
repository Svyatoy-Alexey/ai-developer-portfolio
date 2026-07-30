import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saint Web — сайты, веб-приложения и AI-решения",
  description: "Saint Web создаёт современные сайты, веб-приложения, Telegram-ботов и AI-автоматизацию для бизнеса.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
