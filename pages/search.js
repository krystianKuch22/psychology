import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import { useLanguage } from "@/context/LanguageContext";
import pl from "../locales/pl.json";
import en from "../locales/en.json";
import Filters from "@/components/sections/SearchPage/FiltersSection/Filters";
import ResultSection from "@/components/sections/SearchPage/ResultSection/ResultSection";
import { useState } from "react";
import doctors from "/examples/doctors.json";

export default function SearchPage() {
  const { language } = useLanguage();

  const translations = language === "en" ? en : pl;

  const [selectedFilters, setSelectedFilters] = useState({})

  const changeSelectedFilters = (filters) => {
    setSelectedFilters(filters)
  }



  return (
    <>
      <Header language={translations} />
      <Filters language={translations} changeSelectedFilters={changeSelectedFilters}/>
      <ResultSection language={translations} filters={selectedFilters} doctors={doctors}/>
      <Footer language={translations} />
    </>
  );
}
