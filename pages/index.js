import { useLanguage } from "@/context/LanguageContext";
import pl from "../locales/pl.json";
import en from "../locales/en.json";
import LanguageSwitcher from "@/components/specific/LanguageSwitcher/LanguageSwitcher";
import Header from "@/components/layout/Header/Header";
import HomeSection from "@/components/sections/HomePage/HomeSection/HomeSection";
import SearchTagsSection from "@/components/sections/HomePage/SearchTagsSection/SearchTagsSection";
import DistinguishedSpecialists from "@/components/sections/HomePage/DistinguishedSpecialistsSection/DistinguishedSpecialists";
import doctors from "/examples/doctors.json";
import NearTerm from "@/components/sections/HomePage/NeartermaSection/NearTerm";
import TrustPhone from "@/components/sections/HomePage/TrustPhoneSection/TrustPhone";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
  const { language } = useLanguage();

  const translations = language === "en" ? en : pl;
  return (
    <>
      {/* <LanguageSwitcher /> */}
      <Header language={translations} />
      <HomeSection language={translations} />
      <SearchTagsSection language={translations} />
      <DistinguishedSpecialists language={translations} doctors={doctors} />
      <NearTerm language={translations} doctors={doctors} />
      <TrustPhone language={translations} />
      <Footer language={translations} />
    </>
  );
}
