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
  handleSettingsOpen: () => {},
  handleSettingsClose: () => {},
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

  const handleSettingsOpen = () => {
    setIsSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setIsSettingsOpen(false);
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
        handleSettingsOpen,
        handleSettingsClose,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
