import { BiLogoTypescript } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { IoChevronBackOutline } from "react-icons/io5";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";

import { useTranslations } from "next-intl";

import { dropdownAllTypes } from "@/constants";

import { NestedDropdown } from "./NestedDropdown";

interface Props {
  activeTypeFilter: string | null;
  activeCategoryFilter: string | null;
  selectedCategory: string | null;
  handleTypeSelect: (type: string) => void;
  handleCategorySelect: (category: string, type: string) => void;
  handleLanguageChange: (lang: string) => void;
  handleSortBy: (category: string | null) => void;
}

export function DropdownCategory({
  activeTypeFilter,
  activeCategoryFilter,
  selectedCategory,
  handleTypeSelect,
  handleCategorySelect,
  handleLanguageChange,
  handleSortBy,
}: Props) {
  const i = useTranslations("dropdown");
  const c = useTranslations("dropdown.categories");
  const t = useTranslations("dropdown.type");
  const l = useTranslations("dropdown.programmingLanguage");

  return (
    <ul className="dropdown-list align-right">
      <li className="dropdown-item back">
        <button type="button" onClick={() => handleSortBy(null)}>
          <IoChevronBackOutline />
          {i("back")}
        </button>
      </li>
      {selectedCategory === c("type") ? (
        dropdownAllTypes.map((type, index) => {
          if (t(`${type}`) === "all" || t(`${type}`) === "всі") {
            return (
              <li key={index} className="dropdown-item all">
                <button
                  className={activeTypeFilter === type ? "active-filter" : ""}
                  type="button"
                  onClick={() => {
                    handleTypeSelect(t(`${type}`));
                  }}
                >
                  <TfiLayoutListThumbAlt />
                  {t(`${type}`)}
                </button>
              </li>
            );
          } else {
            return (
              <li key={index} className="dropdown-item">
                <NestedDropdown
                  activeTypeFilter={activeTypeFilter}
                  activeCategoryFilter={activeCategoryFilter}
                  onSelectType={handleTypeSelect}
                  onSelectCategory={handleCategorySelect}
                  type={type}
                />
              </li>
            );
          }
        })
      ) : (
        <ul className="dropdown-list align-right">
          <li className="dropdown-item all">
            <button
              className={activeTypeFilter === l("all") ? "active-filter" : ""}
              type="button"
              onClick={() => handleLanguageChange(l("all"))}
            >
              {l("all")} <FaList />
            </button>
          </li>
          <li className="dropdown-item">
            <button
              type="button"
              onClick={() => handleLanguageChange(l("js"))}
              className={activeTypeFilter === l("js") ? "active-filter" : ""}
            >
              {l("js")}
              <DiJavascript />
            </button>
          </li>
          <li className="dropdown-item">
            <button
              type="button"
              onClick={() => handleLanguageChange(l("ts"))}
              className={activeTypeFilter === l("ts") ? "active-filter" : ""}
            >
              {l("ts")}
              <BiLogoTypescript />
            </button>
          </li>
          <li className="dropdown-item">
            <button
              className={
                activeTypeFilter === l("python") ? "active-filter" : ""
              }
              type="button"
              onClick={() => handleLanguageChange(l("python"))}
            >
              {l("python")}
              <FaPython />
            </button>
          </li>
        </ul>
      )}
    </ul>
  );
}
