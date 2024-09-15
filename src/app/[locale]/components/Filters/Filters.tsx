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

import { FilterCategory } from ".";

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

export function Filters({
  activeTypeFilter,
  activeCategoryFilter,
  handleTypeChange,
  handleCategoryChange,
  handleLanguageChange,
}: Props) {
  const i = useTranslations("filters");
  const c = useTranslations("filters.categories");

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hideOverflow, setHideOverflow] = useState<string | null>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filtersRef.current &&
      "contains" in filtersRef.current &&
      !filtersRef.current.contains(event.target as Node)
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

  const activeSortTypeFilter: string = [
    "all",
    "cli",
    "backend",
    "frontend",
    "data",
    "other",
  ].includes(activeTypeFilter!!)
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
      ref={filtersRef}
    >
      <button
        type="button"
        className="dropdown-button"
        onClick={toggleFilters}
        aria-label={i("title")}
      >
        {i("title")}
        {isOpen ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
      </button>
      {isOpen && (
        <div
          className={`dropdown-content ${
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
                    aria-label={c("type")}
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
                    aria-label={c("language")}
                  >
                    {c("language")}
                    <BsFillCaretRightFill />
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <FilterCategory
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
