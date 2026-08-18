import { motion } from "framer-motion";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { useMemo } from "react";

type Props = {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
  // Anything else (src, alt, href…) is forwarded to the rendered element.
  [prop: string]: unknown;
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  as = "div",
  ...rest
}: Props) {
  const Component = useMemo(() => motion.create(as as ElementType), [as]);

  return (
    <Component
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "50px", amount: 0 }}
      variants={{
        hidden: { opacity: 0, x, y },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
