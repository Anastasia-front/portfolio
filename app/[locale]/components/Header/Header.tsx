"use client";

import { motion } from "framer-motion";

import { useGlobalContext } from "../../context/globalContext";
import { navVariants } from "../../utils/animation";

import { ButtonText } from "../Buttons/ButtonText/ButtonText";
import { Navigation } from "../Navigation/Navigation";
import { Switchers } from "../Switchers/Switchers";

export function Header() {
  const context = useGlobalContext();
  const { handleToggle } = context;

  return (
    <motion.nav
      className="navigation"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <Navigation />
      <Switchers />
      <ButtonText
        text="Contact"
        bg="var(--color--orange-4)"
        modifier="white"
        borderRadius="60px"
        padding="1.2rem 2rem"
        hover="true"
        onClick={handleToggle}
      />
    </motion.nav>
  );
}
