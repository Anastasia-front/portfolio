interface Props {
  formStatus: "error" | "success" | null;
  loading: boolean;
}

export function getButtonClasses({ formStatus, loading }: Props) {
  let classes = "";

  if (formStatus === "success") {
    classes += "bg-green ";
  } else if (loading) {
    classes += "bg-loading ";
  } else if (formStatus === "error") {
    classes += "bg-red ";
  }

  if (loading || formStatus === "error") {
    classes += "cursor-not-allowed ";
  } else {
    classes += "cursor-pointer ";
  }

  return classes;
}
