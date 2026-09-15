"use client";

import { FOOTER_LINKS, SITE } from "@/lib/constants/landing";
import { smoothScrollTo } from "@/lib/scroll";

export default function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-10">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-8 text-sm">
        <span className="font-medium text-white/50">
          {SITE.name} &copy; {new Date().getFullYear()}
        </span>

        {FOOTER_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              if (link.href.length > 1 && link.href.startsWith("#")) {
                e.preventDefault();
                smoothScrollTo(link.href.slice(1));
              }
            }}
            className="font-medium text-white/50 transition-colors hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
