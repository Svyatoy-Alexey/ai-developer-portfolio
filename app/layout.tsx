import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Developer — сайты, автоматизации и Telegram-боты",
  description: "Портфолио начинающего AI-разработчика: сайты, AI-автоматизации, Telegram-боты и небольшие веб-приложения.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
