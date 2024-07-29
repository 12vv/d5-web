import Navbar from "../components/Navbar";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import LinkBtn from "../components/LinkBtn";
import Image from "next/image";
import DLPMainSection from "./main";

export default function dlp() {
  return (
    <>
      <ScrollToTopButton />
      <Navbar />
      <DLPMainSection />
    </>
  );
}
