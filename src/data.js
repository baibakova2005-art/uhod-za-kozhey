// Все тексты и цены сайта — в одном месте. Поменять цену = поправить одну строку.

export const SITE = {
  name: "Средства для ухода за кожей",
  // Дата, на которую взяты цены из «Золотого Яблока» (скриншот мобильного приложения, прислала Екатерина).
  pricesDate: "15.09.2026",
};

// price: число в рублях или null, пока цена не известна.
// tint: фон плашки «Шаг N» над фото. photo: см. блок photos ниже по файлу — своя структура на каждый товар.
export const products = [
  {
    id: "toner",
    step: 1,
    when: "утро и вечер",
    brand: "Anua",
    type: "тонер-эссенция",
    name: "Peach 77 Niacin Essence Toner",
    volume: "250 мл",
    text: "Мягко отшелушивает, выравнивает тон и готовит кожу к следующим шагам.",
    tags: ["77% персика", "2% ниацинамида", "пантенол", "церамиды"],
    how: "после умывания, руками или ватным диском.",
    price: 2337,
    priceOld: 3541,
    tint: "#fbe3e6",
    photo: {
      file: "step-toner",
      width: 1200,
      height: 1000,
      alt: "Флакон-капельница на розовой ткани",
      author: "Polina Kovaleva",
      url: "https://www.pexels.com/photo/cosmetic-containers-on-white-textile-8101673/",
    },
  },
  {
    id: "pads",
    step: 2,
    when: null,
    brand: "Biodance",
    type: "тонер-пэды",
    name: "Collagen Gel Toner Pads",
    volume: "60 шт.",
    text: "Гелевые пэды с коллагеном: визуально сужают поры, поддерживают упругость.",
    tags: ["коллаген", "гиалуроновая кислота", "пептиды"],
    how: "протереть лицо от центра к краям, минуя глаза.",
    price: 2106,
    priceOld: 2340,
    tint: "#efe7f8",
    photo: {
      file: "step-pads",
      width: 1100,
      height: 1000,
      alt: "Баночка с бамбуковой крышкой на белой ткани",
      author: "Polina Kovaleva",
      url: "https://www.pexels.com/photo/cosmetic-containers-on-white-textile-8101673/",
    },
  },
  {
    id: "serum",
    step: 3,
    when: null,
    brand: "Anua",
    type: "сыворотка",
    name: "PDRN Hyaluronic Acid Capsule 100 Serum",
    volume: "30 мл",
    text: "Гиалуроновая кислота и PDRN: глубоко увлажняет, кожа выглядит гладкой.",
    tags: ["гиалуроновая кислота", "PDRN", "капсулы"],
    how: "2–3 капли после тонера.",
    price: 2632,
    priceOld: 3656,
    tint: "#fdeade",
    photo: {
      file: "step-serum",
      width: 1600,
      height: 1067,
      alt: "Флакон с масляной сывороткой и пипеткой на розовом фоне",
      author: "Maria Lupan",
      url: "https://unsplash.com/photos/BlcA2-o-7IM",
    },
  },
  {
    id: "cream",
    step: 4,
    when: null,
    brand: "Dr.Althea",
    type: "крем",
    name: "345 Relief Cream",
    volume: "50 мл",
    text: "Гелевый крем: укрепляет защитный барьер, помогает коже после высыпаний.",
    tags: ["ниацинамид", "пантенол", "центелла", "церамиды"],
    how: "завершающий шаг ухода.",
    price: 2957,
    priceOld: 3215,
    tint: "#e5f1ec",
    photo: {
      file: "step-cream",
      width: 1600,
      height: 1999,
      alt: "Тюбик крема на растёртом следе крема",
      author: "Birgith Roosipuu",
      url: "https://unsplash.com/photos/4uN0JxJGRQE",
    },
  },
  {
    id: "mist",
    step: 5,
    when: "днём",
    brand: "Dr.Althea",
    type: "крем-мист",
    name: "345 Relief Cream Mist",
    volume: "60 мл",
    text: "Двухслойный мист: крем и эссенция. Снимает сухость и стянутость в течение дня.",
    tags: ["пантенол", "мадекассосид"],
    how: "взболтать, закрыть глаза и распылить с 20 см.",
    price: 1663,
    priceOld: null,
    tint: "#e3eef6",
    photo: {
      file: "step-mist",
      width: 1600,
      height: 2399,
      alt: "Флакон-спрей на светлом фоне",
      author: "Priscila Caetano",
      url: "https://www.pexels.com/photo/beauty-product-in-a-dispenser-bottle-15766704/",
    },
  },
];

