import { Slot } from "@radix-ui/react-slot";
import type { HTMLProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface Props extends HTMLProps<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
}

const titleStyles = {
  h1: "scroll-m-20 text-black text-4xl font-semibold lg:text-5xl",
  h2: "scroll-m-20 text-primary border-b pb-2 text-3xl font-semibold tracking-normal transition-colors first:mt-0",
  h3: "scroll-m-20 text-primary text-2xl font-semibold",
  h4: "scroll-m-20 text-primary text-xl font-semibold",
};

export function Heading({ as, children, ...props }: Props) {
  const Componente = as ?? Slot;
  const { className, ...restProps } = props;
  return (
    <Componente className={cn(titleStyles[as], className)} {...restProps}>
      {children}
    </Componente>
  );
}
