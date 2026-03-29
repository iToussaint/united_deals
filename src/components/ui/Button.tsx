import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "warning";
type ButtonSize = "lg" | "md" | "sm";

interface ButtonProps {
  children: ReactNode;
  variant: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const variantStyles = {
  primary: "bg-amber-600",
  secondary: "bg-blue-500",
  warning: "bg-yellow-500",
};

const sizeStyles = {
  lg: "px-32 py-8 text-xl",
  md: "px-16 py-4 text-lg",
  sm: "px-8 py-2 text-sm",
};

function Button({
  children,
  variant,
  size = "sm",
  loading = false,
}: ButtonProps) {
  return (
    <button
      onClick={() => console.log("CLICKEDD")}
      disabled={loading}
      className={`${variantStyles[variant]} ${sizeStyles[size]} text-white font-semibold rounded-sm`}
    >
      {" "}
      {loading ? "loading..." : children}
    </button>
  );
}

export default Button;
