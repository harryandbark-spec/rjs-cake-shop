import Image from "next/image";
import Link from "next/link";
import heroSpread from "../../public/cakes/hero-spread.jpg";

const meta = [
  { label: "FoodSafe certified" },
  { label: "Custom orders" },
  { label: "@rjs.cakeshop", href: "https://www.instagram.com/rjs.cakeshop/" },
];

export default function Hero() {
  return (
    <section id="top" className="relative bg-cream pb-10 pt-28 lg:pb-12 lg:pt-32">
      <div className="mx-auto grid max-w-content items-center gap-x-16 gap-y-12 px-6 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <span
              className="hero-rule h-px w-8 bg-gold"
              style={{ "--hero-delay": "0ms" }}
              aria-hidden="true"
            />
          </div>

          <h1 className="mt-7 font-display text-[clamp(2.75rem,5.2vw,5rem)] leading-[0.98] tracking-[-0.02em] text-navy">
            <span className="hero-line">
              <span style={{ "--hero-delay": "220ms" }}>Custom cakes,</span>
            </span>
            <span className="hero-line">
              <span className="italic" style={{ "--hero-delay": "340ms" }}>
                made to order.
              </span>
            </span>
          </h1>

          <p
            className="hero-anim mt-7 max-w-[46ch] font-body text-[17px] leading-[1.7] text-ink/70 md:text-lg"
            style={{ "--hero-delay": "560ms" }}
          >
            Every cake is custom &mdash; designed around your occasion, then
            made to order.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href="/custom-cakes"
              className="hero-anim bg-navy px-8 py-3.5 font-body text-sm tracking-wide text-cream transition-colors hover:bg-navy/90"
              style={{ "--hero-delay": "720ms" }}
            >
              Enquire
            </Link>
            <Link
              href="/shop"
              className="hero-anim font-body text-sm text-navy underline decoration-gold/40 underline-offset-[6px] transition-colors hover:decoration-gold"
              style={{ "--hero-delay": "800ms" }}
            >
              View the collection
            </Link>
          </div>
        </div>

        <div
          className="hero-frame relative aspect-square w-full overflow-hidden bg-linen"
          style={{ "--hero-delay": "300ms" }}
        >
          <div
            className="hero-frame-img relative h-full w-full"
            style={{ "--hero-delay": "300ms" }}
          >
            <Image
              src={heroSpread}
              alt="Custom cakes, cupcakes, and cake pops arranged for a celebration."
              fill
              priority
              quality={82}
              placeholder="blur"
              sizes="(max-width: 1023px) 92vw, 46vw"
              className="object-cover object-[50%_62%]"
            />
          </div>
        </div>

        <div
          className="hero-anim border-t border-navy/10 pt-5 lg:col-span-2"
          style={{ "--hero-delay": "900ms" }}
        >
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-body text-[11px] uppercase tracking-[0.18em] text-ink/55">
            {meta.map((item, index) => (
              <li key={item.label} className="flex items-center gap-x-5">
                {index > 0 && (
                  <span aria-hidden="true" className="text-ink/30">
                    &middot;
                  </span>
                )}
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-navy"
                  >
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
