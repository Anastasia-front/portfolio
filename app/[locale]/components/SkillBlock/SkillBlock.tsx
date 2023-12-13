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
  animation: number;
  handleClick: (id: number) => void;
}

export function SkillBlock({
  id,
  title,
  type,
  className,
  active,
  animation,
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

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClick(0);
    }
  };

  const flexStyle = active === id ? "skill-block__active" : "";
  const animationStyle = animation % 2 !== 0 ? "left" : "right";

  return (
    <motion.div
      variants={fadeIn(animationStyle)}
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
            {skillBlock.map((skill) => (
              <SkillItem
                key={skill.title}
                {...skill}
                animation={animationStyle}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
