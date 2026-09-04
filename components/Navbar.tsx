import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants/landing";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-base font-semibold tracking-tight text-foreground">
          {SITE.name}
        </Link>

        <a
          href="#"
          aria-label="Go to console"
          className="rounded-full p-2 text-foreground transition-colors hover:bg-surface hover:text-brand"
        >
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </nav>
    </header>
  );
}
