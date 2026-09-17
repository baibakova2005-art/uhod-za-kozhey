// Иконки нарисованы одним набором: сетка 24, только обводка, толщина 1.6,
// скруглённые концы. Цвет наследуется от текста (currentColor), поэтому иконка
// всегда в тон блоку. Все декоративные — подпись даёт соседний текст.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

// Пять шагов: список с точками
export const IconSteps = (p) => (
  <svg {...base} {...p}>
    <path d="M9 6.5h11M9 12h11M9 17.5h11" />
    <circle cx="4.5" cy="6.5" r="1.4" />
    <circle cx="4.5" cy="12" r="1.4" />
    <circle cx="4.5" cy="17.5" r="1.4" />
  </svg>
);

// Тип кожи: капля
export const IconDrop = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3.5c3.6 4.7 5.6 7.8 5.6 10.3a5.6 5.6 0 1 1-11.2 0c0-2.5 2-5.6 5.6-10.3z" />
    <path d="M9.4 14.6a2.6 2.6 0 0 0 2.6 2.6" />
  </svg>
);

// Состав на этикетке: ярлык
export const IconLabel = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H13l7 7-6.5 6.5-7-7z" />
    <circle cx="8.6" cy="9.6" r="1.2" />
  </svg>
);

// Подбор бесплатно: диалог
export const IconChat = (p) => (
  <svg {...base} {...p}>
    <path d="M20 12.8c0 3.5-3.6 6.3-8 6.3-.9 0-1.8-.1-2.6-.3L4 20.5l1.4-3.4C4.5 15.9 4 14.4 4 12.8 4 9.3 7.6 6.5 12 6.5s8 2.8 8 6.3z" />
    <path d="M9.2 12.8h5.6" />
  </svg>
);

// Ниацинамид: ровный тон — солнце-сияние
export const IconGlow = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 3.4v2.2M12 18.4v2.2M20.6 12h-2.2M5.6 12H3.4M18 6l-1.6 1.6M7.6 16.4 6 18M18 18l-1.6-1.6M7.6 7.6 6 6" />
  </svg>
);

// Гиалуроновая кислота: влага — капля с волной
export const IconMoisture = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3.5c3.4 4.4 5.2 7.4 5.2 9.7a5.2 5.2 0 1 1-10.4 0c0-2.3 1.8-5.3 5.2-9.7z" />
    <path d="M7.4 13.6c1-.8 2-.8 3 0s2 .8 3 0 2-.8 3 0" />
  </svg>
);

// Коллаген: упругость — пружина
export const IconSpring = (p) => (
  <svg {...base} {...p}>
    <path d="M6 5.5h12M6 18.5h12" />
    <path d="M17.5 5.5 6.5 10M17.5 10 6.5 14.5M17.5 14.5 6.5 18.5" />
  </svg>
);

// Пантенол и центелла: успокоение — лист
export const IconLeaf = (p) => (
  <svg {...base} {...p}>
    <path d="M19 5c0 7.2-3.6 11.5-9 11.5-1.4 0-2.6-.3-3.6-.8C6 9.6 10.4 5.6 19 5z" />
    <path d="M5 19c1.6-3.2 4-5.6 7.2-7.2" />
  </svg>
);

export const ICONS = {
  steps: IconSteps,
  drop: IconDrop,
  label: IconLabel,
  chat: IconChat,
  glow: IconGlow,
  moisture: IconMoisture,
  spring: IconSpring,
  leaf: IconLeaf,
};
