import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Елена Боброва | Сайты, приложения, AI-агенты для бизнеса",
  description:
    "Создаю сайты, веб-приложения и AI-агентов для малого и среднего бизнеса — понятную цифровую систему, которая работает на продажи и рост.",
  keywords: ["разработка сайтов", "веб-приложения", "AI агенты", "лендинг", "Елена Боброва"],
  openGraph: {
    title: "Елена Боброва | Сайты, приложения, AI-агенты",
    description: "Создаю цифровые продукты, которые работают на ваш бизнес.",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased noise">
        {children}
      </body>
    </html>
  );
}
