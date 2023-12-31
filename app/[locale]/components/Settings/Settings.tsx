"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { Navigation, Portal, Switchers } from "@/components";
import { useGlobalContext } from "@/context";
import { useKeyPress, useScrollLock } from "@/hooks";

import Gear from "@/assets/svg/gear.svg";

export function Settings() {
  const t = useTranslations("btn");

  const [showButton, setShowButton] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const { isSettingsOpen, handleSettingsClose, handleSettingsToggle } =
    useGlobalContext();

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleSettingsClose();
    }
  };

  useKeyPress("Escape", () => {
    handleSettingsClose();
  });

  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isSettingsOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isSettingsOpen, lockScroll, unlockScroll]);

  useEffect(() => {
    if (isSettingsOpen) {
      setAnimationClass("loader");
      const timer = setTimeout(() => {
        setAnimationClass("");
      }, 800);
      return () => clearTimeout(timer);
    }
    if (!isSettingsOpen) {
      setAnimationClass("loader");
      const timer = setTimeout(() => {
        setAnimationClass("");
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isSettingsOpen]);

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
      } ${isSettingsOpen ? "button-settings__right" : ""}`}
    >
      <button
        type="button"
        className="button-icon"
        onClick={handleSettingsToggle}
      >
        <Gear />
      </button>
      {isSettingsOpen && (
        <Portal wrapperId="settings-portal">
          <div className="settings-backdrop" onClick={handleBackdropClick}>
            <div className="settings-background">
              <h3 className="settings-title">{t("settings")}</h3>
              <Navigation onClick={() => handleSettingsClose()} />
              <Switchers className="settings-switchers" />
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
