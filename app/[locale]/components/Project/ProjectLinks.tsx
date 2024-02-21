"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export interface ProjectLinksProps {
  links:
    | {
        website?: string | null | undefined;
        github?: string | null | undefined;
      }
    | undefined;
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  const h = useTranslations("projects.headers");
  const l = useTranslations("projects.links");
  return (
    links && (
      <div className="project__content__text-links">
        {!links.website || !links.github ? (
          <h4>{h("link")}</h4>
        ) : (
          <h4>{h("links")}</h4>
        )}
        <ul>
          <li>
            {links.github && (
              <Link
                href={links.github}
                target="_blank"
                aria-label={l("github")}
              >
                {l("github")}
              </Link>
            )}
          </li>
          <li>
            {links.website && (
              <Link
                href={links.website}
                target="_blank"
                aria-label={l("website")}
              >
                {l("website")}
              </Link>
            )}
          </li>
        </ul>
      </div>
    )
  );
}