export const problems = [
  {
    title: "Стянутость после умывания",
    text: "Хочется сразу нанести крем, а к обеду кожа снова сухая.",
    answer:
      "Тонер-эссенция возвращает влагу сразу после умывания, а сыворотка удерживает её в течение дня.",
    step: "toner",
  },
  {
    title: "Тусклый тон и шелушения",
    text: "Тональное ложится пятнами, вокруг рта и на крыльях носа — сухие участки.",
    answer:
      "Ниацинамид выравнивает тон, пэды мягко убирают шелушения и визуально сужают поры.",
    step: "pads",
  },
  {
    title: "Покраснения и следы",
    text: "Кожа реагирует на новые средства, после высыпаний остаются красные пятна.",
    answer:
      "Крем с пантенолом и центеллой успокаивает раздражение и укрепляет защитный барьер.",
    step: "cream",
  },
];

export const ingredients = [
  {
    title: "Ниацинамид",
    icon: "glow",
    text: "Выравнивает тон и помогает бороться со следами после высыпаний.",
    where: "Тонер Anua · крем Dr.Althea",
    tint: "#fbe7e5",
  },
  {
    title: "Гиалуроновая кислота",
    icon: "moisture",
    text: "Притягивает и удерживает влагу — кожа не стягивает.",
    where: "Сыворотка Anua · пэды Biodance",
    tint: "#fde9dc",
  },
  {
    title: "Коллаген",
    icon: "spring",
    text: "Низкомолекулярный — легко впитывается, поддерживает упругость.",
    where: "Пэды Biodance",
    tint: "#efe6f7",
  },
  {
    title: "Пантенол и центелла",
    icon: "leaf",
    text: "Успокаивают раздражение и укрепляют защитный барьер.",
    where: "Тонер Anua · крем и мист Dr.Althea",
    tint: "#e6f1ec",
  },
];

export const faq = [
  {
    q: "Подойдёт ли уход чувствительной коже?",
    a: "Производители позиционируют эти средства для чувствительной кожи. Но реакция всегда индивидуальна: перед первым применением нанесите немного средства на сгиб локтя и подождите сутки.",
  },
  {
    q: "Обязательно брать все 5 средств?",
    a: "Нет. Можно начать с одного-двух — например, с тонера и крема — и добавлять остальные постепенно.",
  },
  {
    q: "Когда будет заметен результат?",
    a: "Ощущение увлажнения — сразу после нанесения. Изменения тона и текстуры кожи требуют регулярного ухода в течение нескольких недель.",
  },
  {
    q: "Как оформить заказ?",
    a: "Оставьте имя и контакт в форме внизу страницы — подскажем набор под ваш тип кожи. Это демо-сайт: заявка никуда не отправляется.",
  },
];

// Фото с Unsplash и Pexels (бесплатные лицензии, без логотипов чужих брендов) —
// для блоков «Состав» и «Набор». Фото товаров лежат прямо в products.photo выше.
// file — имя без размера и расширения: в public/photos лежат file-480/960/1600.webp.
export const photos = {
  ingredients: {
    file: "ingredients",
    width: 2200,
    height: 1467,
    alt: "Розовый гель, белый крем и прозрачная сыворотка на бежевом фоне",
    author: "Nazir Ahmad",
    url: "https://unsplash.com/photos/cosmetic-cream-and-gel-swirls-A1gPNi60BlI",
  },
  set: {
    file: "set",
    width: 1600,
    height: 2400,
    alt: "Белый крем стекает по руке на розовом фоне",
    author: "ian dooley",
    url: "https://unsplash.com/photos/hand-with-white-liquid-on-pink-y_CSTKJ0bEs",
  },
};

// Четыре коротких факта под кнопкой первого экрана. icon — ключ из src/Icons.jsx.
export const facts = [
  { icon: "steps", text: "5 шагов ухода" },
  { icon: "drop", text: "Сухая и чувствительная" },
  { icon: "label", text: "Состав на этикетке" },
  { icon: "chat", text: "Подбор бесплатно" },
];

// Бегущая строка под первым экраном: бренды вперемешку с тем, что внутри.
export const marqueeItems = [
  "ANUA",
  "77% экстракта персика",
  "DR.ALTHEA",
  "PDRN и гиалуроновая кислота",
  "BIODANCE",
  "коллаген в пэдах",
  "пантенол",
  "центелла",
  "церамиды",
];

// Врезка-пауза после пяти шагов: одна мысль крупно.
export const quote = {
  text: "Коже нужна привычка, а не героизм",
  note: "Пять средств и десять минут утром и вечером. Менять всё сразу не нужно — достаточно повторять.",
};
