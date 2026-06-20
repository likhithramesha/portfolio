import type { ReactNode } from "react";
import { useState } from "react";

type MagnetProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
};

export function Magnet({
  children,
  className,
  strength = 4,
  activeTransition = "transform 0.25s ease-out",
  inactiveTransition = "transform 0.55s ease-in-out",
}: MagnetProps) {
  const [transform, setTransform] = useState("translate3d(0, 0, 0)");
  const [transition, setTransition] = useState(inactiveTransition);

  return (
    <div
      className={className}
      style={{ transform, transition, willChange: "transform" }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        setTransition(activeTransition);
        setTransform(`translate3d(${x / strength}px, ${y / strength}px, 0)`);
      }}
      onPointerLeave={() => {
        setTransition(inactiveTransition);
        setTransform("translate3d(0, 0, 0)");
      }}
    >
      {children}
    </div>
  );
}
