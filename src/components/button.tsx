import Link from "next/link";
import { ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "cta";
  size?: "small" | "medium" | "large";
  isExternal?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  variant = "primary",
  size = "medium",
  isExternal = false,
  className,
}) => {
  const baseStyles = "button";
  const variantStyles = {
    primary: "primary",
    secondary: "secondary",
    cta: "cta",
  };
  const sizeStyles = {
    small: "small",
    medium: "medium",
    large: "large",
  };

  const combinedStyles = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};

export default Button;
