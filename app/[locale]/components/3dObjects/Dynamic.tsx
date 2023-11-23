import dynamic from "next/dynamic";

interface Props {
  componentName: string;
}

export function Dynamic({ componentName }: Props) {
  const DynamicImportedComponent = dynamic(() => import(`./${componentName}`), {
    loading: () => <p>Loading...</p>,
  });

  return <DynamicImportedComponent />;
}
