import { StyledHeader } from "./Header.styles";
import ButtonLink from "@/components/common/ButtonLink/ButtonLink";
import Wrapper from "../Wrapper/Wrapper";
import CenterFlexRow from "../CenterFlexRow/CenterFlexRow";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ language }) {
  const router = useRouter();

  const activePage = router.pathname;

  return (
    <StyledHeader>
      <Wrapper>
        <CenterFlexRow>
          <nav>
            <h2>
              <Link href="/">
                <b>{language.mainTitle}</b>
              </Link>
            </h2>

            <div>
              <ButtonLink
                href="/search"
                asButton={false}
                backgroundColor
                className={activePage === "/search" ? "active" : ""}
              >
                {language.menuButton1}
              </ButtonLink>
              <ButtonLink
                href="/priceList"
                asButton={false}
                backgroundColor
                className={activePage === "/priceList" ? "active" : ""}
              >
                {language.menuButton2}
              </ButtonLink>
              <ButtonLink
                href="/aboutUs"
                asButton={false}
                backgroundColor
                className={activePage === "/aboutUs" ? "active" : ""}
              >
                {language.menuButton3}
              </ButtonLink>
              <ButtonLink
                href="/offer"
                asButton={false}
                backgroundColor
                className={activePage === "/offer" ? "active" : ""}
              >
                {language.menuButton4}
              </ButtonLink>
            </div>
          </nav>

          <div>
            <ButtonLink
              href="/login"
              asButton={false}
              backgroundColor
              textColor="green"
            >
              {language.loginButton}
            </ButtonLink>
            <ButtonLink
              href="/user/doctor/register"
              asButton={false}
              backgroundColor="green"
              textColor="white"
            >
              {language.forSpecialistsButton}
            </ButtonLink>
          </div>
        </CenterFlexRow>
      </Wrapper>
    </StyledHeader>
  );
}
