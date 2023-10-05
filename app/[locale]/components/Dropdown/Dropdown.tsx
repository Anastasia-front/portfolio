"use client";

import { useEffect, useRef, useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

import { useTranslations } from "next-intl";
import { Rubik } from "next/font/google";

import { motion } from "framer-motion";

import { dropdownAllTypes } from "@/constants";
import { gridVariants } from "@/utils";

import { NestedDropdown } from "./NestedDropdown";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400"],
});

interface Props {
  handleTypeChange: (type: string) => void;
  handleCategoryChange: (category: string, type: string) => void;
}

export function Dropdown({ handleTypeChange, handleCategoryChange }: Props) {
  const i = useTranslations("dropdown");
  const t = useTranslations("dropdown.type");

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      "contains" in dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTypeSelect = (type: string) => {
    setIsOpen(!isOpen);
    handleTypeChange(type);
  };

  const handleCategorySelect = (category: string, type: string) => {
    handleCategoryChange(category, type);
  };

  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className={`dropdown__container projects__filter ${rubik.className}`}
      ref={dropdownRef}
    >
      <button
        type="button"
        className="dropdown__button"
        onClick={toggleDropdown}
      >
        {i("title")}
        {isOpen ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
      </button>
      {isOpen && (
        <div className="dropdown__content ">
          <ul className="dropdown__list">
            {dropdownAllTypes.map((type, index) => {
              if (t(`${type}`) === "all" || t(`${type}`) === "всі") {
                return (
                  <li key={index} className="dropdown__item">
                    <button
                      type="button"
                      onClick={() => handleTypeSelect(t(`${type}`))}
                    >
                      {t(`${type}`)}
                    </button>
                  </li>
                );
              } else {
                return (
                  <li key={index} className="dropdown__item">
                    <NestedDropdown
                      onSelectType={handleTypeSelect}
                      onSelectCategory={handleCategorySelect}
                      type={t(`${type}`)}
                    />
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
