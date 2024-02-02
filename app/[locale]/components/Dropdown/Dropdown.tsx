"use client";

import { useEffect, useRef, useState } from "react";
import {
  BsFillCaretDownFill,
  BsFillCaretRightFill,
  BsFillCaretUpFill,
} from "react-icons/bs";

import { useTranslations } from "next-intl";
import { Rubik } from "next/font/google";

import { motion } from "framer-motion";

import { gridVariants } from "@/utils";

import { DropdownCategory } from ".";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400"],
});

interface Props {
  activeTypeFilter: string | null;
  activeCategoryFilter: string | null;
  handleTypeChange: (type: string) => void;
  handleLanguageChange: (lang: string) => void;
  handleCategoryChange: (category: string, type: string) => void;
}

export function Dropdown({
  activeTypeFilter,
  activeCategoryFilter,
  handleTypeChange,
  handleCategoryChange,
  handleLanguageChange,
}: Props) {
  const i = useTranslations("dropdown");
  const c = useTranslations("dropdown.categories");
  const t = useTranslations("dropdown.type");
  const l = useTranslations("dropdown.programmingLanguage");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hideOverflow, setHideOverflow] = useState<string | null>(null);
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
    handleTypeChange(type);
  };

  const handleCategorySelect = (category: string, type: string) => {
    handleCategoryChange(category, type);
  };

  useEffect(() => {
    if (selectedCategory) {
      const timeout = setTimeout(() => {
        setHideOverflow(selectedCategory);
      }, 1000);
      return () => clearTimeout(timeout);
    }
    setHideOverflow(selectedCategory);
  }, [selectedCategory]);

  const handleSortBy = (category: string | null) => {
    setSelectedCategory(category);
  };

  const activeSortTypeFilter: string = ["frontend", "backend", "data"].includes(
    activeTypeFilter!!
  )
    ? "active-filter"
    : "";

  const activeSortLangFilter: string = ["js", "ts", "python"].includes(
    activeTypeFilter!!
  )
    ? "active-filter"
    : "";

  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className={`dropdown-container ${rubik.className}`}
      ref={dropdownRef}
    >
      <button
        type="button"
        className="dropdown-button"
        onClick={toggleDropdown}
      >
        {i("title")}
        {isOpen ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
      </button>
      {isOpen && (
        <div
          className={` dropdown-content ${
            !hideOverflow ? "hidden-overflow" : ""
          }`}
        >
          <ul
            className={`dropdown-categories ${
              selectedCategory ? "show" : "hide"
            }`}
          >
            <li className={` ${!selectedCategory ? "show-list" : "hide-list"}`}>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <p> {i("sortBy")}</p>
                </li>
                <li className="dropdown-item">
                  <button
                    type="button"
                    onClick={() => handleSortBy(c("type"))}
                    className={activeSortTypeFilter}
                  >
                    {c("type")}
                    <BsFillCaretRightFill />
                  </button>
                </li>
                <li className="dropdown-item">
                  <button
                    type="button"
                    onClick={() => handleSortBy(c("language"))}
                    className={activeSortLangFilter}
                  >
                    {c("language")}
                    <BsFillCaretRightFill />
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <DropdownCategory
                selectedCategory={selectedCategory}
                handleTypeSelect={handleTypeSelect}
                handleCategorySelect={handleCategorySelect}
                handleLanguageChange={handleLanguageChange}
                handleSortBy={() => handleSortBy(null)}
                activeTypeFilter={activeTypeFilter}
                activeCategoryFilter={activeCategoryFilter}
              />
            </li>
          </ul>
        </div>
      )}
    </motion.div>
  );
}
