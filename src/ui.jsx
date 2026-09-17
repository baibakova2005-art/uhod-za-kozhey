import { useEffect, useId, useRef, useState } from "react";

// Общие детали демо-сайта: плашка «демо», шапка, секция, вопросы, форма, подвал.
// Основа — src/ui.jsx из demo-manikyur, стили подогнаны под вариант A «Пудра».

const BASE = import.meta.env.BASE_URL;

export const btnPrimary =
  "shine inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 py-3 text-[15px] font-bold text-on-accent shadow-[var(--shadow-btn)] transition duration-200 hover:-translate-y-0.5 hover:bg-accent-hover active:translate-y-0 disabled:opacity-60";
export const btnGhost =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-line-strong bg-surface px-7 py-3 text-[15px] font-bold text-ink transition duration-200 hover:-translate-y-0.5 hover:border-ink active:translate-y-0";

export function DemoBar() {
  return (
    <div className="bg-ink text-bg">
      <p className="mx-auto max-w-6xl px-5 py-2 text-center text-[13px] leading-snug">
        Демо-сайт для портфолио: магазин вымышленный, заказы не принимаются.{" "}
        <a
          href="https://www.fl.ru/users/baibakova2005/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2"
        >
          Разработка — Екатерина, FL.ru
        </a>
      </p>
    </div>
  );
}

export function Header({ brand, links, cta }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3">
        <a href="#top" className="flex min-h-11 items-center">
          {brand}
        </a>

        <nav
          aria-label="Основное меню"
          className="hidden items-center gap-7 text-[15px] font-semibold min-[900px]:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          {cta && (
            <a href={cta.href} className={`${btnPrimary} min-h-11 px-5 py-2`}>
              {cta.label}
            </a>
          )}
        </nav>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobilnoe-menyu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          className="-mr-2 inline-flex size-11 shrink-0 items-center justify-center rounded-lg text-ink transition hover:bg-soft min-[900px]:hidden"
        >
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-200 ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-200 ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobilnoe-menyu"
        aria-label="Меню на телефоне"
        hidden={!open}
        className="h-[calc(100dvh-64px)] overflow-y-auto border-t border-line min-[900px]:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-4 text-lg text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        {cta && (
          <div className="px-5 py-4">
            <a
              href={cta.href}
              onClick={() => setOpen(false)}
              className={`${btnPrimary} w-full`}
            >
              {cta.label}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

// Появление блока при прокрутке. Срабатывает один раз и только если человек
// не отключил анимации — тогда блок просто виден сразу (правило в index.css).
export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver !== "function") return;
    // Прячем блоки только когда анимация точно заработает
    document.documentElement.classList.add("js-anim");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

// Тёмный блок, по которому за курсором двигается мягкое световое пятно.
// На телефоне курсора нет — остаётся ровное свечение по центру.
export function Spotlight({ children, className = "" }) {
  const ref = useRef(null);
  const move = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onPointerMove={move} className={`spot ${className}`}>
      {children}
    </div>
  );
}

// Бегущая строка. Второй ряд — копия для бесшовной прокрутки, он скрыт от
// скринридера. У кого отключены анимации — строка просто стоит (правило в index.css).
export function Marquee({ items, label }) {
  const row = (copy) => (
    <ul
      className="marquee__row"
      aria-hidden={copy ? "true" : undefined}
      key={copy ? "copy" : "main"}
    >
      {items.map((t, i) => (
        <li key={`${t}-${i}`} className="flex items-center gap-8">
          <span className="whitespace-nowrap font-display text-[15px] font-semibold tracking-[0.06em]">
            {t}
          </span>
          <span
            aria-hidden="true"
            className="size-1.5 shrink-0 rounded-full bg-accent/45"
          />
        </li>
      ))}
    </ul>
  );
  return (
    <div
      className="marquee border-y border-line bg-surface py-4"
      role="group"
      aria-label={label}
    >
      <div className="marquee__track">{[row(false), row(true)]}</div>
    </div>
  );
}

