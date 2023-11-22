import dynamic from "next/dynamic";
import React from "react";

interface DynamicProps {
  componentName: string;
}

export const Dynamic: React.FC<DynamicProps> = ({ componentName }) => {
  const DynamicImportedComponent = dynamic(() => import(`./${componentName}`), {
    loading: () => <p>Loading...</p>,
  });

  return <DynamicImportedComponent />;
};
