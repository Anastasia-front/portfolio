"use client";

import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { useTranslations } from "next-intl";

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import { filtersCategories } from "@/constants";
import { useScreenQuery } from "@/hooks";

interface Props {
  type: string;
  activeTypeFilter: string | null;
  activeCategoryFilter: string | null;
  onSelectType: (type: string) => void;
  onSelectCategory: (category: string, type: string) => void;
}

export function NestedFilter({
  activeTypeFilter,
  activeCategoryFilter,
  onSelectCategory,
  onSelectType,
  type,
}: Props) {
  const iF = useTranslations("filters.categoriesFrontend");
  const iB = useTranslations("filters.categoriesBackend");
  const iD = useTranslations("filters.categoriesData");
  const t = useTranslations("filters.type");

  const [isHovered, setIsHovered] = useState(false);
  const [activeType, setActiveType] = useState<string | null>(null);

  const checkFilterContent = useCallback(() => {
    const nestedContents = document.querySelectorAll(".filtersNested-content");

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
      checkFilterContent();
    }
  }, [isHovered, checkFilterContent, type]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    checkFilterContent();
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
        className={`filtersNested-container ${
          isTouchDevice && isHovered && activeType === type
            ? "active-button"
            : ""
        } ${activeTypeFilter === type ? "active-filter" : ""} `}
        onClick={() => {
          onSelectType(type), setIsHovered(false);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={t(`${type}`)}
      >
        {isHovered ? <BsFillCaretRightFill /> : <BsFillCaretLeftFill />}
        {t(`${type}`)}
      </button>
      <div
        className={`filtersNested-content ${
          isScreenMobileLg ? "" : "filtersNested-content__mobile"
        }`}
      >
        <ul className="filters-list filtersNested-list">
          {filtersCategories.map(
            (category, index) =>
              interConst(`${category}`) !== "" && (
                <li key={index} className="filtersNested-item">
                  <button
                    className={
                      activeCategoryFilter === `${type}.${category}`
                        ? "active-filter"
                        : ""
                    }
                    type="button"
                    onClick={() => handleCategoryClick(category, type)}
                    aria-label={interConst(`${category}`)}
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
