import Header from "@/components/layout/Header/Header";
import { useLanguage } from "@/context/LanguageContext";
import pl from "/locales/pl.json";
import en from "/locales/en.json";
import Footer from "@/components/layout/Footer/Footer";
import RegisterSection from "@/components/sections/RegisterSpecialistPage/RegisterSection/RegisterSection";


export default function SpecialistRegisterPage() {
    const { language } = useLanguage();

    const translations = language === "en" ? en : pl;
  return <>
  <Header language={translations}/>
  <RegisterSection language={translations}/>
  <Footer language={translations}/>
  </>;
}
