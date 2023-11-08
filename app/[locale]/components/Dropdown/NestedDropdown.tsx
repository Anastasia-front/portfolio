"use client";

import { useEffect, useState } from "react";

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
  const [activeButton, setActiveButton] = useState(false);
  const [activeType, setActiveType] = useState<string | null>(null);

  const checkDropdownContent = () => {
    const nestedContents = document.querySelectorAll(
      ".dropdown-nested__content"
    );
    let foundActive = false;

    for (const nestedContent of nestedContents) {
      if (
        nestedContent &&
        window.getComputedStyle(nestedContent).display !== "none"
      ) {
        setActiveButton(true);
        foundActive = true;
        break;
      }
    }

    if (!foundActive) {
      setActiveButton(false);
    }
  };

  useEffect(() => {
    if (isHovered) {
      setActiveType(type);
    }
  }, [isHovered, type]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    checkDropdownContent();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    checkDropdownContent();
  };

  const handleCategoryClick = (category: string, type: string) => {
    onSelectCategory(category, type);
  };

  const interConst = type === "frontend" ? iF : iB;

  return (
    <div onMouseLeave={handleMouseLeave}>
      <button
        type="button"
        className={`dropdown-nested__container ${
          activeType === type && activeButton ? "active-button" : ""
        }`}
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
    </div>
  );
}
