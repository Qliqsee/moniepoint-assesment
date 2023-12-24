import React, { useEffect } from "react";
import Header from "./Header";
import Section1 from "./Section1";
import Lenis from "@studio-freight/lenis";

const Main = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Header />
      <Section1 />
      {/* <Section1 /> */}
    </>
  );
};

export default Main;
