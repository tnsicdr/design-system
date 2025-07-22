import clsx from "clsx";
import styles from "./styles.module.css";

import type { ComponentProps, ReactNode } from "react";

interface CardProps extends ComponentProps<"div"> {
  children?: ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: Readonly<CardProps>) {
  const style = clsx([styles["card-container"], className]);
  return (
    <div className={style} {...props}>
      {children}
    </div>
  );
}
