import styled from "styled-components";

export const StyledRegisterSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background-color: #fff;

  .box {
    display: flex;
    gap: 3em;
    width: 100%;

    h1 {
      font-size: 3rem;
    }
  }

  .registerBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    width: 40%;
    text-align: left;

    p {
      font-size: 1.1rem;
    }

    .formBox {
      display: flex;
      flex-direction: column;
      gap: 1em;
      width: 100%;
    }

    .logToHelp {
      color: #0cbc7c;
    }

    .socialBox {
      display: flex;
      gap: 2em;
    }
  }

  .whyWorthBox {
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: #f5f5f5;
    width: 60%;
    padding-top: 2em;
    padding-left: 3em;

    ul {
      margin-left: 1em;
      list-style: none;
      li {
        display: flex;
        align-items: center;
        margin-bottom: 0.7em;
      }
      li::before {
        content: url("/svg/cross.svg");
        margin-right: 0.8em;
      }
    }
  }
`;
