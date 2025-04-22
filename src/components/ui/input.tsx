import * as React from "react";
import { cn } from "./utils";

interface InputProps extends React.ComponentProps<"input"> {
  variant?: "default" | "modal";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    const widthClass = variant === "modal" ? "w-1/2" : "w-1/6";

    return (
      <input
        type={type}
        className={cn(
          "flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          widthClass,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
