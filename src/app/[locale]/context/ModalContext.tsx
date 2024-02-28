import { useModal } from "@/providers";

export function useGlobalContext() {
  const menuModal = useModal("menu");
  const formModal = useModal("form");
  const progressModal = useModal("progress");
  const certificateModal = useModal("certificate");
  const settingsModal = useModal("settings");
  const githubModal = useModal("github");
  const projectModal = useModal("projectImg");

  return {
    menuModal,
    formModal,
    progressModal,
    certificateModal,
    settingsModal,
    githubModal,
    projectModal,
  };
}
