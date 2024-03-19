"use client";

import { useEffect, useState } from "react";

import { ContentIndicator, Footer, Header, Settings } from "@/common";
import { FormPortal, PreLoader } from "@/components";

export function Layout(props: any) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = false;
    if (!loaded) {
      setTimeout(() => {
        if (isMounted) {
          setLoaded(true);
        }
      }, 2000);
    }

    return () => {
      isMounted = true;
    };
  }, [loaded]);

  return loaded ? (
    <>
      <Header />
      <FormPortal />
      {props.children}
      <Footer />
      <Settings />
      <ContentIndicator />
    </>
  ) : (
    <PreLoader />
  );
}
