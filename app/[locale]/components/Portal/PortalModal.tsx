"use client";

import { useEffect, useState } from "react";
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
  handleClose: () => void;
}

export function PortalModal({
  isOpen = false,
  handleClose,
  nameId = "modal",
  children,
  title = "",
}: Props) {
  const [hasScrollbar, setHasScrollbar] = useState(false);

  useEffect(() => {
    const updateScrollbarStatus = () => {
      const contentContainer = document.querySelector(".modal-background");
      if (contentContainer) {
        setHasScrollbar(
          contentContainer.scrollHeight > contentContainer.clientHeight
        );
      }
    };

    updateScrollbarStatus();

    window.addEventListener("resize", updateScrollbarStatus);

    return () => {
      window.removeEventListener("resize", updateScrollbarStatus);
    };
  }, []);

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
            className={`modal-background ${
              hasScrollbar ? "modal-background__with-scrollbar" : ""
            }`}
          >
            <button
              type="button"
              className="button-icon button-icon__close"
              onClick={handleClose}
            >
              <IoClose />
            </button>
            <div className="modal-content">
              <h3 className="modal-title">{title}</h3>
              {children}
            </div>
          </div>
        </motion.div>
      </Portal>
    )
  );
}
