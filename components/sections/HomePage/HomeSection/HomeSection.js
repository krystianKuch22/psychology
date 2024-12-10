import InputBasic from "@/components/common/InputBasic/InputBasic";
import { StyledHomeSection } from "./HomeSection.styles";
import ButtonLink from "@/components/common/ButtonLink/ButtonLink";
import Image from "next/image";
import Wrapper from "@/components/layout/Wrapper/Wrapper";
import CenterFlexRow from "@/components/layout/CenterFlexRow/CenterFlexRow";
import SearchIcon from "@/components/common/Icons/SearchIcon/SearchIcon";

export default function HomeSection({language}) {
  return (
    <StyledHomeSection>
      <Wrapper>
        <CenterFlexRow>
          <div className="homeSectionSearch">
            <h1>{language.homeSectionTitle}</h1>
            <p>
              {language.homeSectionParagraph}
            </p>
            <CenterFlexRow>
              <div className="inputsBox">
                <InputBasic placeholder={language.homeSectionInputPlaceholder1} />{" "}
                <InputBasic placeholder={language.homeSectionInputPlaceholder2} />
                <ButtonLink textColor="white" backgroundColor="green">{language.homeSectionButton}</ButtonLink>
              </div>
            </CenterFlexRow>
            <ButtonLink backgroundColor="white" textColor="green">
              <div className="searchBtn">
                <SearchIcon /> {language.homeSectionAdvanceButton}
              </div>
            </ButtonLink>
          </div>
          <div className="personDiv">
            <div className="person">
              <Image src="/svg/person1.svg" alt="Talking yellow person." fill style={{objectFit: "contain"}} sizes="50%"/>
            </div>
            <div className="person">
              <Image src="/svg/person2.svg" alt="Talking blue person." fill style={{objectFit: "contain"}} sizes="50%"/>
            </div>
            <div className="deco deco-up">
              <Image src="/png/vector1.png" alt="Deco twist." fill style={{objectFit: "contain"}} sizes="100%"/>
            </div>
            <div className="deco deco-down">
              <Image src="/png/vector2.png" alt="Deco twist." fill style={{objectFit: "contain"}} sizes="100%"/>
              
            </div>
          </div>
        </CenterFlexRow>
      </Wrapper>
    </StyledHomeSection>
  );
}
