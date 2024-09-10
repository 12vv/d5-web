"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmailSection from "./components/EmailSection";
import HeaderSection from "./components/Version2/HeaderSection";
import IconSection from "./components/IconSection";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import StaticLogoSection from "./components/StaticLogoSection";
import AchievementsSection from "./components/AchievementSection";
import PlanSection from "./components/PlanSection";
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
      <main className="flex min-h-screen flex-col px-44 2xl:px-32">
        <Navbar />
        {/* <div className="container mt-24 mx-auto px-12 py-4"> */}
        <HeaderSection />
        {/* <LogoSection /> */}
        <IntroductionSection />
        <BigTitleSection backgroundImage="/images/Vector-gradient.svg" />
        <About />
        <LearnMore />
        {/* <IconSection /> */}
        {/* <IntroSection /> */}
        {/* <ExampleSection /> */}
        {/* <AchievementsSection /> */}
        {/* <ProjectsSection /> */}
        {/* <StaticLogoSection /> */}

        {/* <EmailSection /> */}
        {/* </div> */}
        <Footer />
      </main>
    </>
  );
}
