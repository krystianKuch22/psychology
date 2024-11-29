import Wrapper from "@/components/layout/Wrapper/Wrapper";
import { StyledChoosePlanSection } from "./ChoosePlanSection.styles";
import ButtonLink from "@/components/common/ButtonLink/ButtonLink";
import IconBegginer from "@/components/common/Icons/PlansIcons/IconBegginer";
import { useState } from "react";
import IconSpecialist from "@/components/common/Icons/PlansIcons/IconSpecialist";
import IconTeam from "@/components/common/Icons/PlansIcons/IconTeam";

export default function ChoosePlanSection({ language }) {
  const [activePlan, setActivePlan] = useState("");

  const handlePlans = (e) => {
    setActivePlan(e.target.value);
  };

  return (
    <StyledChoosePlanSection>
      <Wrapper>
        <div className="allContentBox">
          <h1>{language.pricelistMainHeader}</h1>
          <div className="plansBox">
            <div className="planBox">
              <IconBegginer />
              <h2>{language.plan1Header}</h2>
              <div className="priceInfoBox">
                <h3>0 PLN</h3>
                <span>{language.plan1SubscriptionInfo}</span>
              </div>
              <span>{language.planFrequentlyPaying}</span>
              <div className="decoLine"></div>
              <h3>{language.plan1DescriptionHeader}</h3>
              <ul className="featuresBox">
                <li className="checked">{language.plan1List1}</li>
                <li className="checked">{language.plan1List2}</li>
                <li className="checked">{language.plan1List3}</li>
                <li className="unChecked">{language.plan1List4}</li>
                <li className="unChecked">{language.plan1List5}</li>
              </ul>
              <ButtonLink value="begginer" onClick={handlePlans}>
                {language.planButtonText}
              </ButtonLink>
            </div>
            <div className="planBox">
              <IconSpecialist />
              <h2>{language.plan2Header}</h2>
              <div className="priceInfoBox">
                <h3>0 PLN</h3>
                <span>{language.plan2SubscriptionInfo}</span>
              </div>
              <span>{language.planFrequentlyPaying}</span>
              <div className="decoLine"></div>
              <h3>{language.plan2DescriptionHeader}</h3>
              <ul className="featuresBox">
                <li className="checked">{language.plan2List1}</li>
                <li className="checked">{language.plan2List2}</li>
                <li className="checked">{language.plan2List3}</li>
                <li className="checked">{language.plan2List4}</li>
                <li className="checked">{language.plan2List5}</li>
              </ul>
              <ButtonLink value="specialist" onClick={handlePlans}>
                {language.planButtonText}
              </ButtonLink>
            </div>
            <div className="planBox">
              <IconTeam />
              <h2>{language.plan3Header}</h2>
              <div className="priceInfoBox">
                <h3>0 PLN</h3>
                <span>{language.plan3SubscriptionInfo}</span>
              </div>
              <span>{language.planFrequentlyPaying}</span>
              <div className="decoLine"></div>
              <h3>{language.plan3DescriptionHeader}</h3>
              <ul className="featuresBox">
                <li className="checked">{language.plan3List1}</li>
                <li className="checked">{language.plan3List1}</li>
                <li className="checked">{language.plan3List1}</li>
                <li className="checked">{language.plan3List1}</li>
                <li className="checked">{language.plan3List1}</li>
              </ul>
              <ButtonLink value="team" onClick={handlePlans}>
                {language.planButtonText}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Wrapper>
    </StyledChoosePlanSection>
  );
}
