"use client";

import React, { useRef, useState } from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { AppearedText } from "../AnimatedText";

export function BeforeAfterSlider() {
  const a = useTranslations("projects.slider.after");
  const b = useTranslations("projects.slider.before");
  const i = useTranslations("projects.slider");

  const [position, setPosition] = useState(50);
  const [showPoster, setShowPoster] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    let percent = (offsetX / rect.width) * 100;

    setPosition(Math.max(0, Math.min(100, percent)));
    setShowPoster(false);
  };

  const handleMouseDown = () => {
    isDraggingRef.current = true;
    setShowPoster(false);
  };

  const handleMouseUp = () => (isDraggingRef.current = false);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    if ("touches" in e) {
      handleMove(e.touches[0].clientX);
    } else {
      handleMove(e.clientX);
    }
  };

  return (
    <>
      <AppearedText
        variant="character"
        text={i("title")}
        className="slider-title"
        tag="h4"
      />
      <div
        ref={containerRef}
        className="slider-container"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        {showPoster ? (
          <Image
            width={600}
            height={400}
            src="/images/slider/poster.webp"
            alt={i("posterAlt")}
            className="slider-poster"
            onClick={() => setShowPoster(false)}
            onTouchStart={() => setShowPoster(false)}
          />
        ) : (
          <>
            <Image
              width={600}
              height={400}
              src="/images/slider/after.webp"
              alt={a("alt")}
              className="slider-afterImage"
            />
            <Image
              width={600}
              height={400}
              src="/images/slider/before.webp"
              alt={b("alt")}
              className="slider-beforeImage"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            />
            <span
              className="slider-beforeText"
              style={{ opacity: position > 10 ? 1 : 0 }}
            >
              {b("title")}
            </span>
            <span
              className="slider-afterText"
              style={{ opacity: position < 90 ? 1 : 0 }}
            >
              {a("title")}
            </span>
          </>
        )}
        <div
          className="slider-bar"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        />
      </div>
    </>
  );
}
