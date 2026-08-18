import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Analyse", "Model", "Decide"];
const DURATION = 2700;

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  const finished = useRef(false);

  useEffect(() => {
    const start = performance.now();
    let frame = 0;

    const finish = () => {
      if (finished.current) return;
      finished.current = true;
      setCount(100);
      window.setTimeout(onComplete, 400);
    };

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else finish();
    };

    frame = requestAnimationFrame(tick);

    // rAF is throttled in a backgrounded tab, which would leave the overlay up
    // (and the page scroll-locked) until the tab is focused. Wall clock wins.
    const fallback = window.setTimeout(finish, DURATION + 300);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
    };
  }, [onComplete]);

  useEffect(() => {
    const id = window.setInterval(
      () => setWordIndex((i) => (i + 1) % WORDS.length),
      900
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.span
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute left-6 top-6 text-xs uppercase tracking-[0.3em] text-muted md:left-10 md:top-10"
      >
        Portfolio
      </motion.span>

      <div className="flex h-full items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="font-display text-4xl italic text-text-primary/80 md:text-6xl lg:text-7xl"
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-10 right-6 font-display tabular-nums text-6xl text-text-primary md:right-10 md:text-8xl lg:text-9xl"
      >
        {String(count).padStart(3, "0")}
      </motion.span>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="accent-gradient h-full w-full origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
        />
      </div>
    </motion.div>
  );
}
