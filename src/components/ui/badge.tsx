import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#E6EFE0] text-[#285A17]",
        secondary: "bg-[#F1F5EE] text-[#132A13]",
        outline: "border border-[#7FA668] text-[#285A17]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
