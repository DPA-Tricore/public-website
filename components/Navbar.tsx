import Link from "next/link";
import { SITE } from "@/lib/constants/landing";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
          {SITE.name}
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Log in
          </a>
          <a
            href="#"
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
}
