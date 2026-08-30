import Image from "next/image";
import CustomCakeForm from "../components/CustomCakeForm";
import FAQ from "../components/FAQ";
import OrderSteps from "../components/OrderSteps";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "Custom Cakes | Rj's Cake Shop",
  description:
    "Request a custom buttercream cake, made to order in Surrey, BC.",
};

const recent = [
  { src: "/cakes/heart-30.jpg", alt: "Burgundy heart cake with hand-piped details" },
  { src: "/cakes/graduation-nursing.jpg", alt: "Nursing graduation cake" },
  { src: "/cakes/sweet-16.jpg", alt: "Sweet sixteen Lambeth cakes" },
  { src: "/cakes/red-rosettes.jpg", alt: "Red rosette signature cake" },
];

export default function CustomCakesPage({ searchParams }) {
  const style = typeof searchParams?.style === "string" ? searchParams.style : "";

  return (
    <main className="bg-cream pt-32">
      <section className="mx-auto max-w-content px-6 pb-16">
        <SectionHeading kicker="Custom cakes" title="Made to order" as="h1" />
        <p className="mx-auto mt-6 max-w-xl text-center font-body text-lg text-ink/70">
          Every cake is custom &mdash; designed around your occasion. Tell us
          the date and the style, and we will quote from there.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#enquire"
            className="bg-navy px-8 py-3.5 font-body text-sm tracking-wide text-cream hover:bg-navy/90"
          >
            Start an enquiry
          </a>
        </div>
      </section>

      <OrderSteps />

      <section className="bg-cream py-24 md:py-28">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading kicker="Recent work" title="Recent custom work" />
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {recent.map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="scroll-mt-24 bg-cream py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading kicker="Enquire" title="Start with the details" />
          <p className="mx-auto mt-6 mb-12 max-w-xl text-center font-body text-ink/70">
            We reply within a day or two with a quote. Submitting opens WhatsApp
            and your mail app with the enquiry filled in.
          </p>
          <CustomCakeForm initialStyle={style} />
        </div>
      </section>

      <section className="bg-cream pb-24 md:pb-28">
        <div className="mx-auto max-w-content px-6">
          <FAQ />
        </div>
      </section>
    </main>
  );
}
