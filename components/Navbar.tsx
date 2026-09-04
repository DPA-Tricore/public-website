import Link from "next/link";
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
          className="text-sm font-medium text-white transition-colors hover:text-white/80"
        >
          Console
        </a>
      </nav>
    </header>
  );
}
