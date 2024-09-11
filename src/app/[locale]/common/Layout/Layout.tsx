"use client";

import { ContentIndicator, Footer, Header, Settings } from "@/common";
import { FormPortal } from "@/components";

export function Layout(props: any) {
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoaded(true);
  //   }, 2000);
  // }, [loaded]);

  // return loaded ? (
  return (
    <>
      <Header />
      <FormPortal />
      {props.children}
      <Footer />
      <Settings />
      <ContentIndicator />
    </>
  );
  // ) : (
  //   <PreLoader />
  // );
}
