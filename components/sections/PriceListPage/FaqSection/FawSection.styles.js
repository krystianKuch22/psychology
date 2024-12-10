import styled from "styled-components";

export const StyledFaqSection = styled.section`
  padding: 3em 0;
  background-color: var(--background-section-3-color);

  .allQuestionsBox {
    display: flex;
    flex-direction: column;
    gap: 1em;

    h2 {
      margin-bottom: 1em;
    }
  }

  .decoline {
    width: 100%;
    height: 1px;
    background-color: var(--decoline-plan-color);
  }

  .questionBox {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
`;
