"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
  openModal: (modalName: string) => void;
  closeModal: () => void;
  toggleModal: (modalName: string) => void;
  isModalOpen: (modalName: string) => boolean;
}

const ModalContext = createContext<Props>({
  openModal: () => {},
  closeModal: () => {},
  toggleModal: () => {},
  isModalOpen: () => false,
});

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps): JSX.Element {
  const [modalState, setModalState] = useState<{ [key: string]: boolean }>({});
  const [currentModal, setCurrentModal] = useState<string | null>(null);

  function openModal(modalName: string): void {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
    setCurrentModal(modalName);
  }

  function closeModal(): void {
    if (currentModal) {
      setModalState((prevState) => ({
        ...prevState,
        [currentModal]: false,
      }));
      setCurrentModal(null);
    }
  }

  function toggleModal(modalName: string): void {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
    setCurrentModal(modalName);
  }

  function isModalOpen(modalName: string): boolean {
    return modalState[modalName] || false;
  }

  const value: Props = {
    openModal,
    closeModal,
    toggleModal,
    isModalOpen,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export function useModal(modalName: string): {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
} {
  const context = useContext(ModalContext);
  if (!context) {
    console.log(context)
    throw new Error("useModal must be used within a ModalProvider");
  }

  return {
    isOpen: context.isModalOpen(modalName),
    open: () => context.openModal(modalName),
    close: () => context.closeModal(),
    toggle: () => context.toggleModal(modalName),
  };
}
