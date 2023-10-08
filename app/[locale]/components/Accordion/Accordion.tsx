"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";

import { SkillBlock } from "@/components";
import { skillBlocksEnglish, skillBlocksUkrainian } from "@/constants";

export function Accordion() {
  const [active, setActive] = useState(4);

  const pathname = usePathname();
  const lang = pathname.slice(0, 3);
  const skillBlocks = (() => {
    if (lang === "/uk") {
      return skillBlocksUkrainian;
    } else {
      return skillBlocksEnglish;
    }
  })();

  return (
    <div className="skill-blocks">
      {skillBlocks.map((block) => (
        <SkillBlock
          key={block.id}
          {...block}
          active={active}
          handleClick={setActive}
        />
      ))}
    </div>
  );
}
