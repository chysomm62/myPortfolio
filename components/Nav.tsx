"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./icons";
import { NAV_LINKS } from "./navLinks";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light") {
        setTheme("light");
        document.documentElement.setAttribute("data-theme", "light");
      } else if (stored === "dark") {
        setTheme("dark");
        document.documentElement.removeAttribute("data-theme");
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
      ) {
        setTheme("light");
        document.documentElement.setAttribute("data-theme", "light");
      }
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
      if (theme === "light")
        document.documentElement.setAttribute("data-theme", "light");
      else document.documentElement.removeAttribute("data-theme");
    } catch (e) {}
  }, [theme]);

  useEffect(() => {
    try {
      document.body.style.overflow = open ? "hidden" : "";
    } catch (e) {}
    return () => {
      try {
        document.body.style.overflow = "";
      } catch (e) {}
    };
  }, [open]);

  return (
    <>
      <header className="site-nav sticky container max-w-7xl mx-auto top-0 z-50 w-full">
        <div className="flex items-center justify-between py-3 bg-background">
          <div className="text-sm font-medium text-gradient text-gradient-animated">
            chysomm
          </div>

          <nav className="flex items-center gap-3 text-sm text-(--muted)">
            <div
              className={
                open
                  ? ` w-full h-screen fixed top-12 left-0 flex flex-col items-center justify-center gap-8 bg-background md:static md:bg-transparent md:h-auto md:w-auto md:flex-row md:gap-6`
                  : "hidden md:flex md:items-center md:gap-6"
              }>
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-(--accent) link-underline">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}
              className="ml-2 p-2 rounded text-(--muted) hover:bg-[rgba(255,255,255,0.02)] focus:outline-none focus:ring-2 focus:ring-[rgba(100,255,210,0.12)]">
              {theme === "light" ? (
                <SunIcon width={16} height={16} aria-hidden />
              ) : (
                <MoonIcon width={16} height={16} aria-hidden />
              )}
            </button>

            {/* Mobile menu button (visible on small screens) */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(o => !o)}
              className="p-2 rounded text-(--muted) hover:bg-[rgba(255,255,255,0.02)] focus:outline-none focus:ring-2 focus:ring-[rgba(100,255,210,0.12)] md:hidden">
              {open ? (
                <CloseIcon width={18} height={18} aria-hidden />
              ) : (
                <MenuIcon width={18} height={18} aria-hidden />
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
