import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./styles.module.css";

interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
}

export function Button({
  children,
  className,
  ...props
}: Readonly<ButtonProps>) {
  const style = clsx([styles["button-container"], className]);

  return <button className={style}>{children}</button>;
}
