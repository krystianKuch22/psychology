import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import { useLanguage } from "@/context/LanguageContext";
import pl from "../locales/pl.json";
import en from "../locales/en.json";
import Filters from "@/components/sections/SearchPage/FiltersSection/Filters";

export default function SearchPage() {
  const { language } = useLanguage();

  const translations = language === "en" ? en : pl;
  return (
    <>
      <Header language={translations} />
      <Filters language={translations}/>
      <Footer language={translations} />
    </>
  );
}
