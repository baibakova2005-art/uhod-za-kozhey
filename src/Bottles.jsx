// Флаконы нарисованы кодом: это иллюстрации в цветах товаров, а не фото упаковок.
// Фото упаковок с сайтов брендов и магазинов брать нельзя — у них есть правообладатель.

export function Toner(props) {
  return (
    <svg viewBox="0 0 120 220" aria-hidden="true" {...props}>
      <rect
        x="38"
        y="4"
        width="44"
        height="36"
        rx="8"
        fill="#fff"
        stroke="#e8c7cf"
        strokeWidth="2"
      />
      <rect x="20" y="38" width="80" height="176" rx="20" fill="#f8c9d2" />
      <rect x="20" y="38" width="80" height="46" rx="20" fill="#fbdde3" />
      <rect
        x="31"
        y="56"
        width="8"
        height="130"
        rx="4"
        fill="#fff"
        opacity=".55"
      />
      <rect
        x="34"
        y="112"
        width="52"
        height="64"
        rx="6"
        fill="#fff"
        opacity=".9"
      />
      <rect x="42" y="126" width="36" height="5" rx="2.5" fill="#d07a8f" />
      <rect x="46" y="138" width="28" height="3" rx="1.5" fill="#e2aab8" />
      <rect x="46" y="147" width="28" height="3" rx="1.5" fill="#e2aab8" />
    </svg>
  );
}

export function Serum(props) {
  return (
    <svg viewBox="0 0 120 220" aria-hidden="true" {...props}>
      <ellipse cx="60" cy="22" rx="15" ry="18" fill="#2f2328" />
      <rect
        x="40"
        y="36"
        width="40"
        height="30"
        rx="6"
        fill="#f1e4dc"
        stroke="#e1cfc4"
        strokeWidth="2"
      />
      <rect x="26" y="64" width="68" height="150" rx="16" fill="#f6d6c4" />
      <circle cx="48" cy="96" r="5" fill="#fff" opacity=".8" />
      <circle cx="70" cy="110" r="4" fill="#fff" opacity=".8" />
      <circle cx="56" cy="190" r="4" fill="#fff" opacity=".8" />
      <circle cx="78" cy="176" r="5" fill="#fff" opacity=".8" />
      <rect
        x="36"
        y="124"
        width="48"
        height="46"
        rx="6"
        fill="#fff"
        opacity=".92"
      />
      <rect x="44" y="138" width="32" height="5" rx="2.5" fill="#c9876a" />
      <rect x="48" y="150" width="24" height="3" rx="1.5" fill="#e0b39d" />
    </svg>
  );
}

export function Pads(props) {
  return (
    <svg viewBox="0 0 150 150" aria-hidden="true" {...props}>
      <rect x="8" y="30" width="134" height="34" rx="10" fill="#c7b3e3" />
      <rect x="14" y="60" width="122" height="84" rx="14" fill="#e9e0f5" />
      <rect
        x="40"
        y="82"
        width="70"
        height="40"
        rx="6"
        fill="#fff"
        opacity=".92"
      />
      <rect x="50" y="94" width="50" height="5" rx="2.5" fill="#9c83c4" />
      <rect x="56" y="106" width="38" height="3" rx="1.5" fill="#c3b1e0" />
    </svg>
  );
}

export function Cream(props) {
  return (
    <svg viewBox="0 0 120 220" aria-hidden="true" {...props}>
      <rect x="28" y="6" width="64" height="12" rx="3" fill="#dfe9e5" />
      <path
        d="M30 18 H90 L100 176 H20 Z"
        fill="#f7faf9"
        stroke="#d6e2de"
        strokeWidth="2"
      />
      <rect x="40" y="176" width="40" height="38" rx="6" fill="#7db5a6" />
      <rect x="38" y="70" width="44" height="58" rx="6" fill="#e6f1ed" />
      <rect x="46" y="84" width="28" height="6" rx="3" fill="#5c9888" />
      <rect x="48" y="98" width="24" height="3" rx="1.5" fill="#9dc8bc" />
      <rect x="48" y="107" width="24" height="3" rx="1.5" fill="#9dc8bc" />
    </svg>
  );
}

export function Mist(props) {
  return (
    <svg viewBox="0 0 120 220" aria-hidden="true" {...props}>
      <rect
        x="50"
        y="4"
        width="22"
        height="18"
        rx="4"
        fill="#fff"
        stroke="#d7e3ec"
        strokeWidth="2"
      />
      <rect x="40" y="20" width="40" height="24" rx="5" fill="#e9eff4" />
      <rect x="28" y="42" width="64" height="172" rx="24" fill="#fbfbf7" />
      <path
        d="M28 66 a24 24 0 0 1 24 -24 H68 a24 24 0 0 1 24 24 V126 H28 Z"
        fill="#dcebf6"
      />
      <rect
        x="37"
        y="58"
        width="7"
        height="130"
        rx="3.5"
        fill="#fff"
        opacity=".7"
      />
      <rect
        x="40"
        y="140"
        width="40"
        height="44"
        rx="6"
        fill="#fff"
        stroke="#e6ecef"
        strokeWidth="1.5"
      />
      <rect x="47" y="152" width="26" height="5" rx="2.5" fill="#6d9bbf" />
      <rect x="50" y="164" width="20" height="3" rx="1.5" fill="#a9c5da" />
    </svg>
  );
}

export const BOTTLES = {
  toner: Toner,
  serum: Serum,
  pads: Pads,
  cream: Cream,
  mist: Mist,
};
