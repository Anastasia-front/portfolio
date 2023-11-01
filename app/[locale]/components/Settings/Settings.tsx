"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { Navigation, Portal, Switchers } from "@/components";
import { useKeyPress } from "@/hooks";

import Gear from "@/assets/svg/gear.svg";

export function Settings() {
  const t = useTranslations("btn");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const handleMenuOpen = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  useKeyPress("Escape", handleMenuOpen);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleMenuOpen;
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      setAnimationClass("loader");
      const timer = setTimeout(() => {
        setAnimationClass("");
      }, 800);
      return () => clearTimeout(timer);
    }
    if (!isMenuOpen) {
      setAnimationClass("loader");
      const timer = setTimeout(() => {
        setAnimationClass("");
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  return (
    <div className={`button-settings ${animationClass}`}>
      <button type="button" className="buttonIcon" onClick={handleMenuOpen}>
        <Gear />
      </button>
      {isMenuOpen && (
        <Portal wrapperId="settings-portal">
          <div className="settings-backdrop" onClick={handleBackdropClick}>
            <div className="settings-background">
              <h3 className="settings-title">{t("settings")}</h3>
              <Navigation />
              <Switchers className="settings-switchers" />
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
