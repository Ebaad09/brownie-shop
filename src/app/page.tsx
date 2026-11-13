
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrownieArt from "@/components/BrownieArt";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-5xl px-5">
        <section className="grid items-center gap-8 py-12 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-choc">
              {site.brand}
            </p>

            <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-6xl">
              {site.tagline}
            </h1>

            <p className="mt-4 max-w-md text-lg text-muted">
              Handmade in small batches and made to order. Pick your box,
              send the order on WhatsApp, and we’ll confirm the same day.
            </p>

            <a
              href="#menu"
              className="mt-6 inline-flex min-h-12 items-center rounded-2xl bg-choc px-6 font-semibold text-white"
            >
              See the menu
            </a>
          </div>

          <div className="rounded-3xl bg-cream p-8">
            <BrownieArt />
          </div>
        </section>

        <section id="menu" className="border-t border-line py-12">
          <h2 className="font-display text-3xl font-bold">
            Our brownies
          </h2>
          <p className="mt-2 text-muted">
            The menu arrives in the next step.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
