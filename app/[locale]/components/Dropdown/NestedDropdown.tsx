"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import { dropdownCategories } from "@/constants";

interface Props {
  type: string;
  onSelectType: (type: string) => void;
  onSelectCategory: (category: string, type: string) => void;
}

export function NestedDropdown({
  onSelectCategory,
  onSelectType,
  type,
}: Props) {
  const iF = useTranslations("dropdown.categoriesFrontend");
  const iB = useTranslations("dropdown.categoriesBackend");
  const t = useTranslations("dropdown.type");

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleCategoryClick = (category: string, type: string) => {
    onSelectCategory(category, type);
  };

  const interConst = type === "frontend" ? iF : iB;

  return (
    <>
      <button
        type="button"
        className="dropdown-nested__container"
        onClick={() => onSelectType(type)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? <BsFillCaretRightFill /> : <BsFillCaretLeftFill />}

        {t(`${type}`)}
      </button>
      <div className="dropdown-nested__content">
        <ul className="dropdown__list dropdown-nested__list">
          {dropdownCategories.map(
            (category, index) =>
              interConst(`${category}`) !== "" && (
                <li key={index} className="dropdown-nested__item">
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(category, type)}
                  >
                    {interConst(`${category}`)}
                  </button>
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
}
