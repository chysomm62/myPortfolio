"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./icons";
import { NAV_LINKS } from "../lib/navLinks";
import ResumeButton from "./ui/Resumebutton";
import router from "next/router";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const linkClick = (link: string) => {
    setOpen(false);
    router.push(link);
  };

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
      <nav
        className={`site-nav container max-w-7xl mx-auto shadow-none transition-shadow duration-300 fixed w-full top-0 z-50  lg:pb-0 ${open && "bottom-0"}`}>
        <div
          className={`py-4 md:py-6 bg-background px-5 lg:px-14 max-w-7xl mx-auto shadow-12 flex justify-between items-start lg:items-center  rounded-2xl relative shadow-[inset_6px_6px_200px_gba(150,150,150,0.25), inset_-6px_-6px_20px_rgba(150,150,150,0.45)] ${
            open ? "menu overflow-y-auto" : "h-22"
          }`}>
          <div className="text-lg font-semibold text-gradient text-gradient-animated">
            chysomm
          </div>

          <div className="flex items-center gap-2 md:gap-3 text-sm">
            <div
              className={
                open
                  ? `lg:w-full flex items-center flex-col lg:h-auto lg:flex-row lg:justify-between lg:bg-transparent lg:p-0 z-10 transition duration-700 ease-in-out absolute top-20 left-5 right-5 bottom-5 lg:relative`
                  : "hidden w-full lg:flex items-center justify-center flex-col lg:static lg:h-auto lg:flex-row lg:justify-between transition duration-500 ease-in-out subMenu"
              }>
              <ul className="flex flex-col lg:flex-row lg:ml-10 lg:justify-center lg:items-center gap-8 lg:gap-7 lg:flex-1 text-left lg:text-center w-full lg:px-1 flex-1 py-6 lg:py-0">
                {NAV_LINKS.map((link, i) => (
                  <li
                    key={i}
                    onClick={() => setOpen(false)}
                    className="link-underline text-base w-fit">
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}{" "}
                <ResumeButton className="mt-auto lg:mt-0" />
              </ul>
            </div>

            {/* Theme toggle */}
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}
              className="ml-2 p-2 rounded hover:bg-[rgba(255,255,255,0.02)] outline-none hover:ring-2 hover:ring-[rgba(100,255,210,0.12)] bg-transparent">
              {theme === "light" ? (
                <MoonIcon width={16} height={16} aria-hidden />
              ) : (
                <SunIcon width={16} height={16} aria-hidden />
              )}
            </button>

            {/* Mobile menu button (visible on small screens) */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(o => !o)}
              className="p-2 rounded outline-none md:hidden">
              {open ? (
                <CloseIcon width={18} height={18} aria-hidden />
              ) : (
                <MenuIcon width={18} height={18} aria-hidden />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
