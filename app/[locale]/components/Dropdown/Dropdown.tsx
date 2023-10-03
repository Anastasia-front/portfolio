"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";

import { dropTypesKeys } from "@/constants";

import { NestedDropdown } from "./NestedDropdown";

export function Dropdown() {
  const i = useTranslations("dropdown");
  const t = useTranslations("dropdown.type");

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container projects__filter">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {i("title")}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            {dropTypesKeys.map((type, index) => (
              <li key={index} className="dropdown-item">
                {t(`${type}`) === "frontend" ? (
                  <NestedDropdown />
                ) : (
                  <button>{t(`${type}`)}</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
