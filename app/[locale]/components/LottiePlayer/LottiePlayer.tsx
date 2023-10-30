"use client";

import { useEffect, useRef } from "react";

import lottie from "lottie-web";

interface LottiePlayerProps {
  src: string;
  background?: string;
  speed?: number;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export function LottiePlayer({
  src,
  background = "transparent",
  speed = 1,
  className = "",
  loop = true,
  autoplay = true,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current as Element,
      renderer: "svg",
      loop,
      autoplay,
      path: src,
    });

    anim.setSpeed(speed);

    return () => {
      anim.destroy(); // Clean up animation when component unmounts
    };
  }, [src, speed, loop, autoplay]);

  return (
    <div
      ref={containerRef}
      className={` ${className}`}
      style={{ background }}
    />
  );
}
