"use client";

import { useEffect, useRef } from "react";

import { Variant, motion, useAnimation, useInView } from "framer-motion";

interface Props {
  text: string | string[];
  el?: React.ElementType;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
}

export function AnimatedTextWord({
  text,
  el: Wrapper = "p",
  className,
  once = false,
  repeatDelay,
}: Props) {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls, repeatDelay]);

  const createAnimation = () => ({
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  });

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
          }),
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <>
                <motion.span
                  key={`${word}-${wordIndex}`}
                  className="inline-block"
                  variants={createAnimation()}
                >
                  {word}
                </motion.span>
                <span className="inline-block">&nbsp;</span>
              </>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
