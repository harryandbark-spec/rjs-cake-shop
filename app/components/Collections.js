import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const collections = [
  {
    title: "Wedding",
    href: "/shop?collection=Wedding",
    image: "/cakes/wedding-sh.jpg",
    alt: "Three-tier cream wedding cake with gold monogram and florals",
  },
  {
    title: "Signature",
    href: "/shop?collection=Signature",
    image: "/cakes/ruffled-babys-breath.jpg",
    alt: "Tall cream ruffle cake finished with baby's breath",
  },
  {
    title: "Celebration",
    href: "/shop?collection=Celebration",
    image: "/cakes/sweet-16.jpg",
    alt: "Pink Lambeth cakes with ribbons and script",
  },
];

export default function Collections() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading kicker="The collections" title="A cake for every occasion" />
          <p className="mx-auto mt-6 max-w-xl text-center font-body text-ink/70">
            Every design begins as a conversation. These are the styles we make most often.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {collections.map((collection, i) => (
            <Reveal key={collection.title} delay={i * 80}>
              <Link href={collection.href} className="group relative block aspect-[3/4] overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 92vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-7">
                  <h3 className="font-display text-3xl italic text-cream">
                    {collection.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.22em] text-cream/80">
                    Explore
                    <span className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-12" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
