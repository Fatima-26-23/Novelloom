import Image from "next/image";

type FeatureCardProps = {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  preview: string;
};

export function FeatureCard({
  icon,
  iconBg,
  title,
  description,
  preview,
}: FeatureCardProps) {
  return (
    <article className="relative flex flex-1 flex-col gap-3 rounded-[20px] border border-card-border bg-white p-[33px] shadow-[0px_4px_20px_-2px_rgba(244,114,182,0.08)]">
      <div
        className="flex size-14 items-center justify-center rounded-2xl"
        style={{ backgroundColor: iconBg }}
      >
        <Image src={icon} alt="" width={30} height={28} aria-hidden />
      </div>

      <h3 className="pt-3 font-heading text-xl font-semibold leading-7 text-heading">
        {title}
      </h3>

      <p className="text-base leading-[26px] text-body">{description}</p>

      <div className="relative mt-auto h-[172px] overflow-hidden rounded-xl opacity-80">
        <Image
          src={preview}
          alt={`${title} preview`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 318px"
        />
      </div>
    </article>
  );
}
