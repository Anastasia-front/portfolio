import { ReactNode } from "react";

interface IconComponents {
  [key: string]: ReactNode;
}

interface Props {
  iconComponents: IconComponents;
  iconName: string;
}

export function getIconComponent(iconComponents: IconComponents, iconName: string) {
  return iconComponents[iconName] || null;
}
