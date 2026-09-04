import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants/landing";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-base font-semibold tracking-tight text-white">
          {SITE.name}
        </Link>

        <a
          href="#"
          aria-label="Go to console"
          className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
        >
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </nav>
    </header>
  );
}
