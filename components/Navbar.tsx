import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants/landing";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          {SITE.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:block"
          >
            Log in
          </a>
          <a
            href="#"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
}
