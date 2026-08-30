"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { products, collections } from "../data/products";
import SectionHeading from "../components/SectionHeading";

export default function ShopLookbook() {
  const searchParams = useSearchParams();
  const active = searchParams.get("collection") || "All";

  const filtered = useMemo(() => {
    if (active === "All") return products;
    return products.filter((product) => product.collection === active);
  }, [active]);

  return (
    <main className="min-h-screen bg-cream px-6 pb-24 pt-32">
      <div className="mx-auto max-w-content">
        <SectionHeading kicker="Lookbook" title="Cakes" as="h1" />
        <p className="mx-auto mt-6 max-w-xl text-center font-body text-ink/70">
          A few of the cakes we make most often. Every order is quoted to the
          design.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {collections.map((name) => {
            const href = name === "All" ? "/shop" : `/shop?collection=${name}`;
            const isActive = active === name;
            return (
              <Link
                key={name}
                href={href}
                className={`font-body text-xs uppercase tracking-[0.22em] transition-colors ${
                  isActive ? "text-navy" : "text-ink/45 hover:text-navy"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="mt-4 font-display text-xl text-navy">{product.name}</h2>
              <p className="mt-1 font-body text-xs uppercase tracking-[0.18em] text-gold">
                {product.collection}
              </p>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center font-body text-ink/60">
            Nothing in this collection yet.{" "}
            <Link href="/shop" className="text-navy underline decoration-gold/40">
              View all cakes
            </Link>
          </p>
        )}
      </div>
    </main>
  );
}
