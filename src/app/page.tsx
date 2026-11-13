
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrownieArt from "@/components/BrownieArt";
import BrownieCard from "@/components/BrownieCard";
import { site } from "@/data/site";
import { menu } from "@/data/menu";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-5">
        {/* HERO */}
        <section className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-choc">
              {site.brand}
            </p>

            <h1 className="mt-4 font-display text-5xl font-bold leading-tight md:text-6xl">
              {site.tagline}
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-muted">
              Handmade in small batches, baked fresh and made to satisfy
              your chocolate cravings.
            </p>

            <a
              href="#menu"
              className="mt-7 inline-flex rounded-full bg-choc px-7 py-4 font-semibold text-white transition hover:bg-[#3d1e13]"
            >
              Explore our brownies
            </a>
          </div>

          <div className="rounded-[2rem] bg-cream p-10">
            <BrownieArt />
          </div>
        </section>

        {/* MENU */}
        <section id="menu" className="scroll-mt-8 py-14">
          <div className="mb-9 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-choc">
                Freshly baked
              </p>

              <h2 className="mt-2 font-display text-4xl font-bold">
                Our brownie menu
              </h2>

              <p className="mt-2 text-muted">
                Find your next favourite.
              </p>
            </div>

            <p className="text-sm text-muted">
              Made with love, one batch at a time.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {menu.map((item) => (
              <BrownieCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                label={item.label}
                style={item.style}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
