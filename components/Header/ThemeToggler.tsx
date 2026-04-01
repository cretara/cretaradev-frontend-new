import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function getPrefersColorScheme(): "dark" | "light" | "no-preference" {
  if (
    globalThis.window === undefined ||
    typeof globalThis.matchMedia !== "function"
  ) {
    return "no-preference";
  }
  const darkSchemeMediaQuery = globalThis.matchMedia(
    "(prefers-color-scheme: dark)",
  );
  if (darkSchemeMediaQuery.matches) return "dark";
  const lightSchemeMediaQuery = globalThis.matchMedia(
    "(prefers-color-scheme: light)",
  );
  if (lightSchemeMediaQuery.matches) return "light";
  return "no-preference";
}

const ThemeToggler = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 md:h-14 md:w-14 rounded-full bg-gray-200 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        bg-gray-100
        hover:bg-gray-200
        flex h-9 w-9 cursor-pointer items-center justify-center
        rounded-full text-gray-900
        md:h-14 md:w-14
        transition-all duration-300 ease-in-out
        shadow-sm hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        border border-gray-200
      "
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Current: ${theme} (${resolvedTheme})`}
    >
      {isDark ? (
        <svg
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 hover:rotate-12"
        >
          {/* Sun icon */}
          <circle
            cx="12.5"
            cy="12"
            r="5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <g stroke="currentColor" strokeWidth="2">
            <line x1="12.5" y1="1" x2="12.5" y2="4" />
            <line x1="12.5" y1="20" x2="12.5" y2="23" />
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
            <line x1="18.66" y1="18.66" x2="20.78" y2="20.78" />
            <line x1="1" y1="12" x2="4" y2="12" />
            <line x1="21" y1="12" x2="24" y2="12" />
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
            <line x1="18.66" y1="5.34" x2="20.78" y2="3.22" />
          </g>
        </svg>
      ) : (
        <svg
          viewBox="0 0 23 23"
          className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 hover:-rotate-12"
          fill="none"
        >
          {/* Moon icon */}
          <path
            d="M9.55 1.5C5.8 1.5 1.3 5.25 1.3 11.25C1.3 17.25 5.8 21.75 11.8 21.75C17.8 21.75 21.55 17.25 21.55 13.5C13.3 18.75 4.3 9.75 9.55 1.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggler;
