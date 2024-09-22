import { BiLogoTypescript } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { GrCli } from "react-icons/gr";
import { IoChevronBackOutline } from "react-icons/io5";
import { MdOutlineDataThresholding } from "react-icons/md";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import { VscChromeRestore } from "react-icons/vsc";

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
  const i = useTranslations("filters");
  const c = useTranslations("filters.categories");
  const t = useTranslations("filters.type");
  const l = useTranslations("filters.programmingLanguage");

  return (
    <ul className="dropdown-list align-right">
      <li className="dropdown-item back" key={111}>
        <button type="button" onClick={() => handleSortBy(null)}>
          <IoChevronBackOutline />
          {i("back")}
        </button>
      </li>
      {selectedCategory === c("type")
        ? filtersAllTypes.map((type, index) => {
            if (t(`${type}`) === "all" || t(`${type}`) === "всі") {
              return (
                <li key={index} className="dropdown-item all">
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
            } else if (type === "cli") {
              return (
                <li key={index} className="dropdown-item">
                  <button
                    className={activeTypeFilter === type ? "active-filter" : ""}
                    type="button"
                    onClick={() => handleTypeSelect(type)}
                    aria-label={t(`${type}`)}
                  >
                    <GrCli />
                    {t(`${type}`)}
                  </button>
                </li>
              );
            } else if (type === "data" ) {
              return (
                <li key={index} className="dropdown-item">
                  <button
                    className={activeTypeFilter === type ? "active-filter" : ""}
                    type="button"
                    onClick={() => handleTypeSelect(t(`${type}`))}
                    aria-label={t(`${type}`)}
                  >
                    <MdOutlineDataThresholding />
                    {t(`${type}`)}
                  </button>
                </li>
              );
            } else if (t(`${type}`) === "other" || t(`${type}`) === "інші") {
              return (
                <li key={index} className="dropdown-item">
                  <button
                    className={activeTypeFilter === type ? "active-filter" : ""}
                    type="button"
                    onClick={() => handleTypeSelect(t(`${type}`))}
                    aria-label={t(`${type}`)}
                  >
                    <VscChromeRestore />
                    {t(`${type}`)}
                  </button>
                </li>
              );
            } else {
              return (
                <li key={index} className="dropdown-item">
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
              className={`dropdown-item ${
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
