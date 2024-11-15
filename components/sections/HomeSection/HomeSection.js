import InputBasic from "@/components/InputBasic/InputBasic";
import { StyledHomeSection } from "./HomeSection.styles";
import ButtonLink from "@/components/common/ButtonLink/ButtonLink";
import Image from "next/image";

export default function HomeSection() {
  return (
    <StyledHomeSection>
      <div className="homeSectionSearch">
        <h1>Znajdź specjalistę i zadbaj o siebie</h1>
        <p>
          Szukaj wśród wielu ekspertów z poszczególnych dziedzin i
          specjalizacji.
        </p>
        <div>
          <InputBasic /> <InputBasic />
          <ButtonLink textColor="white">szukaj</ButtonLink>
        </div>
        <ButtonLink second textColor="green">
          wyszukiwanie zaawansowane
        </ButtonLink>
      </div>
      <div className="personDiv">
        <div className="person">
          <Image src="/svg/person1.svg" layout="fill" objectFit="contain" />
        </div>
        <div className="person">
          <Image src="/svg/person2.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
    </StyledHomeSection>
  );
}
