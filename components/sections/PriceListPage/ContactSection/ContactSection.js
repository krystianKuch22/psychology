import Wrapper from "@/components/layout/Wrapper/Wrapper";
import { StyledContactSection } from "./ContactSection.styles";
import ButtonLink from "@/components/common/ButtonLink/ButtonLink";

export default function ContactSection({ language }) {
  return (
    <StyledContactSection>
      <Wrapper>
        <div className="contactBox">
          <h3>Masz Pytania?</h3>
          <span>Skontaktuj się z nami. Z chęcią pomożemy.</span>
          <a>kontakt@dobryterapeuta.pl</a>
          <ButtonLink backgroundColor="green" textColor="white">
            kontakt
          </ButtonLink>
        </div>
      </Wrapper>
    </StyledContactSection>
  );
}
