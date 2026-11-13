
import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <a href="/" className="font-display text-2xl font-bold text-choc">
        {site.brand}
      </a>

      <nav className="flex items-center gap-6 text-sm font-medium">
        <a href="#menu" className="text-muted hover:text-choc">
          Our Menu
        </a>

        <a
          href="#menu"
          className="rounded-full bg-choc px-5 py-3 text-white transition hover:bg-[#3d1e13]"
        >
          Order Now
        </a>
      </nav>
    </header>
  );
}
