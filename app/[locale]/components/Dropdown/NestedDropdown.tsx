"use client";

import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { useTranslations } from "next-intl";

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import { dropdownCategories } from "@/constants";
import { useScreenQuery } from "@/hooks";

interface Props {
  type: string;
  activeTypeFilter: string | null;
  activeCategoryFilter: string | null;
  onSelectType: (type: string) => void;
  onSelectCategory: (category: string, type: string) => void;
}

export function NestedDropdown({
  activeTypeFilter,
  activeCategoryFilter,
  onSelectCategory,
  onSelectType,
  type,
}: Props) {
  const iF = useTranslations("dropdown.categoriesFrontend");
  const iB = useTranslations("dropdown.categoriesBackend");
  const iD = useTranslations("dropdown.categoriesData");
  const t = useTranslations("dropdown.type");

  const [isHovered, setIsHovered] = useState(false);
  const [activeType, setActiveType] = useState<string | null>(null);

  const checkDropdownContent = useCallback(() => {
    const nestedContents = document.querySelectorAll(".dropdownNested-content");

    let foundActive = false;

    for (const nestedContent of nestedContents) {
      if (
        nestedContent &&
        window.getComputedStyle(nestedContent).display !== "none"
      ) {
        foundActive = true;
        break;
      }
    }

    setActiveType(foundActive ? type : null);
  }, [type]);

  useEffect(() => {
    if (isHovered) {
      checkDropdownContent();
    }
  }, [isHovered, checkDropdownContent, type]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    checkDropdownContent();
  };

  const handleCategoryClick = (category: string, type: string) => {
    onSelectCategory(category, type);
  };

  const interConst = type === "frontend" ? iF : type === "backend" ? iB : iD;

  const { isScreenMobileLg } = useScreenQuery();
  const isTouchDevice = useMediaQuery({ query: "(hover: none)" });

  return (
    <div onMouseLeave={handleMouseLeave} className="relative">
      <button
        type="button"
        className={`dropdownNested-container ${
          isTouchDevice && isHovered && activeType === type
            ? "active-button"
            : ""
        } ${activeTypeFilter === type ? "active-filter" : ""} `}
        onClick={() => {
          onSelectType(type), setIsHovered(false);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? <BsFillCaretRightFill /> : <BsFillCaretLeftFill />}
        {t(`${type}`)}
      </button>
      <div
        className={`dropdownNested-content ${
          isScreenMobileLg ? "" : "dropdownNested-content__mobile"
        }`}
      >
        <ul className="dropdown-list dropdownNested-list">
          {dropdownCategories.map(
            (category, index) =>
              interConst(`${category}`) !== "" && (
                <li key={index} className="dropdownNested-item">
                  <button
                    className={
                      activeCategoryFilter === `${type}.${category}`
                        ? "active-filter"
                        : ""
                    }
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
