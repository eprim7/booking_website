"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/team", label: "Team" },
  { href: "/book", label: "Book Now"}
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-plum text-paper">
      <div className="px-6 md:px-10 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-tight">
          TINT.
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-citrus transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#book"
            className="rounded-full bg-pink text-paper px-5 py-2 hover:bg-citrus hover:text-plum transition-colors"
          >
          </Link>
        </nav>

        {/* Mobile: book link stays visible, menu toggle opens the rest */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/#book"
            className="font-mono text-xs uppercase tracking-widest rounded-full bg-pink text-paper px-4 py-2"
          >
            Book
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`block h-[2px] w-6 bg-paper transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-paper transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-paper transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <nav
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 font-mono text-sm uppercase tracking-widest border-t border-paper/15 pt-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-citrus transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
