import Header from "@/components/layout/Header/Header";
import { useLanguage } from "@/context/LanguageContext";
import pl from "../locales/pl.json";
import en from "../locales/en.json";
import Footer from "@/components/layout/Footer/Footer";
import ChoosePlanSection from "@/components/sections/PriceListPage/ChoosePlanSection/ChoosePlanSection";
import FaqSection from "@/components/sections/PriceListPage/FaqSection/FaqSection";
import ContactSection from "@/components/sections/PriceListPage/ContactSection/ContactSection";

export default function PriceListPage() {
  const { language } = useLanguage();

  const translations = language === "en" ? en : pl;

  return (
    <>
      <Header language={translations} />
      <ChoosePlanSection language={translations}/>
      <FaqSection language={translations}/>
      <ContactSection language={translations}/>
      <Footer language={translations}/>
    </>
  );
}
