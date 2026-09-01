import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

// One character of the reveal: an invisible copy holds the space so the layout
// never reflows, and the lit copy sits on top of it.
function Char({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const charProgress = index / total;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ opacity, position: "absolute", left: 0, top: 0 }}>
        {char}
      </motion.span>
    </span>
  );
}

type Props = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function AnimatedText({ text, className, style }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p ref={ref} className={className} style={style}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {chars.map((char, i) => (
          <Char
            key={`${char}-${i}`}
            char={char === " " ? " " : char}
            index={i}
            total={chars.length}
            progress={scrollYProgress}
          />
        ))}
      </span>
    </p>
  );
}
