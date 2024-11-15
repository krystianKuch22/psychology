import styled from "styled-components";

export const StyledHomeSection = styled.section`
  height: 60vh;
  background-color: #fff;

  .homeSectionSearch {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
    width: 50%;
    h1 {
      font-size: 3rem;
      padding-right: 0.5em;
    }
  }

  .personDiv {
    position: relative;
    display: flex;
    align-items: center;
    width: 50vw;
    height: 35em;

    .person {
      position: relative;
      width: 100%;
      height: 20vw;
    }
  }

  .inputsBox {
    display: flex;
    gap: 0.5em;
  }

  .searchBtn {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  button:has(div) {
    padding-left: 0;
  }

  .deco {
    position: absolute;
    width: 8vh;
    height: 4vh;
    left: 50%;
    transform: translateX(-50%);
  }

  .deco-up {
    top: 6em;
  }

  .deco-down {
    bottom: 8em;
  }
`;
