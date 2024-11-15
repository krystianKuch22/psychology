import InputBasic from "@/components/common/InputBasic/InputBasic";
import { StyledHomeSection } from "./HomeSection.styles";
import ButtonLink from "@/components/common/ButtonLink/ButtonLink";
import Image from "next/image";
import Wrapper from "@/components/layout/Wrapper/Wrapper";
import CenterFlexRow from "@/components/layout/CenterFlexRow/CenterFlexRow";
import SearchIcon from "@/components/common/Icons/SearchIcon";

export default function HomeSection() {
  return (
    <StyledHomeSection>
      <Wrapper>
        <CenterFlexRow>
          <div className="homeSectionSearch">
            <h1>Znajdź specjalistę i zadbaj o siebie</h1>
            <p>
              Szukaj wśród wielu ekspertów z poszczególnych dziedzin i
              specjalizacji.
            </p>
            <CenterFlexRow>
              <div className="inputsBox">
                <InputBasic placeholder="Szukaj specjalisty" />{" "}
                <InputBasic placeholder="Miasto lub dzielnica" />
                <ButtonLink textColor="white">szukaj</ButtonLink>
              </div>
            </CenterFlexRow>
            <ButtonLink second textColor="green">
              <div className="searchBtn">
                <SearchIcon /> wyszukiwanie zaawansowane
              </div>
            </ButtonLink>
          </div>
          <div className="personDiv">
            <div className="person">
              <Image src="/svg/person1.svg" layout="fill" objectFit="contain" />
            </div>
            <div className="person">
              <Image src="/svg/person2.svg" layout="fill" objectFit="contain" />
            </div>
            <div className="deco deco-up">
              <Image src="/png/vector1.png" layout="fill" objectFit="contain" />
            </div>
            <div className="deco deco-down">
              <Image src="/png/vector2.png" layout="fill" objectFit="contain" />
              <div></div>
            </div>
          </div>
        </CenterFlexRow>
      </Wrapper>
    </StyledHomeSection>
  );
}
