import {
  DemoBar,
  Header,
  Section,
  Faq,
  ZayavkaForm,
  Footer,
  Marquee,
  Wave,
  Reveal,
  Spotlight,
  btnPrimary,
  btnGhost,
  eyebrowClass,
} from "./ui.jsx";
import { ICONS } from "./Icons.jsx";
import {
  SITE,
  products,
  problems,
  ingredients,
  faq,
  photos,
  facts,
  marqueeItems,
  quote,
} from "./data.js";

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
function Photo({ photo, className = "", sizes, fallback, eager = false }) {
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
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      alt={photo.alt}
      className={`${className} object-cover`}
    />
  );
}

function HeroArt() {
  // Фотографии берём те же, что в блоке «5 шагов»: флаконы с пустыми этикетками,
  // без названий брендов. Коллаж из трёх кадров разного размера — приём из
  // журнальных лендингов, ссылка на разбор в chernoviki/.
  const byId = Object.fromEntries(products.map((p) => [p.id, p]));
  const chip =
    "absolute whitespace-nowrap rounded-full bg-surface px-4 py-2.5 text-[13px] font-bold shadow-[var(--shadow-card)] sm:text-sm";
  const frame =
    "h-full w-full rounded-[22px] shadow-[0_2px_4px_rgba(90,30,50,0.08),0_30px_60px_-30px_rgba(120,30,60,0.45)]";
  return (
    <div
      className="relative aspect-[1/0.92] overflow-hidden rounded-[var(--radius-card)] p-[5%]"
      style={{
        background:
          "radial-gradient(circle at 30% 20%, #fff 0 10%, transparent 45%), linear-gradient(150deg in oklab, #fbd9d6, #fde5d3 55%, #f3dbef)",
      }}
    >
      <div className="grid h-full grid-cols-5 grid-rows-2 gap-[3%]">
        <Photo
          photo={byId.toner.photo}
          className={`col-span-3 row-span-2 ${frame}`}
          sizes="(min-width: 1024px) 330px, 55vw"
          eager
        />
        <Photo
          photo={byId.serum.photo}
          className={`col-span-2 ${frame}`}
          sizes="(min-width: 1024px) 220px, 35vw"
          eager
        />
        <Photo
          photo={byId.pads.photo}
          className={`col-span-2 ${frame}`}
          sizes="(min-width: 1024px) 220px, 35vw"
          eager
        />
      </div>
      <span className={`${chip} left-[6%] top-[6%]`}>
        <b className="text-accent-text">77%</b> экстракта персика
      </span>
      <span className={`${chip} right-[4%] top-[36%]`}>
        PDRN + <b className="text-accent-text">гиалуроновая</b>
      </span>
      <span className={`${chip} bottom-[8%] right-[4%]`}>
        коллаген <b className="text-accent-text">в пэдах</b>
      </span>
    </div>
  );
}

