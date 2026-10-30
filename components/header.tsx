"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";

const navItems = [
  {
    href: "/#about",
    hash: "#about",
    label: "Главная",
    eyebrow: "Home / intro",
    description: "Первый экран с коротким знакомством, визуальной системой сайта и общей дизайнерской интонацией."
  },
  {
    href: "/#skills",
    hash: "#skills",
    label: "Подход",
    eyebrow: "Method / focus",
    description: "Моя сильная сторона - собирать интерфейс не из элементов, а вокруг пользовательской задачи."
  },
  {
    href: "/#projects",
    hash: "#projects",
    label: "Портфолио & аналитика",
    eyebrow: "Works / cases",
    description: "Основные дизайн-кейсы, продуктовые решения и первые работы в аналитическом направлении."
  },
  {
    href: "/#studio",
    hash: "#studio",
    label: "Навыки",
    eyebrow: "Skills / growth",
    description: "Направления, в которых я продолжаю развиваться: UX, визуальные системы, аналитика и продуктовая логика."
  },
  {
    href: "/#projects",
    hash: "#projects",
    label: "Другие кейсы",
    eyebrow: "Archive / extra",
    description: "Дополнительные проекты, учебные задачи, визуальные эксперименты и работы вне основного дизайн-фокуса."
  },
  {
    href: "/#contacts",
    hash: "#contacts",
    label: "Контакты",
    eyebrow: "Contact / next step",
    description: "Если хочется обсудить проект, кейс, стажировку или коллаборацию - сюда."
  }
];

export function Header() {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [shownIndex, setShownIndex] = useState(0);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
  const targetIndex = hoveredIndex ?? activeIndex;
  const currentItem = navItems[shownIndex] ?? navItems[0];

  const handleMenuNavigate = (event: MouseEvent<HTMLAnchorElement>, item: (typeof navItems)[number], index: number) => {
    event.preventDefault();
    setActiveIndex(index);
    setHoveredIndex(null);
    setIsMenuOpen(false);

    if (pathname !== "/") {
      window.location.href = item.href;
      return;
    }

    window.history.pushState(null, "", item.hash);

    window.requestAnimationFrame(() => {
      document.querySelector(item.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const updateActiveItem = () => {
      if (pathname.startsWith("/projects")) {
        setActiveIndex(2);
        return;
      }

      const sectionOrder = [
        { hash: "#about", index: 0 },
        { hash: "#skills", index: 1 },
        { hash: "#projects", index: 2 },
        { hash: "#studio", index: 3 },
        { hash: "#contacts", index: 5 }
      ];
      const sectionMatch = sectionOrder
        .map((item) => {
          const section = document.querySelector(item.hash);

          if (!section) {
            return null;
          }

          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top - 140);

          return { ...item, rect, distance };
        })
        .filter((item): item is { hash: string; index: number; rect: DOMRect; distance: number } => Boolean(item))
        .find((item) => item.rect.top <= window.innerHeight * 0.58 && item.rect.bottom >= 120);

      if (sectionMatch) {
        setActiveIndex(sectionMatch.index);
        return;
      }

      const hashIndex = sectionOrder.find((item) => item.hash === window.location.hash)?.index;
      setActiveIndex(hashIndex ?? 0);
    };

    updateActiveItem();
    window.addEventListener("hashchange", updateActiveItem);
    window.addEventListener("scroll", updateActiveItem, { passive: true });

    return () => {
      window.removeEventListener("hashchange", updateActiveItem);
      window.removeEventListener("scroll", updateActiveItem);
    };
  }, [pathname]);

  useEffect(() => {
    if (targetIndex === shownIndex) {
      setIsDescriptionVisible(true);
      return;
    }

    setIsDescriptionVisible(false);
    const timeout = window.setTimeout(() => {
      setShownIndex(targetIndex);
      setIsDescriptionVisible(true);
    }, 120);

    return () => window.clearTimeout(timeout);
  }, [shownIndex, targetIndex]);

  return (
    <header className={`fixed left-0 right-0 top-0 z-[9999] transition-colors ${isProjectPage ? "border-b border-black/10 bg-[#f8f8f3]/95 text-ink backdrop-blur" : "text-paper"}`}>
      <nav className="container-page flex h-14 items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em]" aria-label="Основная навигация">
        <Link href="/" className="transition-opacity hover:opacity-70" aria-label="На главную">
          D.Nesterkina_Design
        </Link>
        <button
          type="button"
          className="border-b border-current pb-0.5 uppercase transition-opacity hover:opacity-70"
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          Меню
        </button>
      </nav>

      <div
        id="site-menu"
        className={`fixed inset-0 z-[10000] bg-[#123f9f] px-[var(--page-grid-offset)] py-3 transition-opacity duration-500 ease-editorial sm:py-5 ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`menu-shell grid min-h-[calc(100dvh-1.5rem)] overflow-hidden rounded-[8px] border border-ink/12 bg-[#f8f8f3] text-ink shadow-[0_38px_120px_rgba(0,0,0,0.18)] transition-[opacity,transform] duration-700 ease-editorial sm:min-h-[calc(100dvh-2.5rem)] lg:grid-cols-[0.94fr_1.06fr] ${
            isMenuOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.985] opacity-0"
          }`}
        >
          <div className="flex flex-col justify-between p-5 sm:p-8">
            <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55 lg:max-w-2xl">
              <span>D.Nesterkina_Design</span>
              <button type="button" className="relative -mt-1 h-8 w-8 text-ink transition-opacity hover:opacity-55 lg:hidden" onClick={() => setIsMenuOpen(false)} aria-label="Закрыть меню">
                <span className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" aria-hidden="true" />
                <span className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" aria-hidden="true" />
              </button>
            </div>

            <div className={`max-w-[540px] py-12 transition duration-300 ease-editorial lg:py-0 ${isDescriptionVisible ? "opacity-100 translate-y-0" : "translate-y-2 opacity-0"}`}>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">{currentItem.eyebrow}</p>
              <p className="text-balance text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] sm:text-4xl">
                {currentItem.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-start border-t border-ink/14 p-5 sm:p-8 lg:border-t-0 lg:pl-12">
            <div className="hidden -mt-1 justify-end font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55 lg:flex">
              <button type="button" className="relative h-9 w-9 text-ink transition-opacity hover:opacity-55" onClick={() => setIsMenuOpen(false)} aria-label="Закрыть меню">
                <span className="absolute left-1/2 top-1/2 h-px w-9 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" aria-hidden="true" />
                <span className="absolute left-1/2 top-1/2 h-px w-9 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" aria-hidden="true" />
              </button>
            </div>

            <div className="ml-auto mt-10 flex w-full max-w-3xl flex-col items-end gap-[13px] text-right lg:mt-8" onMouseLeave={() => setHoveredIndex(null)}>
              {navItems.map((item, index) => (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={pathname === "/" ? item.href.replace("/", "") : item.href}
                  className={`block text-[clamp(2.05rem,4.25vw,5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.065em] transition-colors duration-500 ease-editorial hover:text-ink ${
                    index === targetIndex ? "text-ink" : "text-ink/20"
                  }`}
                  onFocus={() => setHoveredIndex(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={(event) => handleMenuNavigate(event, item, index)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
