"use client";

import { useState } from "react";

import { SkillBlock } from "@/components";
import { skillBlocks } from "@/constants";

export function Accordion() {
  const [active, setActive] = useState(4);

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
