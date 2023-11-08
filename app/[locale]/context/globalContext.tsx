"use client";

import React from "react";

const GlobalContext = React.createContext({
  toggle: false,
  handleToggle: () => {},
  handleClose: () => {},
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <GlobalContext.Provider value={{ toggle, handleToggle, handleClose }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
