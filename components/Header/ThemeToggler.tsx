import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-black dark:text-white md:h-14 md:w-14"
      suppressHydrationWarning={true}
    >
      {resolvedTheme === "dark" ? (
          <svg
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
          >
            {/* Sun icon */}
            <circle cx="12.5" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
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
              className="h-5 w-5 md:h-6 md:w-6"
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
