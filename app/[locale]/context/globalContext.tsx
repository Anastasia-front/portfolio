"use client";

import React, { useState } from "react";

const GlobalContext = React.createContext({
  isMenuOpen: false,
  handleMenuOpen: () => {},
  handleMenuClose: () => {},
  isFormOpen: false,
  handleFormOpen: () => {},
  handleFormClose: () => {},
  isSettingsOpen: false,
  handleSettingsClose: () => {},
  handleSettingsToggle: () => {},
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
  };

  const handleSettingsToggle = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  return (
    <GlobalContext.Provider
      value={{
        isMenuOpen,
        handleMenuOpen,
        handleMenuClose,
        isFormOpen,
        handleFormOpen,
        handleFormClose,
        isSettingsOpen,
        handleSettingsClose,
        handleSettingsToggle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
