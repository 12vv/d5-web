"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmailSection from "./components/EmailSection";
import HeaderSection from "./components/HeaderSection";
import IconSection from "./components/IconSection";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import StaticLogoSection from "./components/StaticLogoSection";
import AchievementsSection from "./components/AchievementSection";
import PlanSection from "./components/PlanSection";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import ExampleSection from "./components/ExampleSection";
import LogoSection from "./components/LogoSection";
import IntroductionSection from "./components/IntroductionSection";
import BigTitleSection from "./components/BigTitleSection";

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
      <main className="flex min-h-screen flex-col">
        <Navbar />
        {/* <div className="container mt-24 mx-auto px-12 py-4"> */}
        <HeaderSection />
        {/* <LogoSection /> */}
        <IntroductionSection />
        <BigTitleSection backgroundImage="/images/Vector-gradient.svg" />
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
