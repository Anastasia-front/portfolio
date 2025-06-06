"use client";

import { memo, useEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  text: string | string[];
  tag?: React.ElementType;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  variant: "word" | "character";
}

export const AppearedText = memo(function AppearedText({
  text,
  tag: Wrapper = "p",
  className,
  once = true,
  repeatDelay,
  variant,
}: Props) {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once, amount: 0.5 });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let animationFrameId: number;

    const startAnimation = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(() => {
          controls.start("hidden").then(() => {
            animationFrameId = requestAnimationFrame(() => {
              controls.start("visible");
            });
          });
        }, repeatDelay);
      }
    };

    if (isInView) {
      animationFrameId = requestAnimationFrame(startAnimation);
    } else {
      controls.start("hidden");
    }

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, controls, repeatDelay]);

  const createAnimation = () => ({
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: variant === "word" ? 12 : 20,
        stiffness: variant === "word" ? 100 : 150,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
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
            transition: {
              staggerChildren: variant === "word" ? 0.1 : 0.03,
              delayChildren: variant === "word" ? 0.04 * i : 0.01 * i,
            },
          }),
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {variant === "word" ? (
                  <motion.span
                    className="inline-block"
                    variants={createAnimation()}
                  >
                    {word}
                  </motion.span>
                ) : (
                  word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${char}-${charIndex}`}
                      className="inline-block"
                      variants={createAnimation()}
                    >
                      {char}
                    </motion.span>
                  ))
                )}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
});
