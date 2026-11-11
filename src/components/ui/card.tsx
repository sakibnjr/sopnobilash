import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-gray-200/80 bg-[#F9FAF8] text-[#132A13] shadow-2xs transition-all duration-200",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
