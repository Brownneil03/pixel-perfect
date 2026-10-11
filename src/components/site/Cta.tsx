import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_var(--primary)]",
        ink: "bg-ink text-ink-foreground hover:bg-primary hover:text-primary-foreground",
        outline: "border border-foreground/80 text-foreground hover:bg-foreground hover:text-background",
        ghostLight: "border border-ink-foreground/40 text-ink-foreground hover:bg-ink-foreground hover:text-ink",
      },
      size: {
        md: "px-5 py-3 text-sm",
        lg: "px-7 py-4 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof ctaVariants>;

export function Cta({ className, variant, size, children, ...props }: Props) {
  const external = props.href?.startsWith("http");
  return (
    <a
      className={cn(ctaVariants({ variant, size }), className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}
