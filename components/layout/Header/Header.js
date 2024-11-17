import { StyledHeader } from "./Header.styles";
import ButtonLink from "@/components/common/ButtonLink/ButtonLink";
import Wrapper from "../Wrapper/Wrapper";
import CenterFlexRow from "../CenterFlexRow/CenterFlexRow";

export default function Header({ language }) {
  return (
    <StyledHeader>
      <Wrapper>
        <CenterFlexRow>
          <h2>
            <b>{language.mainTitle}</b>
          </h2>

          <div>
            <ButtonLink href="/search" asButton={false} second>
              {language.menuButton1}
            </ButtonLink>
            <ButtonLink href="/price-list" asButton={false} second>
              {language.menuButton2}
            </ButtonLink>
            <ButtonLink href="/aboutUs" asButton={false} second>
              {language.menuButton3}
            </ButtonLink>
            <ButtonLink href="/offer" asButton={false} second>
              {language.menuButton4}
            </ButtonLink>
          </div>

          <div>
            <ButtonLink href="/login" asButton={false} second textColor="green">
              {language.loginButton}
            </ButtonLink>
            <ButtonLink
              href="/forSpecialists"
              asButton={false}
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
