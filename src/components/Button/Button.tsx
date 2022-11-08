import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonStyles = cva(
  "flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none",
  {
    variants: {
      variant: {
        primary: "bg-brand-500 text-white",
        secondary: "bg-gray-200 text-gray-900",
        danger: "bg-red-500 text-white focus:ring-red-500",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
interface internalButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}
export interface ButtonProps
  extends internalButtonProps,
    VariantProps<typeof buttonStyles> {}

export default function Button({
  variant,
  fullWidth,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({ variant, fullWidth, class: className })}
      {...props}
    >
      {children}
    </button>
  );
}
