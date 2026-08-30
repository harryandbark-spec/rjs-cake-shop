export default function SectionHeading({
  kicker,
  title,
  align = "center",
  as: Tag = "h2",
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : ""}>
      <p className="mb-6 font-body text-xs uppercase tracking-[0.4em] text-ink/50">
        {kicker}
      </p>
      <div
        className={`mb-6 h-px w-16 bg-gold ${centered ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      <Tag className="font-display text-4xl italic tracking-wide text-navy md:text-5xl lg:text-6xl">
        {title}
      </Tag>
    </div>
  );
}
