"use client";

import { motion } from "framer-motion";

import { SkillItem } from "@/components";
import { skills } from "@/constants";
import { fadeIn } from "@/utils";

interface Props {
  id: number;
  type: "team work" | "backend" | "frontend" | "styles";
  title: string;
  className: string;
  active: number;
  handleClick: (id: number) => void;
}

export function SkillBlock({
  id,
  title,
  type,
  className,
  active,
  handleClick,
}: Props) {
  const skillBlock = skills.filter((skill) => skill.type === type);

  const handleToggle = (id: number) => {
    if (id === active) {
      handleClick(0);
    } else {
      handleClick(id);
    }
  };

  const flexStyle = active === id ? "skill-block__active" : "";

  return (
    <motion.div
      variants={fadeIn}
      className={`skill-block ${className} ${flexStyle}`}
      onClick={() => handleToggle(id)}
    >
      {active !== id ? (
        <h3 className="skill-block__title skill-block__overlay skill-block__overlay-notActive">
          {title}
        </h3>
      ) : (
        <div className="skill-block__overlay skill-block__overlay-active">
          <h3 className="skill-block__title">{title}</h3>
          <div className="skills-section__list">
            {skillBlock.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
