import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export enum Variant {
  Primary = "primary",
  Secondary = "secondary",
}

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: Variant;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  ...props
}) => {
  if (variant === Variant.Secondary) {
    return (
      <button
        className="flex items-center gap-2 text-2xl bg-white text-gray-600 border-2 border-gray-500 rounded-lg px-5 py-2 font-semibold"
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className="flex items-center gap-2 text-2xl bg-[#3B82F6] text-white rounded-lg px-5 py-2 font-semibold"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
