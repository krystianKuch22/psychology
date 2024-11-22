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
            <ButtonLink href="/search" asButton={false} bgc>
              {language.menuButton1}
            </ButtonLink>
            <ButtonLink href="/price-list" asButton={false} bgc>
              {language.menuButton2}
            </ButtonLink>
            <ButtonLink href="/aboutUs" asButton={false} bgc>
              {language.menuButton3}
            </ButtonLink>
            <ButtonLink href="/offer" asButton={false} bgc>
              {language.menuButton4}
            </ButtonLink>
          </div>

          <div>
            <ButtonLink href="/login" asButton={false} bgc textColor="green">
              {language.loginButton}
            </ButtonLink>
            <ButtonLink
              href="/forSpecialists"
              asButton={false}
              bgc="green"
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
