"use client";

import { motion } from "framer-motion";

import { useGlobalContext } from "../../context/globalContext";
import { navVariants } from "../../utils/animation";

import { Button } from "../Buttons/Button";
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
      <Button
        text="Contact"
        bg="#A855F7"
        modifier="white"
        borderRadius="60px"
        padding="1.2rem 2rem"
        hover="true"
        onClick={handleToggle}
      />
    </motion.nav>
  );
}
