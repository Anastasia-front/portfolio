import dynamic from "next/dynamic";

interface Props {
  componentName: string;
}

export function Dynamic({ componentName }: Props) {
  if (typeof window !== "undefined") {
    const DynamicImportedComponent = dynamic(
      () => import(`./${componentName}`),
      { ssr: false }
    );
    return <DynamicImportedComponent />;
  }
}
