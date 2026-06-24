"use client";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [imageSrc, setImageSrc] = useState("/images/logo.png");
  const { theme } = useTheme();

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (globalThis.window !== undefined && globalThis.window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    handleStickyNavbar();
    globalThis.window.addEventListener("scroll", handleStickyNavbar, {
      passive: true,
    });
    return () =>
      globalThis.window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  useEffect(() => {
    setImageSrc(
      theme === "dark" ? "/images/logo-dark.png" : "/images/logo-light.png",
    );
  }, [theme]);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: SetStateAction<number>) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const headerClasses =
    mounted && sticky
      ? "fixed z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm transition-all duration-300 dark:bg-slate-900/80 dark:border-slate-700/60"
      : "absolute bg-transparent";

  const logoClasses = mounted && sticky ? "py-5 lg:py-2" : "py-8";

  return (
    <div id={"menu"}>
      <header
        className={`header top-0 left-0 z-40 flex-1 w-full items-center ${headerClasses}`}
      >
        <div id="header" className="container">
          <div className="relative w-full flex items-center" id="header-menu">
            <div className="flex w-3/6 lg:w-1/6 px-4" id="header-logo">
              <Link
                href="/"
                className={`header-logo block w-full ${logoClasses}`}
              >
                <Image
                  src={imageSrc}
                  alt="logo"
                  width={224}
                  height={56}
                  className="object-fit lg:w-full"
                  suppressHydrationWarning={true}
                />
              </Link>
            </div>
            <div
              className="hidden lg:flex lg:w-2/3 lg:grow items-center align-center" id="header-center-menu-desktop"
            >
              <nav className="navbar w-full">
                <ul className="flex w-full items-center justify-end space-x-0 lg:space-x-6">
                  {menuData.map((menuItem, index) => (
                    <li key={menuItem.id} className="flex-1 basis-0 text-center">
                      {menuItem.path ? (
                        <Link 
                          href={menuItem.path}
                          data-testid={`nav-link-${menuItem.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className={`w-full block text-center py-2 text-base text-gray-900 group-hover:text-primary dark:text-white lg:block lg:py-6 lg:px-0`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          {/* Submenu logic can be added here */}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex w-1/6 items-center justify-end" id="header-theme-toggler">
              <div>
                <ThemeToggler />
              </div>
            </div>
            <div className="flex w-1/6 items-center lg:hidden" id="header-menu-mobile">
              <div id="header-center-menu" className="flex w-full">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  data-testid="navbar-toggle"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-1.5 ring-primary focus:ring-2 lg:hidden cursor-pointer"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-7.5 bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-1.75 rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-7.5 bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-7.5 bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " -top-2 -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  data-testid="navbar-menu"
                  className={`navbar absolute right-0 z-30 rounded border border-gray-200 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-gray-800 lg:visible lg:static lg:w-full lg:border-none lg:bg-transparent! lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visible top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="flex flex-col w-full items-center justify-between lg:flex lg:space-x-0">
                    {menuData.map((menuItem, index) => (
                      <li
                        key={menuItem.id}
                        className="flex-1 basis-0 text-center"
                      >
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            data-testid={`mobile-nav-link-${menuItem.title.toLowerCase().replace(/\s+/g, "-")}`}
                            className={`w-full block text-center py-2 text-base text-gray-900 group-hover:text-primary dark:text-white lg:block lg:py-6 lg:px-0`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <button
                              onClick={() => handleSubmenu(index)}
                              className="w-full flex cursor-pointer items-center justify-center gap-2 py-2 text-base text-gray-900 group-hover:text-primary dark:text-white lg:block lg:py-6 lg:px-0"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                            <div
                              className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-gray-800 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-62.5 lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu?.map((submenuItem) => (
                                <Link
                                  href={submenuItem.path ?? ""}
                                  key={submenuItem.id}
                                  className="block rounded-sm py-2.5 text-sm text-gray-800 hover:text-primary dark:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
