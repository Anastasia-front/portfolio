"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { Navigation, Portal, Switchers } from "@/components";
import { useGlobalContext } from "@/context";
import { useKeyPress, useScrollLock } from "@/hooks";

import Gear from "@/assets/svg/gear.svg";

export default function Settings() {
  const t = useTranslations("btn");

  const [showButton, setShowButton] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const { settingsModal } = useGlobalContext();

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      settingsModal.close();
    }
  };

  useKeyPress("Escape", settingsModal.close);

  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (settingsModal.isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [settingsModal.isOpen, lockScroll, unlockScroll]);

  useEffect(() => {
    if (settingsModal.isOpen) {
      setAnimationClass("loader");
      const timer = setTimeout(() => {
        setAnimationClass("");
      }, 800);
      return () => clearTimeout(timer);
    }
    if (!settingsModal.isOpen) {
      setAnimationClass("loader");
      const timer = setTimeout(() => {
        setAnimationClass("");
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [settingsModal.isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const footerSection = document.getElementById("footer");
      if (footerSection) {
        const footerRect = footerSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isFooterVisible = footerRect.top > windowHeight;

        setShowButton(window.scrollY > windowHeight && isFooterVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`button-settings ${animationClass} ${
        !showButton ? "hidden" : ""
      } ${settingsModal.isOpen ? "button-settings__right" : ""}`}
    >
      <button
        type="button"
        className="button-icon"
        onClick={settingsModal.toggle}
        aria-label={t("settings")}
      >
        <Gear />
      </button>
      {settingsModal.isOpen && (
        <Portal wrapperId="settings-portal">
          <div className="settings-backdrop" onClick={handleBackdropClick}>
            <div className="settings-background">
              <h3 className="settings-title">{t("settings")}</h3>
              <Navigation onClick={settingsModal.close} />
              <Switchers className="settings-switchers" />
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}