import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  padding?: number;
  strength?: number;
  disabled?: boolean;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
};

// Follows the cursor while it is within `padding` of the element's edge, then
// eases back to rest once it leaves.
export default function Magnet({
  children,
  padding = 100,
  strength = 2,
  disabled = false,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled) {
      setActive(false);
      setOffset({ x: 0, y: 0 });
      return;
    }

    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setActive(true);
        setOffset({
          x: (e.clientX - centerX) / strength,
          y: (e.clientY - centerY) / strength,
        });
      } else if (active) {
        setActive(false);
        setOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [padding, strength, disabled, active]);

  return (
    <div ref={ref} className={className}>
      <div
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: active ? activeTransition : inactiveTransition,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
