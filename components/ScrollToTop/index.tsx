"use client";
import { useEffect, useState, useCallback } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = useCallback(() => {
    if (typeof document !== "undefined") {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const toggleVisibility = () => {
      // Use requestAnimationFrame to ensure we're in a browser environment
      if (typeof window !== "undefined") {
        const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        setIsVisible(scrolled > 300);
      }
    };

    const handleScroll = () => {
      // Debounce scroll events
      clearTimeout(timeoutId);
      timeoutId = setTimeout(toggleVisibility, 10);
    };

    // Only add event listener and check scroll position after component mounts
    if (typeof window !== "undefined") {
      // Initial check
      toggleVisibility();

      // Add passive event listener for better performance
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-99">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
        </button>
      )}
    </div>
  );
}
