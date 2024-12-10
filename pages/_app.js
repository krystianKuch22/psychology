import { LanguageProvider } from "@/context/LanguageContext";
import GlobalStyles from "@/styles/GlobalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <LanguageProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
}
