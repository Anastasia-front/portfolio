interface Props {
  formStatus: "error" | "success" | null;
  loading: boolean;
}

export function getButtonClasses({ formStatus, loading }: Props) {
  let classes = "";

  if (formStatus === "success") {
    classes += "bg-lightOrange ";
  } else if (loading) {
    classes += "bg-accent ";
  } else if (formStatus === "error") {
    classes += "bg-red ";
  } else {
    classes +=
      "bg-accent hover:bg-darkOrange focus:bg-darkOrange transition duration-300 ";
  }

  if (loading || formStatus === "error") {
    classes += "cursor-not-allowed ";
  } else {
    classes += "cursor-pointer ";
  }

  classes +=
    "text-[24px] text-black font-normal line-height-[29px] hover:font-medium focus:font-medium transition duration-300 ";
  classes +=
    "flex gap-[8px] justify-center items-center text-center w-[212px] py-[8px] h-[45px]";

  return classes;
}
