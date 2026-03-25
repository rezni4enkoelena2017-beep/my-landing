# Елена Боброва — Персональный лендинг

Персональный лендинг фрилансера: сайты, веб-приложения и AI-агенты для бизнеса.

**Живой сайт:** https://my-landing-ld1naf5qo-rezni4enkoelena2017-beeps-projects.vercel.app

Проект существует в двух независимых вариантах:
- **`index.html`** — автономный лендинг без зависимостей, открывается в любом браузере напрямую
- **`src/`** — Next.js-версия, задеплоена на Vercel, это основной вариант

---

## Стек

| Слой | Технология |
|---|---|
| Фреймворк | Next.js 16 (App Router) |
| Язык | TypeScript |
| Стили | Tailwind CSS 4 |
| Анимации | Framer Motion 12 |
| Плавный скролл | Lenis |
| Шрифты | Inter · JetBrains Mono · Space Grotesk |
| Деплой | Vercel (автодеплой из `master`) |

---

## Быстрый старт

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # продакшн-сборка
npm start         # запуск продакшн-сервера
```

---

## Структура проекта

```
my-landing/
├── index.html                   # Standalone-версия (HTML + CSS + JS в одном файле)
├── public/
│   ├── avatar.jpg               # Фото профиля
│   ├── robots.txt               # SEO: директивы для поисковых роботов
│   └── og-image.png             # ← нужно создать: 1200×630px для соцсетей
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout: шрифты, metadata, Schema.org JSON-LD
│   │   ├── page.tsx             # Страница: порядок секций
│   │   ├── globals.css          # Design tokens, компоненты, анимации
│   │   └── sitemap.ts           # SEO: автогенерация sitemap.xml
│   ├── components/
│   │   ├── Header.tsx           # Sticky шапка + мобильное меню
│   │   ├── Footer.tsx           # Подвал с навигацией
│   │   ├── CursorSpotlight.tsx  # Радиальный градиент за курсором (desktop only)
│   │   ├── SmoothScroll.tsx     # Инициализация Lenis
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Первый экран: typewriter, статистика, CTA
│   │   │   ├── SocialProof.tsx  # Технологии + счётчики
│   │   │   ├── Services.tsx     # Услуги: бенто-сетка
│   │   │   ├── Portfolio.tsx    # Учебные проекты с фильтрацией
│   │   │   ├── AiDemo.tsx       # Демо чатбота + ROI-калькулятор
│   │   │   ├── Process.tsx      # Этапы работы
│   │   │   ├── Testimonials.tsx # ★ Секция "Первым клиентам" — счётчик слотов
│   │   │   ├── About.tsx        # Биография, стек
│   │   │   ├── Pricing.tsx      # Тарифы
│   │   │   ├── Faq.tsx          # Аккордеон с вопросами
│   │   │   └── Contact.tsx      # Форма + Telegram CTA
│   │   └── ui/
│   │       ├── Button.tsx       # Кнопки: primary / secondary / ghost
│   │       ├── SectionTitle.tsx # Заголовок секции с тегом и подсветкой
│   │       └── TechTag.tsx      # Бейджи технологий
│   └── lib/
│       ├── config.ts            # ★ Центральный конфиг — имя, Telegram, tagline
│       └── lenis.ts             # Singleton для Lenis smooth scroll
└── next.config.ts               # Оптимизация изображений (WebP/AVIF), compress
```

---

## Центральный конфиг

Все повторяющиеся данные — в одном месте: [src/lib/config.ts](src/lib/config.ts)

```ts
export const SITE = {
  name: "Елена Боброва",
  nameShort: "ЕБ",
  tagline: "Создаю сайты, веб-приложения и AI-агентов для бизнеса",
  telegram: "https://t.me/el_bobrova",
  telegramHandle: "@el_bobrova",
};
```

Изменить имя, ссылку или слоган — только здесь, обновится везде.

---

## Частые задачи по обслуживанию

### Закрыть слот у первых клиентов

В [src/components/sections/Testimonials.tsx](src/components/sections/Testimonials.tsx):

```ts
const SLOTS_TAKEN = 0;  // ← поменять на 1, 2 или 3
```

Счётчик и визуал обновятся автоматически. При `SLOTS_TAKEN = 3` все слоты закроются.

### Добавить реальный отзыв

Когда появится первый клиент — замените секцию Testimonials на компонент с отзывами.
Структура одного отзыва:

```ts
{
  text: "Текст отзыва",
  author: "Имя Фамилия",
  role: "Должность, Компания",
  avatar: "ИФ",   // инициалы для placeholder
  rating: 5,
}
```

### Обновить фото

Заменить файл `public/avatar.jpg`. Рекомендуемый размер: минимум 512×512px, формат JPG или WebP.

### Создать OG-изображение

Файл `public/og-image.png` нужен для красивых превью в соцсетях.
Размер: **1200×630px**. Можно создать в Figma или Canva.
На изображении: имя, должность, фон в тон сайту.

---

## SEO

| Файл | Назначение |
|---|---|
| `public/robots.txt` | Разрешает индексацию, указывает на sitemap |
| `src/app/sitemap.ts` | Генерирует `/sitemap.xml` автоматически |
| `src/app/layout.tsx` | Title, description, Open Graph, Twitter Cards |
| `src/app/layout.tsx` | Schema.org JSON-LD: `Person` + `FAQPage` |

После получения постоянного домена — обновить `BASE_URL` в `layout.tsx` и в `robots.txt`.

---

## Дизайн-система

### Цветовые токены (globals.css)

```css
--color-accent:       #7c3aed;   /* фиолетовый — основной акцент */
--color-accent-2:     #06b6d4;   /* циановый — вторичный */
--color-bg:           #09090b;   /* фон */
--color-text:         #fafafa;   /* основной текст */
--color-text-muted:   #71717a;   /* приглушённый текст */
```

### Переиспользуемые CSS-классы

| Класс | Описание |
|---|---|
| `.glass-card` | Glassmorphism-карточка с backdrop-blur |
| `.gradient-text` | Анимированный градиентный текст |
| `.section` | Стандартные отступы секции |
| `.container` | Центрированный контейнер с боковыми отступами |
| `.glow-pulse` | Пульсирующее свечение (для главной CTA-кнопки) |
| `.dot-grid` | Точечный фон в Hero |

### Компоненты Button

```tsx
<Button href="..." size="lg">              // primary (по умолчанию)
<Button variant="secondary" size="md">     // обводка
<Button variant="ghost">                   // без фона
```

---

## Визуальные эффекты

- Cursor spotlight — радиальный градиент за мышью (только desktop, с RAF-throttle)
- Animated gradient text — заголовки с `background-position` анимацией
- Glassmorphism cards — `backdrop-filter: blur(20px)` + shimmer при наведении
- Floating glow blobs в Hero — CSS `float1`/`float2` анимация
- Scroll animations — `whileInView` через Framer Motion
- Lenis smooth scroll — плавная прокрутка
- Noise grain overlay — `body::after` SVG фильтр
- `:focus-visible` — видимый фокус для клавиатурной навигации
- `prefers-reduced-motion` — анимации отключаются по системным настройкам

---

## Доступность (a11y)

- Все интерактивные элементы доступны с клавиатуры
- FAQ аккордеон имеет `aria-expanded`
- Изображение профиля имеет описательный `alt`
- SVG-иконки декоративные — `aria-hidden="true"`
- Контраст текста: основной текст — WCAG AA, приглушённый — на грани (TODO: улучшить)

---

## Деплой

Проект задеплоен на **Vercel**. Каждый `git push` в `master` запускает автоматический деплой.

```bash
git add .
git commit -m "описание изменений"
git push origin master
# Vercel задеплоит автоматически за ~1 минуту
```

Репозиторий: https://github.com/rezni4enkoelena2017-beep/my-landing

---

## Standalone-версия (index.html)

Файл `index.html` — полностью автономный лендинг: HTML + CSS + JS в одном файле.
Никаких зависимостей, сборщиков и серверов.

**Совместимость:** все современные браузеры, включая встроенные браузеры Telegram, WhatsApp, VK.

**Когда использовать:** при отправке ссылки в мессенджере, когда важно открытие без задержек.

---

## Контакт

Telegram: [@el_bobrova](https://t.me/el_bobrova)
