"use client";

import { useEffect } from "react";

import { motion } from "framer-motion";

import { Portal } from "@/components";
import { useKeyPress, useScrollLock } from "@/hooks";
import { opacityVariants } from "@/utils";

import Close from "@/assets/svg/close.svg";

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
    } else {
      unlockScroll();
    }
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
          <div className="modal-background">
            <button
              type="button"
              className="button-icon button-icon__close"
              onClick={handleClose}
            >
              <Close />
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
