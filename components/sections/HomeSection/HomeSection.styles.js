import styled from "styled-components";

export const StyledHomeSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
  background-color: #fff;
  padding: 0 6em;

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
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;

    .person {
      position: relative;
      width: 100%;
      height: 50%;
    }
  }
`;
