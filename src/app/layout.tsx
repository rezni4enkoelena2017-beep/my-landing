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
  weight: ["600", "700"],
  display: "swap",
});

const BASE_URL = "https://my-landing-neon.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Елена Боброва | Разработка сайтов, приложений и AI-агентов",
  description:
    "Создаю конвертирующие сайты, веб-приложения и AI-агентов для малого и среднего бизнеса. 40+ проектов, гарантия качества, старт за 1–3 дня. Первая консультация бесплатна.",
  keywords: [
    "разработка сайтов",
    "веб-приложения",
    "AI агенты",
    "лендинг на заказ",
    "Телеграм бот",
    "автоматизация бизнеса",
    "фриланс разработчик",
    "Елена Боброва",
  ],
  openGraph: {
    title: "Елена Боброва | Сайты, приложения и AI-агенты для бизнеса",
    description:
      "40+ проектов сдано в срок. Разработка лендингов, SaaS и AI-автоматизации под ключ. Первая консультация бесплатна.",
    type: "website",
    locale: "ru_RU",
    url: BASE_URL,
    siteName: "Елена Боброва",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Елена Боброва — разработчик сайтов и AI-агентов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Елена Боброва | Разработка сайтов и AI-агентов",
    description: "40+ проектов, старт за 1–3 дня. Первая консультация бесплатна.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const schemaPersonJson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Елена Боброва",
  jobTitle: "Веб-разработчик и специалист по AI-агентам",
  url: BASE_URL,
  image: `${BASE_URL}/avatar.jpg`,
  sameAs: ["https://t.me/el_bobrova"],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "AI-агенты",
    "LangChain",
    "Telegram Bot API",
    "веб-разработка",
  ],
  offers: {
    "@type": "Offer",
    description: "Разработка лендингов, веб-приложений и AI-агентов для бизнеса",
    priceCurrency: "USD",
    priceRange: "$500 - $1500+",
  },
};

const schemaFaqJson = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько стоит проект?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Цена зависит от задачи. Лендинг — от $500, AI-агент — от $800, веб-приложение — от $1500. После первого созвона дам точную цифру — без скрытых доплат.",
      },
    },
    {
      "@type": "Question",
      name: "Как быстро вы можете начать?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "В большинстве случаев — в течение 1–3 дней. Если слот занят, предупрежу честно. Срочные задачи рассматриваю отдельно.",
      },
    },
    {
      "@type": "Question",
      name: "Работаете ли вы с малым бизнесом?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, и это основная аудитория. Мои решения масштабированы под реальные бюджеты, а не под корпоративные ТЗ.",
      },
    },
    {
      "@type": "Question",
      name: "Что будет после сдачи проекта?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "30–90 дней бесплатной поддержки, в зависимости от тарифа. После — техническое сопровождение за фиксированную подписку. Вы не останетесь один на один с кодом.",
      },
    },
    {
      "@type": "Question",
      name: "Нужен ли мне AI-агент?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Если у вас есть хотя бы один из этих сигналов — возможно, да: пропущенные обращения клиентов, рутинные ответы на одни и те же вопросы, ручной сбор заявок. Разберёмся на созвоне — без лишних продаж.",
      },
    },
    {
      "@type": "Question",
      name: "Вы работаете один или это агентство?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Один. Это значит: вы всегда знаете, с кем говорите. Нет менеджеров-посредников, нет передачи проекта джуниору.",
      },
    },
    {
      "@type": "Question",
      name: "Как происходит оплата?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "50% предоплата перед стартом, 50% после сдачи. Работаю через договор или счёт для ИП/компаний.",
      },
    },
    {
      "@type": "Question",
      name: "У вас нет опыта с реальными клиентами — почему стоит рискнуть?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Честный вопрос. Учебные проекты показывают, что я умею технически. Чтобы снять ваш риск полностью — работаю с гарантией возврата: если результат не устроит, верну деньги без споров. Плюс договор и 50% предоплата — вы не вкладываете всё сразу.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPersonJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaqJson) }}
        />
      </head>
      <body className="antialiased noise">
        {children}
      </body>
    </html>
  );
}
