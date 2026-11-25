// src/components/ThemeSwitcher.tsx
// Renders as its own grid cell, so it sits inside a .grid with hairlines.
// Styles live in src/styles/themes.css.

import { useEffect, useState, type CSSProperties } from "react";

const THEMES = [
  { id: "blue", label: "Blue", chip: "var(--color-riso-blue)" },
  { id: "cornflower", label: "Cornflower", chip: "var(--color-riso-cornflower)" },
  { id: "violet", label: "Violet", chip: "var(--color-riso-violet)" },
  { id: "paprika", label: "Paprika", chip: "var(--color-riso-paprika)" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];
const STORAGE_KEY = "tp-theme";

function readSaved(): ThemeId {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (THEMES.some((t) => t.id === saved)) return saved as ThemeId;
  } catch {
    /* storage unavailable */
  }
  return "blue";
}

export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<ThemeId>(readSaved);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* theme still applies for this visit */
    }
  }, [theme]);

  return (
    <div className={`cell theme-switcher ${className}`} role="group" aria-label="Color theme">
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          className="theme-switcher__button"
          aria-pressed={theme === t.id}
          onClick={() => setTheme(t.id)}
        >
          <span
            className="theme-switcher__chip"
            aria-hidden="true"
            style={{ "--chip": t.chip } as CSSProperties}
          />
          {t.label}
        </button>
      ))}
    </div>
  );
}
