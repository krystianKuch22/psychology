import { useLanguage } from "@/context/LanguageContext";
import pl from "../locales/pl.json";
import en from "../locales/en.json";
import LanguageSwitcher from "@/components/specific/LanguageSwitcher/LanguageSwitcher";
import Header from "@/components/layout/Header/Header";
import HomeSection from "@/components/sections/HomeSection/HomeSection";
import SearchTagsSection from "@/components/sections/SearchTagsSection/SearchTagsSection";
import DistinguishedSpecialists from "@/components/sections/DistinguishedSpecialistsSection/DistinguishedSpecialists";
import doctors from "/examples/doctors.json"


export default function Home() {
  const { language } = useLanguage();

  const translations = language === "en" ? en : pl;
  return (
    <>
      <LanguageSwitcher />
      <Header language={translations} />
      <HomeSection language={translations} />
      <SearchTagsSection language={translations} />
      <DistinguishedSpecialists language={translations} doctors={doctors} />
    </>
  );
}
