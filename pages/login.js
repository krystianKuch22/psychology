import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import { useLanguage } from "@/context/LanguageContext";
import pl from "../locales/pl.json";
import en from "../locales/en.json";
import LoginBox from "@/components/sections/LoginSection/LoginBox";

export default function Login() {
  const { language } = useLanguage();

  const translations = language === "en" ? en : pl;
  return (
    <>
      <Header language={translations} />
      <LoginBox language={translations}/>
      <Footer language={translations} />
    </>
  );
}
