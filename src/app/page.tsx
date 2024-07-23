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

export default function Home() {
  return (
    <>
      <ScrollToTopButton />
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        {/* <div className="container mt-24 mx-auto px-12 py-4"> */}
        <HeaderSection />
        <LogoSection />
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