// Мягкая волна на стыке двух секций: сверху цвет уходящей секции, снизу — следующей.
export function Wave({ from, to, flip = false, className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`leading-[0] ${className}`}
      style={{ background: from }}
    >
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className={`block h-[clamp(36px,5vw,74px)] w-full ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0 58C220 6 400 96 700 64c260-28 460 34 740-6v52H0z"
          fill={to}
        />
      </svg>
    </div>
  );
}

export const eyebrowClass =
  "text-[13px] font-bold uppercase tracking-[0.1em] text-accent-text";

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = "",
  tone = "",
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-[clamp(64px,10vw,128px)] ${tone} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5">
        {(eyebrow || title) && (
          <div className="mb-[clamp(32px,5vw,48px)] max-w-[40rem]">
            {eyebrow && <p className={`mb-4 ${eyebrowClass}`}>{eyebrow}</p>}
            {title && (
              <h2 className="font-display text-[clamp(1.6rem,1.1rem+2vw,2.45rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
                {title}
              </h2>
            )}
            {lead && (
              <p className="mt-4 max-w-[58ch] text-[17px] leading-relaxed text-muted">
                {lead}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Faq({ items }) {
  return (
    <div className="grid max-w-[52rem] gap-3">
      {items.map((it) => (
        <details
          key={it.q}
          className="group rounded-[20px] bg-surface px-6 shadow-[var(--shadow-card)]"
        >
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 text-[17px] font-bold [&::-webkit-details-marker]:hidden">
            {it.q}
            <span
              aria-hidden="true"
              className="grid size-8 shrink-0 place-items-center rounded-full bg-soft font-display text-lg text-accent-text transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-[62ch] pb-5 leading-relaxed text-muted">{it.a}</p>
        </details>
      ))}
    </div>
  );
}

const pole =
  "w-full rounded-[var(--radius-field)] border border-line-strong bg-surface px-4 py-3 text-base text-ink transition placeholder:text-muted/70 focus:border-accent focus:outline-2 focus:outline-offset-0 focus:outline-accent";

// fields: [{ name, label, type, required, placeholder, autoComplete }]
export function ZayavkaForm({ fields, button, note }) {
  const id = useId();
  const [status, setStatus] = useState("idle");

  function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (data.adres_dostavki) {
      setStatus("ok");
      return;
    }
    // Демо-сайт: приёмника нет, данные никуда не уходят и нигде не сохраняются.
    // На сайте клиента здесь отправка в почту или CRM на российском сервере (152-ФЗ).
    setStatus("demo");
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      {fields.map((f) => {
        const fid = `${id}-${f.name}`;
        return (
          <div key={f.name}>
            <label htmlFor={fid} className="mb-2 block text-sm font-semibold">
              {f.label}
              {f.required && <span className="text-accent-text"> *</span>}
            </label>
            <input
              id={fid}
              name={f.name}
              type={f.type ?? "text"}
              required={f.required}
              autoComplete={f.autoComplete}
              placeholder={f.placeholder}
              className={pole}
            />
          </div>
        );
      })}

      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor={`${id}-adres`}>Адрес доставки</label>
        <input
          id={`${id}-adres`}
          type="text"
          name="adres_dostavki"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Согласие: не предзаполнено, обязательно, ссылки вне label (иначе клик по ссылке снимает галочку). */}
      <div className="flex items-start gap-3 text-sm leading-relaxed text-muted">
        <input
          id={`${id}-soglasie`}
          type="checkbox"
          name="soglasie"
          required
          className="mt-0.5 size-5 shrink-0 cursor-pointer accent-[var(--color-accent)]"
        />
        <p>
          <label htmlFor={`${id}-soglasie`} className="cursor-pointer">
            Даю согласие на обработку персональных данных.
          </label>{" "}
          <a
            href={`${BASE}consent/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-2"
          >
            Текст согласия
          </a>
          {" · "}
          <a
            href={`${BASE}privacy/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-2"
          >
            Политика
          </a>
        </p>
      </div>

      <div>
        <button type="submit" className={`${btnPrimary} w-full`}>
          {button}
        </button>
        {note && <p className="mt-3 text-sm text-muted">{note}</p>}
      </div>

      <div role="status" aria-live="polite" className="text-[15px]">
        {status === "demo" && (
          <p className="rounded-[var(--radius-field)] border border-line-strong bg-soft px-4 py-3 text-ink">
            Это демо-сайт: заявка никуда не отправлена и не сохранена. На
            рабочем сайте здесь подключается почта или CRM.
          </p>
        )}
      </div>
    </form>
  );
}

export function Footer({ brand, about, credits }) {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 text-[15px] md:grid-cols-[1.4fr_1fr]">
        <div className="max-w-sm">
          {brand}
          <p className="mt-4 leading-relaxed text-muted">{about}</p>
        </div>
        <div>
          <p className="mb-3 font-semibold">Документы</p>
          <ul className="space-y-2">
            <li>
              <a
                className="text-muted underline underline-offset-2 hover:text-ink"
                href={`${BASE}privacy/`}
              >
                Политика обработки данных
              </a>
            </li>
            <li>
              <a
                className="text-muted underline underline-offset-2 hover:text-ink"
                href={`${BASE}consent/`}
              >
                Согласие на обработку
              </a>
            </li>
            <li>
              <a
                className="text-muted underline underline-offset-2 hover:text-ink"
                href={`${BASE}terms/`}
              >
                Пользовательское соглашение
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5 text-[13px] text-muted">
          <p>© 2026 · Демо-проект, реквизиты подставляются заказчиком</p>
          {credits}
        </div>
      </div>
    </footer>
  );
}