// Сетка шагов: телефон — одна колонка, планшет — две, компьютер — ровная линейка из пяти
// одинаковых карточек. Высота выравнивается сеткой, цена и кнопка прижаты к низу карточки.
function ProductCard({ p }) {
  return (
    <article
      id={`step-${p.id}`}
      className="group relative flex h-full scroll-mt-24 flex-col rounded-[20px] bg-bg p-3 transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
    >
      {/* Номер шага крупной антиквой — украшение; настоящий номер читается
          в плашке «Шаг N» над фото. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[104px] right-3 font-serif text-[58px] font-semibold leading-none text-accent-text/10"
      >
        {String(p.step).padStart(2, "0")}
      </span>
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-[14px]"
        style={{ background: p.tint }}
      >
        <span className="absolute left-3 top-3 z-10 rounded-full bg-surface px-3 py-1 text-xs font-bold">
          Шаг {p.step}
        </span>
        {p.when && (
          <span className="absolute bottom-3 left-3 z-10 rounded-full bg-surface/95 px-3 py-1 text-[11px] font-bold">
            {p.when}
          </span>
        )}
        <Photo
          photo={p.photo}
          className="h-full w-full transition duration-300 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 220px, (min-width: 640px) 45vw, 90vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-1.5 pb-1 pt-3.5">
        <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-accent-text">
          {p.brand} · {p.type}
        </p>
        <h3 className="font-display text-[15px] font-semibold leading-snug tracking-[-0.01em]">
          {p.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{p.text}</p>
        <ul className="flex flex-wrap gap-1.5" aria-label="Ключевые компоненты">
          {p.tags.slice(0, 3).map((t) => (
            <li
              key={t}
              className="rounded-full bg-surface px-2 py-0.5 text-[11px] font-semibold"
            >
              {t}
            </li>
          ))}
        </ul>
        <p className="text-[13px] leading-relaxed text-muted">
          <span className="font-semibold text-ink">Как:</span> {p.how}
        </p>
      </div>
      {/* Низ карточки: всегда две строки одинаковой высоты — цена и кнопка во всю ширину.
          Поэтому во всех пяти карточках они встают на один уровень. */}
      <div className="mt-auto flex flex-col gap-2.5 border-t border-dashed border-line-strong/40 px-1.5 pb-1 pt-3">
        <p className="flex flex-wrap items-baseline gap-x-2 leading-tight">
          <span className="font-bold">{p.price ? rub(p.price) : "— ₽"}</span>
          {p.priceOld && (
            <span className="text-[11px] text-muted line-through">
              {rub(p.priceOld)}
            </span>
          )}
          <span className="w-full text-[11px] text-muted">{p.volume}</span>
        </p>
        <a
          href="#order"
          className={`${btnGhost} min-h-10 w-full px-4 py-2 text-[13px]`}
        >
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
  // Сумма по старым ценам и разница с нынешними — цифры из data.js, ничего не выдумываем.
  const totalOld = products.every((p) => p.price)
    ? products.reduce((s, p) => s + (p.priceOld || p.price), 0)
    : null;
  const saving = total && totalOld ? totalOld - total : 0;

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
        <section className="mesh grain relative overflow-hidden px-5 pb-[clamp(56px,8vw,112px)] pt-[clamp(32px,6vw,88px)]">
          {/* Три мягких пятна медленно дрейфуют — фон перестаёт быть плоским */}
          <span
            aria-hidden="true"
            className="mesh__blob left-[-10%] top-[-30%] hidden aspect-square w-[46%] bg-[#f7c6cf] opacity-70 sm:block"
          />
          <span
            aria-hidden="true"
            className="mesh__blob right-[-6%] top-[-10%] hidden aspect-square w-[40%] bg-[#f9d9bd] opacity-70 sm:block"
            style={{ animationDelay: "-8s" }}
          />
          <span
            aria-hidden="true"
            className="mesh__blob bottom-[-34%] left-[34%] hidden aspect-square w-[38%] bg-[#e3d0f2] opacity-60 sm:block"
            style={{ animationDelay: "-16s" }}
          />
          <div className="relative z-[1] mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div className="flex flex-col gap-6">
              <p className={eyebrowClass}>Корейский уход · 5 шагов</p>
              {/* Одно крупное слово вместо длинного заголовка: так первый экран
                  читается с одного взгляда, подробности — строкой ниже. */}
              <h1 className="flex flex-col gap-2">
                <span className="font-serif text-[clamp(4rem,2rem+9vw,8.5rem)] font-semibold leading-[0.85] tracking-[-0.04em]">
                  Уход
                </span>
                <span className="text-[clamp(1.1rem,0.9rem+1.1vw,1.7rem)] font-semibold leading-[1.25] tracking-[-0.01em] text-muted">
                  за кожей без стянутости
                </span>
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
              {/* Четыре факта значками: короче строки текста и сразу отвечают
                  на вопрос «кому это подойдёт» */}
              <ul className="mt-1 grid gap-x-7 gap-y-3.5 text-[15px] font-semibold sm:grid-cols-2">
                {facts.map((f) => {
                  const Icon = ICONS[f.icon];
                  return (
                    <li key={f.text} className="flex items-center gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-soft text-accent-text">
                        <Icon className="size-[19px]" />
                      </span>
                      {f.text}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="relative">
              {/* Мягкое пятно за картинкой, чтобы она не висела на пустом фоне */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(42% 42% at 28% 28%, rgba(248,197,205,.8), transparent 70%), radial-gradient(45% 45% at 78% 72%, rgba(247,214,196,.75), transparent 70%)",
                }}
              />
              <div className="relative">
                <HeroArt />
              </div>
            </div>
          </div>
        </section>

        {/* Бегущая строка: бренды и состав. Останавливается при наведении
            и стоит неподвижно у тех, кто отключил анимации. */}
        <Marquee items={marqueeItems} label="Бренды и состав средств" />

        <Section
          eyebrow="Узнаёте себя?"
          title="Когда кожа просит помощи"
          lead="То, с чем приходят чаще всего, и шаг ритуала, который за это отвечает."
        >
          {/* Строки вместо карточек: симптом → что делаем → конкретный шаг.
              Так человек сразу видит, каким средством решается его проблема. */}
          <Reveal>
            <ul className="border-t border-line">
              {problems.map((it) => {
                const p = products.find((x) => x.id === it.step);
                return (
                  <li
                    key={it.title}
                    className="group relative grid items-center gap-x-8 gap-y-3 border-b border-line py-7 pl-6 pr-2 transition duration-200 hover:bg-surface md:grid-cols-[1fr_1.05fr_auto]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 left-0 top-4 w-[3px] origin-top scale-y-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-y-100"
                    />
                    <div>
                      <h3 className="font-serif text-[clamp(1.25rem,1rem+0.9vw,1.7rem)] font-semibold leading-tight">
                        {it.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted">
                        {it.text}
                      </p>
                    </div>
                    <p className="leading-relaxed text-muted">
                      <span className="font-semibold text-ink">
                        Что делаем:{" "}
                      </span>
                      {it.answer}
                    </p>
                    <a
                      href={`#step-${it.step}`}
                      className="inline-flex items-center gap-3 justify-self-start whitespace-nowrap rounded-full border border-line bg-surface py-2 pl-2 pr-5 text-sm font-bold text-accent-text transition duration-200 hover:border-accent group-hover:translate-x-1"
                    >
                      <Photo
                        photo={p.photo}
                        className="size-11 rounded-full"
                        sizes="44px"
                      />
                      Шаг {p.step} · {p.type}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </Section>

        <Wave from="var(--color-bg)" to="var(--color-surface)" />

        <Section
          id="steps"
          eyebrow="Ритуал"
          title="5 шагов, которые работают вместе"
          lead="Каждое средство отвечает за свою задачу: подготовить, очистить поры, напитать влагой, успокоить и поддержать кожу днём."
          tone="bg-surface !pt-[clamp(32px,5vw,64px)]"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </Section>

        {/* Врезка-пауза между продающими блоками: одна мысль крупно */}
        <section className="bg-surface px-5 pb-[clamp(56px,8vw,96px)]">
          <Spotlight className="mx-auto max-w-4xl rounded-[var(--radius-card)] bg-ink">
            <figure className="relative px-[clamp(20px,5vw,72px)] py-[clamp(40px,6vw,76px)] text-center">
              <blockquote className="font-serif text-[clamp(1.7rem,1.1rem+2.4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-surface">
                {quote.text}
              </blockquote>
              <figcaption className="mx-auto mt-5 max-w-[52ch] leading-relaxed text-[#f4dbe1]">
                {quote.note}
              </figcaption>
            </figure>
          </Spotlight>
        </section>

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
              {ingredients.map((it, i) => {
                const Icon = ICONS[it.icon];
                return (
                  <Reveal key={it.title} delay={i * 80} className="h-full">
                  <div
                    className="flex h-full flex-col gap-2.5 rounded-[20px] p-6"
                    style={{ background: it.tint }}
                  >
                    <span className="grid size-11 place-items-center rounded-full bg-surface/75 text-accent-text">
                      {Icon && <Icon className="size-[22px]" />}
                    </span>
                    <h3 className="font-display text-lg font-semibold leading-snug">
                      {it.title}
                    </h3>
                    <p className="leading-relaxed text-muted">{it.text}</p>
                    <p className="mt-auto pt-1 text-[13px] font-bold">
                      {it.where}
                    </p>
                  </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Section>

        <Wave from="var(--color-surface)" to="var(--color-bg)" />

        {/* Слово-разделитель: пауза для глаза перед блоком набора */}
        <div
          aria-hidden="true"
          className="overflow-hidden px-5 pt-[clamp(16px,3vw,40px)]"
        >
          {/* Буквы залиты фотографией текстур средств вместо плоского цвета */}
          <p
            className="mx-auto max-w-6xl bg-cover bg-center bg-no-repeat text-center font-serif text-[clamp(3.5rem,1.5rem+9vw,9rem)] font-semibold leading-[0.85] tracking-[-0.04em] text-accent-text/25 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]"
            style={{
              backgroundImage: `url(${BASE}photos/ingredients-1600.webp)`,
            }}
          >
            Ритуал
          </p>
        </div>

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
            <div className="relative md:col-span-2 lg:col-span-1">
              <Photo
                photo={photos.set}
                className="aspect-[4/3] w-full rounded-[20px] lg:aspect-[3/4]"
                sizes="(min-width: 1024px) 300px, 100vw"
                fallback="linear-gradient(160deg in oklab, #fff3f1, #f6c9d3)"
              />
              {saving > 0 && (
                <p className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-2xl bg-surface/95 px-3.5 py-2 text-[12px] font-bold leading-snug shadow-[var(--shadow-card)]">
                  Со скидками магазина дешевле на{" "}
                  <span className="text-accent-text">{rub(saving)}</span>
                </p>
              )}
            </div>
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
            <div className="flex flex-col gap-3.5 rounded-[20px] border border-white/70 bg-white/60 p-8 shadow-[var(--shadow-card)] backdrop-blur-xl backdrop-saturate-150">
              <p className={eyebrowClass}>Стоимость набора</p>
              <p className="font-display text-[2.4rem] font-semibold leading-none tracking-[-0.02em]">
                {total ? rub(total) : "— ₽"}
              </p>
              {saving > 0 && (
                <p className="text-sm text-muted">
                  <span className="line-through">{rub(totalOld)}</span> по
                  старым ценам
                </p>
              )}
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
