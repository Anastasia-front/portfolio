import { useModal } from "@/providers";

export function useGlobalContext() {
  const certificateModal = useModal("certificate");
  const formModal = useModal("form");
  const githubModal = useModal("github");
  const linkedInModal = useModal("linkedIn");
  const menuModal = useModal("menu");
  const progressModal = useModal("progress");
  const projectModal = useModal("projectImg");
  const settingsModal = useModal("settings");

  return {
    certificateModal,
    formModal,
    githubModal,
    linkedInModal,
    menuModal,
    progressModal,
    projectModal,
    settingsModal,
  };
}
