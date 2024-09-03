import { BiLogoTypescript } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { IoChevronBackOutline } from "react-icons/io5";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";

import { useTranslations } from "next-intl";

import { filtersAllTypes, languages } from "@/constants";
import { getIconComponent } from "@/helpers";

import { NestedFilter } from "./NestedFilter";

const iconComponents = {
  FaList: <FaList />,
  DiJavascript: <DiJavascript />,
  BiLogoTypescript: <BiLogoTypescript />,
  FaPython: <FaPython />,
};

interface Props {
  activeTypeFilter: string | null;
  activeCategoryFilter: string | null;
  selectedCategory: string | null;
  handleTypeSelect: (type: string) => void;
  handleCategorySelect: (category: string, type: string) => void;
  handleLanguageChange: (lang: string) => void;
  handleSortBy: (category: string | null) => void;
}

export function FilterCategory({
  activeTypeFilter,
  activeCategoryFilter,
  selectedCategory,
  handleTypeSelect,
  handleCategorySelect,
  handleLanguageChange,
  handleSortBy,
}: Props) {
  const i = useTranslations("Filter");
  const c = useTranslations("Filter.categories");
  const t = useTranslations("Filter.type");
  const l = useTranslations("Filter.programmingLanguage");

  return (
    <ul className="Filter-list align-right">
      <li className="Filter-item back">
        <button type="button" onClick={() => handleSortBy(null)}>
          <IoChevronBackOutline />
          {i("back")}
        </button>
      </li>
      {selectedCategory === c("type")
        ? filtersAllTypes.map((type, index) => {
            if (t(`${type}`) === "all" || t(`${type}`) === "всі") {
              return (
                <li key={index} className="Filter-item all">
                  <button
                    className={activeTypeFilter === type ? "active-filter" : ""}
                    type="button"
                    onClick={() => handleTypeSelect(t(`${type}`))}
                    aria-label={t(`${type}`)}
                  >
                    <TfiLayoutListThumbAlt />
                    {t(`${type}`)}
                  </button>
                </li>
              );
            } else {
              return (
                <li key={index} className="Filter-item">
                  <NestedFilter
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
        : languages.map((lang, index) => (
            <li
              key={index}
              className={`Filter-item ${
                lang.title === "all" || lang.title === "всі" ? "all" : ""
              }`}
            >
              <button
                className={
                  activeTypeFilter === lang.title ? "active-filter" : ""
                }
                type="button"
                onClick={() => handleLanguageChange(`${lang.title}`)}
                aria-label={l(`${lang.title}`)}
              >
                {getIconComponent(iconComponents, lang.icon)}
                {l(`${lang.title}`)}
              </button>
            </li>
          ))}
    </ul>
  );
}
