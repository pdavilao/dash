"use client";

import {
  forwardRef,
  ReactNode,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import Link from "next/link";
import clsx from "clsx";

interface CommonButtonProps {
  variant?: "solid" | "outline";
  color?: "cyan" | "white" | "gray";
  className?: string;
}

interface ButtonPropsWithHref extends CommonButtonProps {
  href: string;
  children: ReactNode;
}

interface ButtonPropsWithoutHref extends CommonButtonProps {
  children: ReactNode;
}

type ButtonProps = ButtonPropsWithHref | ButtonPropsWithoutHref;

interface VariantStyles {
  [key: string]: {
    [key: string]: string;
  };
}

const baseStyles: { [key: string]: string } = {
  solid:
    "inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
  outline:
    "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
};

const variantStyles: VariantStyles = {
  solid: {
    cyan: "relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors",
    white:
      "bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70",
    gray: "bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80",
  },
  outline: {
    gray: "border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80",
  },
};

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "solid", color = "gray", className, ...props },
    ref
  ) {
    const styles = variantStyles[variant] || {};
    const colorStyles = styles[color] || "";

    className = clsx(baseStyles[variant], colorStyles, className);

    if ("href" in props) {
      const { href, children, ...rest } = props as ButtonPropsWithHref;
      return (
        <Link href={href}>
          <a
            ref={ref as React.MutableRefObject<HTMLAnchorElement>}
            className={className}
            {...rest}
          >
            {children}
          </a>
        </Link>
      );
    } else {
      const { children, ...rest } = props as ButtonPropsWithoutHref;
      return (
        <button
          ref={ref as React.MutableRefObject<HTMLButtonElement>}
          className={className}
          {...rest}
        >
          {children}
        </button>
      );
    }
  }
);

export default Button;
