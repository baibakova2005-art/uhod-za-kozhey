import {
  DemoBar,
  Header,
  Section,
  Faq,
  ZayavkaForm,
  Footer,
  btnPrimary,
  btnGhost,
  eyebrowClass,
} from "./ui.jsx";
import { BOTTLES } from "./Bottles.jsx";
import { SITE, products, problems, ingredients, faq, photos } from "./data.js";

const BASE = import.meta.env.BASE_URL;
const rub = (n) => `${n.toLocaleString("ru-RU")} ₽`;

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 64 64" className="size-8 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#b83d62" />
        <path
          d="M32 13c8 10.5 13.5 18.5 13.5 26a13.5 13.5 0 0 1-27 0c0-7.5 5.5-15.5 13.5-26z"
          fill="#fff"
        />
      </svg>
      <span className="max-w-[10.5rem] font-display text-[13px] font-semibold leading-tight tracking-[-0.01em] sm:max-w-none sm:text-[15px]">
        {SITE.name}
      </span>
    </span>
  );
}

// Фото с вариантами размеров. Пока фото нет — мягкий градиент того же размера.
function Photo({ photo, className = "", sizes, fallback }) {
  if (!photo) {
    return (
      <div
        aria-hidden="true"
        className={className}
        style={{ background: fallback }}
      />
    );
  }
  const f = `${BASE}photos/${photo.file}`;
  return (
    <img
      src={`${f}-960.webp`}
      srcSet={`${f}-480.webp 480w, ${f}-960.webp 960w, ${f}-1600.webp 1600w`}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      loading="lazy"
      decoding="async"
      alt={photo.alt}
      className={`${className} object-cover`}
    />
  );
}

function HeroArt() {
  const { mist: Mist, toner: Toner, serum: Serum, cream: Cream } = BOTTLES;
  const chip =
    "absolute whitespace-nowrap rounded-full bg-surface px-4 py-2.5 text-[13px] font-bold shadow-[var(--shadow-card)] sm:text-sm";
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[1/0.92] overflow-hidden rounded-[var(--radius-card)]"
      style={{
        background:
          "radial-gradient(circle at 30% 25%, #fff 0 12%, transparent 45%), linear-gradient(150deg in oklab, #fbd9d6, #fde5d3 55%, #f3dbef)",
      }}
    >
      <div className="absolute right-[12%] top-[14%] aspect-square w-[58%] rounded-full bg-white/55" />
      <div className="absolute inset-x-0 bottom-[10%] flex items-end justify-center gap-[2%] [&_svg]:h-auto [&_svg]:drop-shadow-[0_18px_18px_rgba(120,40,64,0.18)]">
        <Mist className="w-[18%]" />
        <Toner className="w-[22%]" />
        <Serum className="w-[19%]" />
        <Cream className="w-[17%]" />
      </div>
      <span className={`${chip} left-[7%] top-[9%]`}>
        <b className="text-accent-text">77%</b> экстракта персика
      </span>
      <span className={`${chip} right-[6%] top-[30%]`}>
        PDRN + <b className="text-accent-text">гиалуроновая</b>
      </span>
      <span className={`${chip} bottom-[4%] left-[8%]`}>
        коллаген <b className="text-accent-text">в пэдах</b>
      </span>
    </div>
  );
}

