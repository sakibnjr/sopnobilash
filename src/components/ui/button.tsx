import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A6B1F]/40 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#3A6B1F] text-white hover:bg-[#2E5718] active:scale-[0.99] shadow-xs",
        outline:
          "border border-[#5A8743] bg-white/80 text-[#1F2937] hover:bg-[#EFF5EC] hover:border-[#3A6B1F]",
        white:
          "bg-white text-[#1A2E19] hover:bg-[#F4F8F1] active:scale-[0.99] shadow-sm",
        ghost:
          "text-[#1F2937] hover:bg-[#EFF5EC] hover:text-[#3A6B1F]",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-[15px] rounded-full",
        sm: "h-9 px-4 py-2 text-sm rounded-full",
        lg: "h-12 px-7 py-3 text-base rounded-full",
        icon: "h-8 w-9 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
