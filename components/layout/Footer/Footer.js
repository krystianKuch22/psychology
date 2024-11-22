import ButtonLink from "@/components/common/ButtonLink/ButtonLink";
import { StyledFooter } from "./Footer.styles";
import Link from "next/link";
import Wrapper from "../Wrapper/Wrapper";

export default function Footer({ language }) {
  return (
    <StyledFooter>
      <Wrapper>
        <div className="footerBox">
          <div className="footerLinksBox">
            <div>
              <h3>{language.footerHeader1}</h3>
              <span>{language.footerUnderHeader}</span>
              <span>{language.footerNumber}</span>
              <span>{language.footerEmail}</span>
              <div className="socialBox">
                <Link href="/">{language.footerSocial1}</Link>
                <Link href="/">{language.footerSocial2}</Link>
                <Link href="/">{language.footerSocial3}</Link>
              </div>
            </div>
            <div>
              <h3>{language.footerHeader2}</h3>
              <Link href="/">{language.footerHeader2BtnMain}</Link>
              <Link href="/">{language.footerHeader2BtnFindSpecialist}</Link>
              <Link href="/">{language.footerHeader2BtnAboutUs}</Link>
              <Link href="/">{language.footerHeader2BtnLogin}</Link>
              <Link href="/">{language.footerHeader2BtnSignup}</Link>
            </div>
            <div>
              <h3>{language.footerHeader3}</h3>
              <Link href="/">{language.footerHeader3BtnMain}</Link>
              <Link href="/">{language.footerHeader3BtnPricelist}</Link>
              <Link href="/">{language.footerHeader3BtnOffer}</Link>
              <Link href="/">{language.footerHeader3BtnLogin}</Link>
              <Link href="/">{language.footerHeader3BtnSignup}</Link>
            </div>
            <div>
              <h3>{language.footerHeader4}</h3>
              <Link href="/">{language.footerHeader4BtnFAQ}</Link>
              <Link href="/">{language.footerHeader4BtnContact}</Link>
              <Link href="/">{language.footerHeader4BtnStatute}</Link>
              <Link href="/">{language.footerHeader4BtnPolicy}</Link>
              <Link href="/">{language.footerHeader4BtnSignup}</Link>
            </div>
          </div>
          <span className="copyrightSpan">
            dobryterapeuta.pl • 2024 • All copyright reserved
          </span>
        </div>
      </Wrapper>
    </StyledFooter>
  );
}
