import { useLanguage } from "@/context/LanguageContext";

//Component enabling switch languages

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => changeLanguage("en")} disabled={language === "en"}>
        English
      </button>
      <button onClick={() => changeLanguage("pl")} disabled={language === "pl"}>
        Polski
      </button>
    </div>
  );
}
