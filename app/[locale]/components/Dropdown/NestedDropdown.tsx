"use client";

import { useTranslations } from "next-intl";

import { dropCategoriesKeys, dropTypesKeys } from "@/constants";

export function NestedDropdown() {
  const i = useTranslations("dropdown.categories");

  const t = useTranslations("dropdown.type");

  return (
    <>
      {dropTypesKeys.map(
        (type, index) =>
          t(`${type}`) === "frontend" && (
            <button key={index}>{t(`${type}`)}</button>
          )
      )}
      <div className="nested-dropdown-container">
        <div className="nested-dropdown-content">
          <ul>
            {dropCategoriesKeys.map((category, index) => (
              <li key={index} className="dropdown-item">
                <button>{i(`${category}`)}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
