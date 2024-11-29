import Wrapper from "@/components/layout/Wrapper/Wrapper";
import { StyledFaqSection } from "./FawSection.styles";

export default function FaqSection({ language }) {
  return (
    <StyledFaqSection>
      <Wrapper>
        <div className="allQuestionsBox">
          <h2>Często zadawane pytania</h2>
          <div className="questionBox">
            <h3>Czy mogę zrezygnować z subskrypcji?</h3>
            <span>Oczywiście</span>
            <div className="decoline"></div>
          </div>
          <div className="questionBox">
            <h3>Czy mogę zrezygnować z subskrypcji?</h3>
            <span>Oczywiście</span>
            <div className="decoline"></div>
          </div>
          <div className="questionBox">
            <h3>Czy mogę zrezygnować z subskrypcji?</h3>
            <span>Oczywiście</span>
            <div className="decoline"></div>
          </div>
          <div className="questionBox">
            <h3>Czy mogę zrezygnować z subskrypcji?</h3>
            <span>Oczywiście</span>
            <div className="decoline"></div>
          </div>
          <div className="questionBox">
            <h3>Czy mogę zrezygnować z subskrypcji?</h3>
            <span>Oczywiście</span>
            <div className="decoline"></div>
          </div>
        </div>
      </Wrapper>
    </StyledFaqSection>
  );
}
