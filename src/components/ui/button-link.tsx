import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-brand text-white shadow-[0_8px_24px_rgba(57,116,93,0.2)] hover:bg-brand-strong",
  secondary:
    "border border-brand/20 bg-white text-brand-strong hover:border-brand/40 hover:bg-brand-soft/45",
  ghost: "text-brand-strong hover:bg-brand-soft/55",
};

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-colors ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
