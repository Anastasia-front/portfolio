"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoAdd, IoClose, IoRemove } from "react-icons/io5";

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
  const [scaleFactor, setScaleFactor] = useState(1);
  const [zoomInDisabled, setZoomInDisabled] = useState(false);
  const [zoomOutDisabled, setZoomOutDisabled] = useState(false);

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

  const handleZoomIn = () => {
    setScaleFactor((prevFactor) => prevFactor + 0.2);
  };

  const handleZoomOut = () => {
    setScaleFactor((prevFactor) => Math.max(prevFactor - 0.2, 0.2));
  };

  useEffect(() => {
    if (scaleFactor > 1) {
      setZoomInDisabled(true);
    } else if (scaleFactor < 1) {
      setZoomOutDisabled(true);
    } else {
      setZoomInDisabled(false);
      setZoomOutDisabled(false);
    }
  }, [scaleFactor]);

  const zoomedClass =
    scaleFactor > 1 ? "zoom-in" : scaleFactor < 1 ? "zoom-out" : "";

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

            {noDivContent && (
              <div className="button-zoom">
                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={zoomInDisabled}
                >
                  <IoAdd />
                </button>
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={zoomOutDisabled}
                >
                  <IoRemove />
                </button>
              </div>
            )}
            {noDivContent ? (
              <div className={`cursor-move ${zoomedClass}`}>{children}</div>
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
