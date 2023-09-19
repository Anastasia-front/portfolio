"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

import Button from "./Button";

import { useGlobalContext } from "../context/globalContext";
import { navVariants } from "../utils/animation";
import { menuItems } from "../utils/menuItems";

export function Navigation() {
  const [activeMenu, setActiveMenu] = React.useState(0);

  const context = useGlobalContext();
  const { handleToggle } = context;

  return (
    <motion.nav
      className="navigation"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <ul className="nav-items">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={45}
          height={45}
          style={{
            objectFit: "contain",
            backgroundColor: "#f2f6ff",
            borderRadius: "50%",
            padding: ".3rem",
          }}
        />

        {menuItems.map((item, index: number) => {
          return (
            <li
              key={item.id}
              className={`nav-items__item ${
                activeMenu === index && "active-menu"
              }`}
              onClick={() => {
                setActiveMenu(index);
              }}
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          );
        })}
      </ul>

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
