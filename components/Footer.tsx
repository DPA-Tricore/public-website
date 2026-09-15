"use client";

import { FOOTER_LINKS, SITE } from "@/lib/constants/landing";
import { smoothScrollTo } from "@/lib/scroll";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-8 text-sm">
        <span className="font-medium text-muted-foreground">
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
            className="font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
