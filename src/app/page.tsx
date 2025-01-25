"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmailSection from "./components/EmailSection";
import HeaderSection from "./components/Version2/HeaderSection";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import ExampleSection from "./components/ExampleSection";
import LogoSection from "./components/LogoSection";
// import IntroductionSection from "./components/IntroductionSection";
import IntroductionSection from "./components/Version2/IntroductionSection";

import BigTitleSection from "./components/Version2/BigTitleSection";
import About from "./components/Version2/Projects";
import LearnMore from "./components/Version2/LearnMore";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const divStyle = {
    "--x": `${position.x}px`,
    "--y": `${position.y}px`,
  } as any;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <ScrollToTopButton />
      <div className="sc-f4aae16d-0 ckoHrE qs-block1 pos" style={divStyle}>
        <div className="sc-f4aae16d-0 sc-f4aae16d-1 ckoHrE QFxmO retrogrid"></div>
        <div className="sc-f4aae16d-0 sc-f4aae16d-1 ckoHrE QFxmO retrogrid"></div>

        {/* <div className="sc-f4aae16d-0 sc-f4aae16d-2 ckoHrE llUbIZ retrogrid"></div> */}
      </div>
      <main className="flex min-h-screen flex-col px-8 md:px-44 min-[1701px]:px-36  ">
        <Navbar />
        <HeaderSection />
        <IntroductionSection />
        <BigTitleSection backgroundImage="/images/Vector-gradient.svg" />
        {/* <About /> */}
        <LearnMore />

        {/* </div> */}
        <Footer />
      </main>
    </>
  );
}
