"use client";

import { motion } from "framer-motion";

import { SkillItem } from "@/components";
import { Category, skills } from "@/constants";
import { fadeIn } from "@/utils";

interface Props {
  id: number;
  type: Category;
  title: string;
  className: string;
  active: number;
  animation: number;
  handleClick: (id: number) => void;
  handleClose: () => void;
}

export function SkillBlock({
  id,
  title,
  type,
  className,
  active,
  animation,
  handleClick,
  handleClose,
}: Props) {
  const skillBlock = skills.filter((skill) => skill.type === type);

  const handleToggle = (id: number) => {
    if (id === active) {
      handleClose();
    } else {
      const block = document.getElementById(String(active));

      if (block) {
        block.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      handleClick(id);
    }
  };

  const flexStyle = active === id ? "skill-block__active" : "";
  const animationStyle = animation % 2 !== 0 ? "left" : "right";

  return (
    <motion.div
      id={`${id}`}
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
