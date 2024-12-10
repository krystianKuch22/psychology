import styled from "styled-components";

export const StyledChoosePlanSection = styled.section`
  background-color: var(--primary-background-color);
  padding-bottom: 4em;

  h1 {
    font-size: 2.5rem;
  }

  .allContentBox {
    display: flex;
    flex-direction: column;
    gap: 3em;

    .plansBox {
      display: flex;
      justify-content: space-between;

      .planBox {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        width: 25vw;

        span {
          font-size: 0.6em;
        }

        .priceInfoBox {
          display: flex;
          align-items: center;
          gap: 0.4em;

          h3 {
            font-size: 1.5rem;
          }

          span {
            font-size: 0.6rem;
            background-color: var(--plan-span-background-color);
            color: var(--plan-span-text-color);
            padding: 0.3em 0.6em;
            border-radius: 8px;
          }
        }

        .decoLine {
          width: 100%;
          height: 1px;
          background-color: var(--decoline-plan-color);
        }

        .featuresBox {
          list-style: none;

          li {
            display: flex;
            margin-bottom: 0.5em;
          }
        }

        button {
          width: 100%;
          border: 1px solid black;

          &:hover {
            background-color: #000;
            color: #fff;
          }
        }
      }
    }
  }

  .checked {
    &::before {
      content: url("/svg/checked.svg");
      margin-right: 0.3em;
    }
  }

  .unChecked {
    &::before {
      content: url("/svg/unChecked.svg");
      margin-right: 0.3em;
    }
  }
`;
