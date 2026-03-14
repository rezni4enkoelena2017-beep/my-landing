# Елена Боброва — Персональный лендинг

Персональный лендинг-сайт для фрилансера: сайты, веб-приложения и AI-агенты для бизнеса.

Проект существует в двух вариантах:
- **`index.html`** — полноценный самодостаточный лендинг (один файл, без зависимостей, открывается в любом браузере)
- **`src/`** — Next.js-версия с компонентной архитектурой, анимациями Framer Motion и плавным скроллом Lenis

---

## Стек

| Слой | Технологии |
|---|---|
| Фреймворк | Next.js 16 (App Router) |
| Язык | TypeScript |
| Стили | Tailwind CSS 4 |
| Анимации | Framer Motion |
| Плавный скролл | Lenis |
| Шрифты | Inter + JetBrains Mono (Google Fonts) |
| Деплой | Vercel / статический экспорт |

---

## Структура проекта

```
my-landing/
├── index.html              # Standalone-версия (всё в одном файле)
├── public/
│   └── avatar.jpg          # Фото
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Корневой layout, шрифты, метаданные
│   │   ├── page.tsx        # Сборка всех секций
│   │   └── globals.css     # Design tokens, glassmorphism, анимации
│   ├── components/
│   │   ├── Header.tsx      # Sticky шапка + мобильное меню
│   │   ├── Footer.tsx
│   │   ├── CursorSpotlight.tsx
│   │   ├── SmoothScroll.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── AiDemo.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Faq.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── SectionTitle.tsx
│   │       └── TechTag.tsx
│   └── lib/
│       ├── config.ts       # Центральный конфиг (имя, Telegram, tagline)
│       └── lenis.ts        # Singleton для Lenis smooth scroll
└── brief.md                # Техническое задание
```

---

## Секции лендинга

1. **Hero** — typewriter-эффект, cursor spotlight, animated gradient, статистика
2. **Social Proof** — бегущая строка с технологиями, счётчики с накруткой
3. **Services** — бенто-сетка с карточками услуг, пульсирующая featured-карточка
4. **Portfolio** — фильтрация по категориям, 3D-tilt на карточках
5. **AI Demo** — симулированный чатбот, ROI-калькулятор
6. **Process** — этапы работы с вертикальной timeline-линией
7. **Testimonials** — placeholder с CTA в Telegram
8. **About** — биография, стек, count-up анимация на статистике
9. **Pricing** — три тарифа, popular-бейдж
10. **FAQ** — аккордеон
11. **Contact** — форма заявки с анимацией успеха + Telegram CTA

---

## Визуальные эффекты

- Анимированный градиент на заголовках
- Glassmorphism-карточки с shimmer-sweep при наведении
- Cursor spotlight (радиальный градиент следует за мышью)
- Floating blobs в Hero (CSS float-анимация)
- Параллакс dot-grid при прокрутке
- Scroll progress bar сверху страницы
- Side dot navigation (видна от 1200px)
- Word-by-word reveal на заголовках секций
- Magnetic эффект на кнопках
- Noise grain overlay
- Кнопка «Наверх» с пружинящей анимацией появления

---

## Запуск (Next.js версия)

```bash
npm install
npm run dev
# → http://localhost:3000
```

### Продакшн-сборка

```bash
npm run build
npm start
```

### Статический экспорт (для хостинга без Node.js)

```bash
npm run build
# Папка /out — готова к деплою на любой хостинг
```

---

## Деплой на Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Форкнуть репозиторий
2. Импортировать в Vercel
3. Deploy — всё автоматически

---

## Standalone-версия (index.html)

Файл `index.html` содержит весь HTML, CSS и JavaScript в одном файле.
Никаких зависимостей, серверов и сборщиков — просто открыть в браузере.

Совместимость: все современные браузеры, включая встроенные браузеры мессенджеров (Telegram, WhatsApp, VK).

---

## Контакт

Телеграм: [@el_bobrova](https://t.me/el_bobrova)