// Сетка шагов: на телефоне одна колонка, на планшете две (пятая карточка во всю ширину),
// на компьютере шесть долей — две широкие карточки сверху и три снизу, без «сироты» в ряду.
function ProductCard({ p }) {
  return (
    <article
      className={`flex flex-col rounded-[20px] bg-bg p-3 sm:last:col-span-2 ${p.step <= 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
    >
      <div
        className="relative h-[210px] overflow-hidden rounded-[14px]"
        style={{ background: p.tint }}
      >
        <span className="absolute left-3 top-3 z-10 rounded-full bg-surface px-3 py-1 text-xs font-bold">
          Шаг {p.step}
          {p.when && ` · ${p.when}`}
        </span>
        <Photo
          photo={p.photo}
          className="h-full w-full"
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 px-2 pb-2 pt-4">
        <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent-text">
          {p.brand} · {p.type}
        </p>
        <h3 className="font-display text-[17px] font-semibold leading-snug tracking-[-0.01em]">
          {p.name}
        </h3>
        <p className="text-[15px] leading-relaxed text-muted">{p.text}</p>
        <ul className="flex flex-wrap gap-1.5" aria-label="Ключевые компоненты">
          {p.tags.map((t) => (
            <li
              key={t}
              className="rounded-full bg-surface px-2.5 py-1 text-xs font-semibold"
            >
              {t}
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed text-muted">
          <span className="font-semibold text-ink">Как:</span> {p.how}
        </p>
      </div>
      <div className="mt-2 flex items-center justify-between gap-2 border-t border-dashed border-line-strong/40 px-2 pb-1 pt-3">
        <p className="leading-tight">
          <span className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-bold">{p.price ? rub(p.price) : "— ₽"}</span>
            {p.priceOld && (
              <span className="text-xs text-muted line-through">
                {rub(p.priceOld)}
              </span>
            )}
          </span>
          <span className="text-xs text-muted">{p.volume}</span>
        </p>
        <a href="#order" className={`${btnGhost} min-h-11 px-5 py-2 text-sm`}>
          Хочу
        </a>
      </div>
    </article>
  );
}

const sourceName = (url) =>
  url.includes("pexels.com") ? "Pexels" : "Unsplash";

export default function App() {
  const total = products.every((p) => p.price)
    ? products.reduce((s, p) => s + p.price, 0)
    : null;

  // Одно и то же фото Polina Kovaleva использовано дважды (тонер и пэды —
  // разные кадры одного снимка), в подписи оно должно встретиться один раз.
  const allPhotos = [
    photos.set,
    photos.ingredients,
    ...products.map((p) => p.photo),
  ].filter(Boolean);
  const credits = [...new Map(allPhotos.map((c) => [c.url, c])).values()];

  return (
    <div id="top" className="min-h-dvh">
      <DemoBar />
      <Header
        brand={<Logo />}
        links={[
          { href: "#steps", label: "5 шагов" },
          { href: "#ingredients", label: "Состав" },
          { href: "#set", label: "Набор" },
          { href: "#faq", label: "Вопросы" },
        ]}
        cta={{ href: "#order", label: "Подобрать уход" }}
      />

      <main>
        {/* Первый экран */}
        <section className="px-5 pb-[clamp(56px,8vw,112px)] pt-[clamp(32px,6vw,88px)]">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div className="flex flex-col gap-6">
              <p className={eyebrowClass}>Корейский уход · 5 шагов</p>
              <h1 className="font-display text-[clamp(2rem,1.2rem+3.4vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
                Увлажнённая и&nbsp;спокойная кожа без стянутости
              </h1>
              <p className="max-w-[50ch] text-lg leading-relaxed text-muted">
                Тонер, пэды, сыворотка, крем и&nbsp;мист от&nbsp;Anua, Dr.Althea
                и&nbsp;Biodance. Средства дополняют друг друга и&nbsp;подходят
                для сухой и&nbsp;чувствительной кожи.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href="#order" className={btnPrimary}>
                  Подобрать уход под мою кожу
                </a>
                <a href="#steps" className={btnGhost}>
                  Смотреть 5 шагов
                </a>
              </div>
              <p className="text-sm text-muted">
                Подскажем набор под ваш тип кожи — бесплатно
              </p>
            </div>
            <HeroArt />
          </div>
        </section>

        {/* Полоса брендов */}
        <div className="border-y border-line bg-surface">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-10 gap-y-3 px-5 py-5">
            <p className="flex flex-wrap gap-x-9 gap-y-2 font-display text-base font-medium tracking-[0.06em]">
              <span>ANUA</span>
              <span>DR.ALTHEA</span>
              <span>BIODANCE</span>
            </p>
            <p className="text-[15px] font-semibold text-muted">
              5 средств · утро, вечер и&nbsp;днём · 1 ритуал
            </p>
          </div>
        </div>

        <Section eyebrow="Узнаёте себя?" title="Когда кожа просит помощи">
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            {problems.map((it, i) => (
              <article
                key={it.title}
                className="flex flex-col gap-3 rounded-[20px] bg-surface p-7 shadow-[var(--shadow-card)]"
              >
                <span className="grid size-11 place-items-center rounded-full bg-soft font-display font-semibold text-accent-text">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {it.title}
                </h3>
                <p className="leading-relaxed text-muted">{it.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="steps"
          eyebrow="Ритуал"
          title="5 шагов, которые работают вместе"
          lead="Каждое средство отвечает за свою задачу: подготовить, очистить поры, напитать влагой, успокоить и поддержать кожу днём."
          tone="rounded-t-[var(--radius-card)] bg-surface"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </Section>

        <Section
          id="ingredients"
          eyebrow="Состав без секретов"
          title="Что внутри и зачем"
          tone="bg-surface"
          className="!pt-0"
        >
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <Photo
              photo={photos.ingredients}
              className="aspect-[4/3] w-full rounded-[20px] lg:aspect-auto lg:h-full"
              sizes="(min-width: 1024px) 470px, 100vw"
              fallback="linear-gradient(135deg in oklab, #fbe7e5, #efe6f7)"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {ingredients.map((it) => (
                <div
                  key={it.title}
                  className="flex flex-col gap-2.5 rounded-[20px] p-6"
                  style={{ background: it.tint }}
                >
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {it.title}
                  </h3>
                  <p className="leading-relaxed text-muted">{it.text}</p>
                  <p className="mt-auto pt-1 text-[13px] font-bold">
                    {it.where}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Набор */}
        <section
          id="set"
          className="scroll-mt-20 px-5 py-[clamp(64px,10vw,128px)]"
        >
          <div
            className="mx-auto grid max-w-6xl items-center gap-8 rounded-[var(--radius-card)] p-[clamp(20px,4vw,48px)] md:grid-cols-2 lg:grid-cols-[0.7fr_1fr_0.95fr]"
            style={{
              background: "linear-gradient(135deg in oklab, #f9d7dc, #fde3d3)",
            }}
          >
            <Photo
              photo={photos.set}
              className="aspect-[4/3] w-full rounded-[20px] md:col-span-2 lg:col-span-1 lg:aspect-[3/4]"
              sizes="(min-width: 1024px) 300px, 100vw"
              fallback="linear-gradient(160deg in oklab, #fff3f1, #f6c9d3)"
            />
            <div>
              <p className={eyebrowClass}>Весь ритуал сразу</p>
              <h2 className="mt-3 font-display text-[clamp(1.6rem,1.1rem+2vw,2.45rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
                Набор из&nbsp;5 средств
              </h2>
              <ul className="mt-6 grid gap-2.5">
                {products.map((p) => (
                  <li key={p.id} className="flex items-baseline gap-3">
                    <span
                      aria-hidden="true"
                      className="size-2 shrink-0 -translate-y-0.5 rounded-full bg-accent"
                    />
                    <span>
                      {p.brand} {p.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3.5 rounded-[20px] bg-surface p-8 shadow-[var(--shadow-card)]">
              <p className={eyebrowClass}>Стоимость набора</p>
              <p className="font-display text-[2.4rem] font-semibold leading-none tracking-[-0.02em]">
                {total ? rub(total) : "— ₽"}
              </p>
              <p className="leading-relaxed text-muted">
                {total
                  ? `Сумма цен пяти средств в «Золотом Яблоке» на ${SITE.pricesDate}.`
                  : "Цены уточняются."}{" "}
                Подскажем порядок нанесения под ваш тип кожи.
              </p>
              <a href="#order" className={btnPrimary}>
                Заказать набор
              </a>
              <p className="text-sm text-muted">
                Можно взять и&nbsp;одно средство
              </p>
            </div>
          </div>
        </section>

        <Section
          id="faq"
          eyebrow="Вопросы"
          title="Частые вопросы"
          className="!pt-0"
        >
          <Faq items={faq} />
        </Section>

        {/* Заявка */}
        <section
          id="order"
          className="scroll-mt-20 px-5 pb-[clamp(64px,10vw,128px)]"
        >
          <div className="mx-auto grid max-w-6xl gap-10 rounded-[var(--radius-card)] bg-soft p-[clamp(20px,5vw,64px)] md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-4">
              <p className={eyebrowClass}>Подбор ухода</p>
              <h2 className="font-display text-[clamp(1.6rem,1.1rem+2vw,2.45rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
                Расскажем, с&nbsp;чего начать именно вам
              </h2>
              <p className="max-w-[46ch] text-[17px] leading-relaxed text-muted">
                Оставьте имя и&nbsp;контакт — уточним тип кожи и&nbsp;подскажем
                набор. Ни&nbsp;к&nbsp;чему не&nbsp;обязывает.
              </p>
            </div>
            <div className="rounded-[20px] bg-surface p-[clamp(20px,3vw,32px)] shadow-[var(--shadow-card)]">
              <ZayavkaForm
                fields={[
                  {
                    name: "imya",
                    label: "Имя",
                    required: true,
                    autoComplete: "given-name",
                    placeholder: "Анна",
                  },
                  {
                    name: "kontakt",
                    label: "Telegram или телефон",
                    required: true,
                    placeholder: "@username или +7",
                  },
                ]}
                button="Подобрать уход"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer
        brand={<Logo />}
        about="Корейский уход за кожей лица в пять шагов: Anua, Dr.Althea и Biodance."
        credits={
          credits.length > 0 && (
            <p>
              Фото:{" "}
              {credits.map((c, i) => (
                <span key={c.url}>
                  {i > 0 && ", "}
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-ink"
                  >
                    {c.author}
                  </a>{" "}
                  ({sourceName(c.url)})
                </span>
              ))}
            </p>
          )
        }
      />
    </div>
  );
}
