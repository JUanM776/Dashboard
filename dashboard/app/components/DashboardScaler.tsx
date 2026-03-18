"use client";
import { useEffect, useRef, useState } from "react";

export default function DashboardScaler({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // Design target: 1440 x 900
      const scaleX = vw / 1440;
      const scaleY = vh / 900;
      setScale(Math.min(scaleX, scaleY, 1));
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#f0f2f5]">
      <div
        ref={wrapperRef}
        style={{
          width: 1440,
          height: 900,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
