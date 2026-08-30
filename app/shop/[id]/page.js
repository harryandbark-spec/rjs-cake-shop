import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "../../data/products";

export default function ProductDetailPage({ params }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  const enquireHref = `/custom-cakes?style=${encodeURIComponent(product.name)}`;

  return (
    <main className="min-h-screen bg-cream px-6 pb-24 pt-32">
      <div className="mx-auto max-w-content">
        <nav className="mb-10 font-body text-sm text-ink/50">
          <Link href="/" className="hover:text-navy">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-navy">
            Cakes
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy">{product.name}</span>
        </nav>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-linen lg:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 92vw"
            />
          </div>

          <div className="flex w-full flex-col justify-center lg:w-1/2">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-gold">
              {product.collection}
            </p>
            <h1 className="mt-4 font-display text-4xl italic text-navy lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-md font-body leading-relaxed text-ink/70">
              {product.description}
            </p>
            <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-ink/55">
              Use this as inspiration. Every cake is made to order — we will
              quote flavour, size, and finish after we hear from you.
            </p>
            <Link
              href={enquireHref}
              className="mt-10 w-fit bg-navy px-8 py-3.5 font-body text-sm tracking-wide text-cream transition-colors hover:bg-navy/90"
            >
              Request this style
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
