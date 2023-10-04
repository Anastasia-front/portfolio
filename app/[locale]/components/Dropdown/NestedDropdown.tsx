"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

import { fourKeys, twoKeys, twoKeysFromSecond } from "@/constants";

interface Props {
  type?: string;
  categories?: string[];
  onSelect: (category: string) => void;
}

export function NestedDropdown({ categories, onSelect, type }: Props) {
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
  const handleCategoryClick = (selectedCategory: string) => {
    let mappedCategory = selectedCategory;

    switch (selectedCategory) {
      case "first":
        mappedCategory = "commercial";
        break;
      case "second":
        mappedCategory = "individual";
        break;
      case "third":
        mappedCategory = "test";
        break;
      case "fourth":
        mappedCategory = "team";
        break;
      default:
        mappedCategory = "";
        break;
    }

    onSelect(mappedCategory);
    console.log(mappedCategory);
  };
  console.log(type);
  const dropKeys = type === "frontend" ? fourKeys : twoKeys;
  const interConst = type === "frontend" ? iF : iB;

  return (
    <>
      {twoKeysFromSecond.map(
        (type, index) =>
          t(`${type}`) && (
            <button
              key={index}
              className="dropdown-nested__container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isHovered ? <BsFillCaretRightFill /> : <BsFillCaretLeftFill />}

              {t(`${type}`)}
            </button>
          )
      )}
      <div className="dropdown-nested__content">
        <ul className="dropdown__list dropdown-nested__list">
          {dropKeys.map((category, index) => (
            <li key={index} className="dropdown__item">
              <button onClick={() => handleCategoryClick(category)}>
                {interConst(`${category}`)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
