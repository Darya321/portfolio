export type ProjectCategory = "commercial" | "government" | "championship" | "educational";

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  commercial: "Коммерческий проект",
  government: "Государственный проект",
  championship: "Кейс-чемпионат",
  educational: "Учебный проект"
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  caseCategory: string;
  description: string;
  discipline: string;
  year: string;
  role: string;
  shortDescription: string;
  image: string;
  projectLink: string;
  archivePriority: number;
  coverImage: string;
  gallery: string[];
  accentColor: string;
  tags: string[];
  challenge: string;
  solution: string;
  result: string;
  context: string;
  figmaUrl?: string;
};

// Здесь легко заменить тексты, изображения и ссылки на реальные материалы из Figma.
export const projects: Project[] = [
  {
    slug: "thailand-real-estate",
    title: "NF GROUP — недвижимость в Таиланде",
    category: "commercial",
    caseCategory: "B2C / Landing / Real estate",
    description:
      "Лендинг для пользователей, которые рассматривают покупку недвижимости в Таиланде, но ещё не определились с объектом и бюджетом.",
    discipline: "B2C · Landing · Desktop · Real estate",
    year: "2026",
    role: "UI/UX, адаптация лендинга, визуальная подача кейса",
    shortDescription:
      "Десять смысловых блоков собраны в единый путь: от первого знакомства и выбора бюджета до каталога и консультации.",
    image: "/images/thailand-hero.png",
    projectLink: "https://outrageous-akubra-2bc.notion.site/NF-GROUP-3f1cc87c45db8172a8c4ec68d2fb1f1e",
    archivePriority: 0,
    coverImage: "/images/thailand-hero.png",
    gallery: [
      "/images/thailand-property-01.png",
      "/images/thailand-property-02.png",
      "/images/thailand-property-03.png",
      "/images/thailand-gallery.png",
      "/images/thailand-expert.png"
    ],
    accentColor: "#931f2b",
    tags: ["Landing", "Real estate", "Figma", "UX structure"],
    challenge:
      "Нужно было сохранить премиальное ощущение исходного макета и при этом показать в портфолио не просто красивую страницу, а понятную продуктовую логику: кому сайт помогает, почему блоки стоят именно так и как пользователь приходит к заявке.",
    solution:
      "Я рассматриваю макет как цельный сценарий: первый экран продает направление, цифры усиливают доверие, квиз снижает порог входа, этапы сделки объясняют процесс, каталог показывает выбор, а финальная форма переводит интерес в консультацию.",
    result:
      "Кейс подан как дизайнерская история: исходный макет сохранен целиком, а рядом с ним появляется профессиональный разбор структуры, визуального ритма и роли каждого блока.",
    context:
      "Проект из Figma про инвестиционную недвижимость в Таиланде. В портфолио он работает как пример лендинга, где визуальная подача, UX-маршрут и коммерческая логика собраны в одну последовательную страницу.",
    figmaUrl: "https://www.figma.com/design/cO7ek9JdxIQw4p14VBBydv/Untitled?node-id=41-77"
  },
  {
    slug: "ownerless-animals",
    title: "Животные без владельцев",
    category: "government",
    caseCategory: "B2G / B2C / Public service",
    description:
      "Информационный сервис для жителей и администрации: обращения, сводка, приюты, помощь и официальные материалы.",
    discipline: "B2G · B2C · Public service · Web portal",
    year: "2026",
    role: "UX/UI, исследование, информационная архитектура, пользовательские сценарии",
    shortDescription:
      "Веб-портал, который делает работу с животными без владельцев понятной и прозрачной для жителей и администрации.",
    image: "/images/digital-campaigns-cover.svg",
    projectLink: "https://outrageous-akubra-2bc.notion.site/3f1cc87c45db8172a2d5c8373aa036a5",
    archivePriority: 1,
    coverImage: "/images/digital-campaigns-cover.svg",
    gallery: [
      "/images/digital-campaigns-01.svg",
      "/images/digital-campaigns-02.svg",
      "/images/digital-campaigns-03.svg"
    ],
    accentColor: "#1f5f99",
    tags: ["Public service", "Web portal", "UX/UI"],
    challenge:
      "Собрать сложную государственную и справочную информацию в понятный сервис для жителей и сотрудников администрации.",
    solution:
      "Я выстроила информационную архитектуру вокруг основных задач пользователя: сообщить о животном, изучить сводку, найти приют или способ помочь.",
    result:
      "Получился прозрачный сценарий взаимодействия с городской службой и единая точка доступа к официальной информации.",
    context:
      "Проект показывает полный UX/UI-процесс: от исследования предметной области до сценариев, прототипов и финальных макетов."
  },
  {
    slug: "stellar-passage",
    title: "Stellar Passage",
    category: "educational",
    caseCategory: "Educational / Long-form landing",
    description:
      "Концепция лендинга о коммерческих космических путешествиях с визуальным сторителлингом и сценарием бронирования.",
    discipline: "Educational project · Long-form landing · Visual / UX/UI concept",
    year: "2026",
    role: "UX/UI, visual concept, storytelling",
    shortDescription:
      "Лендинг помогает сравнить маршруты и последовательно пройти путь от знакомства с путешествием до бронирования.",
    image: "/images/tvoya-korovka-cover.svg",
    projectLink: "https://outrageous-akubra-2bc.notion.site/Stellar-Passage-3f1cc87c45db81718ec8f2e9ed67bf15",
    archivePriority: 2,
    coverImage: "/images/tvoya-korovka-cover.svg",
    gallery: [
      "/images/tvoya-korovka-01.svg",
      "/images/tvoya-korovka-02.svg",
      "/images/tvoya-korovka-03.svg"
    ],
    accentColor: "#7459d9",
    tags: ["Long-form", "Storytelling", "UX/UI concept"],
    challenge:
      "Объяснить непривычный продукт и сохранить ощущение путешествия, не теряя ясности выбора и следующего шага.",
    solution:
      "Я построила длинный лендинг как последовательный рассказ: знакомство с идеей, сравнение маршрутов, детали опыта и переход к бронированию.",
    result:
      "Концепция объединяет эмоциональную подачу с понятным пользовательским сценарием и структурой коммерческого лендинга.",
    context:
      "Учебный проект показывает работу с визуальным сторителлингом, ритмом длинной страницы и UX-сценарием сложного продукта."
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  return projects[(currentIndex + 1) % projects.length];
}
