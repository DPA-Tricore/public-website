import { FOOTER_COLUMNS, SITE } from "@/lib/constants/landing";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-lg font-semibold tracking-tight text-slate-900">
              {SITE.name}
            </p>
            <p className="mt-2 text-sm text-slate-500">{SITE.tagline}</p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-slate-900">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-slate-200 pt-8 text-sm text-slate-400">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
