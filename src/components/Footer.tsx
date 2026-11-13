
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-display text-xl font-bold text-choc">
          {site.brand}
        </p>

        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-choc"
        >
          Follow us on Instagram
        </a>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
