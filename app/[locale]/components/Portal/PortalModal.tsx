"use client";

import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

import { motion } from "framer-motion";

import { Portal } from "@/components";
import { useKeyPress, useScrollLock } from "@/hooks";
import { opacityVariants } from "@/utils";

interface Props {
  children: React.ReactNode;
  isOpen?: boolean;
  nameId?: string;
  title?: string;
  noDivContent?: boolean;
  handleClose: () => void;
}

export function PortalModal({
  isOpen = false,
  handleClose,
  nameId = "modal",
  children,
  title = "",
  noDivContent = false,
}: Props) {
  const contentContainerRef = useRef<HTMLDivElement | null>(null);
  const [hasScrollbar, setHasScrollbar] = useState(false);

  useEffect(() => {
    const updateScrollbarStatus = () => {
      if (contentContainerRef.current) {
        const hasScrollbar =
          contentContainerRef.current.scrollHeight >
          contentContainerRef.current.clientHeight;

        setHasScrollbar(hasScrollbar);
      }
    };

    const timeoutId = setTimeout(updateScrollbarStatus, 100);

    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useKeyPress("Escape", handleClose);

  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [isOpen, lockScroll, unlockScroll]);

  return (
    isOpen && (
      <Portal wrapperId={nameId}>
        <motion.div
          className="modal-backdrop"
          onClick={handleBackdropClick}
          variants={opacityVariants("first")}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
        >
          <div
            ref={contentContainerRef}
            className={`modal-background ${
              hasScrollbar ? "modal-background__with-scrollbar" : ""
            }`}
          >
            <button
              type="button"
              className={`button-icon button-icon__close ${
                noDivContent
                  ? "button-icon__close-left"
                  : "button-icon__close-right"
              }`}
              onClick={handleClose}
            >
              <IoClose />
            </button>
            {noDivContent ? (
              children
            ) : (
              <div className="modal-content">
                <h3 className="modal-title">{title}</h3>
                {children}
              </div>
            )}
          </div>
        </motion.div>
      </Portal>
    )
  );
}
