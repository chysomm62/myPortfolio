"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./icons";
import { NAV_LINKS } from "../lib/navLinks";
import ResumeButton from "./ui/Resumebutton";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
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
    <AnimatePresence>
      <nav
        className={`site-nav container max-w-7xl mx-auto shadow-none transition-shadow duration-300 fixed w-full top-0 z-50  lg:pb-0 ${open && "bottom-0"}`}>
        <motion.div
          // initial={false}
          // animate={
          //   open
          //     ? { y: 0 }
          //     : window.innerWidth < 1024
          //       ? { y: "-100%" }
          //       : { y: 0 }
          // }
          // transition={{
          //   duration: 1.45,
          //   ease: [0.22, 1, 0.36, 1],
          // }}
          className={`py-4 md:py-6 bg-background px-5 lg:px-14 max-w-7xl mx-auto shadow-12 flex justify-between items-start lg:items-center ${
            open ? "menu overflow-y-auto" : "h-22"
          }`}>
          <div className="text-lg leading-8 font-semibold text-gradient text-gradient-animated">
            chysomm
          </div>

          <div className="flex items-center gap-2 md:gap-3 text-sm">
            <div
              className={
                open
                  ? `lg:w-full flex items-center flex-col lg:h-auto lg:flex-row lg:justify-between lg:bg-transparent lg:p-0 z-10 transition duration-700 ease-in-out absolute top-20 left-5 right-5 bottom-5 lg:relative`
                  : "hidden w-full lg:flex lg:opacity-100 items-center justify-center flex-col lg:static lg:h-auto lg:flex-row lg:justify-between transition duration-500 ease-in-out subMenu"
              }>
              <ul className="flex flex-col lg:flex-row lg:ml-10 lg:justify-center lg:items-center gap-8 lg:gap-7 lg:flex-1 text-left lg:text-center w-full lg:px-1 flex-1 py-6 lg:py-0">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    initial={false}
                    animate={
                      open
                        ? { opacity: 1, y: 0 }
                        : window.innerWidth < 1024
                          ? { opacity: 0, y: 15 }
                          : { opacity: 1, y: 0 }
                    }
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: open ? i * 0.08 : 0,
                    }}
                    key={i}
                    onClick={() => setOpen(false)}
                    className="link-underline text-base w-fit font-medium hover:font-semibold">
                    <Link href={link.href}>{link.label}</Link>
                  </motion.li>
                ))}
                <motion.div
                  initial={false}
                  animate={
                    open
                      ? { opacity: 1, y: 0 }
                      : window.innerWidth < 1024
                        ? { opacity: 0, y: 15 }
                        : { opacity: 1, y: 0 }
                  }
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.5,
                  }}
                  className="mt-auto lg:mt-0">
                  <ResumeButton className="w-full" />
                </motion.div>
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
        </motion.div>
      </nav>
    </AnimatePresence>
  );
}
