import AboutUs from "@/widgets/About";
import FAQSection from "@/widgets/FAQ";
import FeaturesSection from "@/widgets/Feature";
import HeroSection from "@/widgets/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutUs/>
    <FeaturesSection/>
    <FAQSection/>
    </>
  );
}
