"use client";

import { useEffect, useRef, useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

import { useTranslations } from "next-intl";
import { Rubik } from "next/font/google";

import { threeKeys } from "@/constants";

import { NestedDropdown } from "./NestedDropdown";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400"],
});

export function Dropdown({ handleTypeChange, handleCategoryChange }) {
  const i = useTranslations("dropdown");
  const t = useTranslations("dropdown.type");

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilterClick = (type: string) => {
    setIsOpen(!isOpen);
    handleTypeChange(type);
  };

  // ...

  const handleCategorySelect = (selectedCategory) => {
    handleCategoryChange(selectedCategory);
  };

  return (
    <div
      className={`dropdown__container projects__filter ${rubik.className}`}
      ref={dropdownRef}
    >
      <button className="dropdown__button" onClick={toggleDropdown}>
        {i("title")}
        {isOpen ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
      </button>
      {isOpen && (
        <div className="dropdown__content ">
          <ul className="dropdown__list">
            {threeKeys.map((type, index) => {
              //   const nestedTypes = ["backend", "frontend"];
              return (
                <li key={index} className="dropdown__item">
                  {t(`${type}`) === "all" ? (
                    <button onClick={() => handleFilterClick(t(`${type}`))}>
                      {t(`${type}`)}
                    </button>
                  ) : (
                    <NestedDropdown
                      onSelect={handleCategorySelect}
                      type={"frontend"}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
