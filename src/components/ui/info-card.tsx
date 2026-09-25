import type { ReactNode } from "react";

type InfoCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  icon?: ReactNode;
  tone?: "mint" | "yellow" | "sky" | "peach";
  children?: ReactNode;
};

const tones = {
  mint: "bg-brand-soft/65",
  yellow: "bg-sun-soft/75",
  sky: "bg-sky/75",
  peach: "bg-peach/75",
};

export function InfoCard({
  eyebrow,
  title,
  description,
  icon,
  tone = "mint",
  children,
}: InfoCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-line bg-white p-6 shadow-[0_10px_35px_rgba(54,81,68,0.07)] transition-transform duration-200 hover:-translate-y-1">
      {icon ? (
        <div
          className={`mb-5 flex size-12 items-center justify-center rounded-2xl text-brand-strong ${tones[tone]}`}
          aria-hidden="true"
        >
          {icon}
        </div>
      ) : null}
      {eyebrow ? (
        <p className="mb-2 text-xs font-extrabold tracking-[0.12em] text-brand uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-xl font-extrabold tracking-[-0.025em] text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-[0.95rem] leading-7 text-muted">{description}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}
