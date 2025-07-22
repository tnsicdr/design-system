import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./styles.module.css";

type ButtonVariants = "default" | "error" | "success" | "warning";
interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
  variant?: ButtonVariants;
}

export function Button({
  children,
  className,
  variant = "default",
  ...props
}: Readonly<ButtonProps>) {
  const style = clsx([styles["button-container"], styles[variant], className]);

  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
}
