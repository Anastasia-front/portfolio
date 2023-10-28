import ErrorIcon from "public/svg/close.svg";
import SuccessIcon from "public/svg/success.svg";

import { Loader } from "@/components";

interface Props {
  formStatus: "error" | "success" | null;
  loading: boolean;
  sendBtn: string;
  sendBtnSuccess: string;
  sendBtnError: string;
}

export function getButtonContent({
  formStatus,
  loading,
  sendBtn,
  sendBtnSuccess,
  sendBtnError,
}: Props) {
  if (formStatus === "success") {
    return (
      <>
        <SuccessIcon className="icon" /> {sendBtnSuccess}
      </>
    );
  }

  if (loading) {
    return <Loader />;
  }

  if (formStatus === "error") {
    return (
      <>
        <ErrorIcon className="icon" /> {sendBtnError}
      </>
    );
  }

  return sendBtn;
}
