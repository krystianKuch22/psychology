import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: black;
  color: #fff;
  height: 30vh;

  .footerBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;
    padding-top: 2em;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.8rem;
  }

  .footerLinksBox {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12em;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
    }

    h3 {
      margin-bottom: 0.5em;
      color: #bbffe6;
    }
    div:first-of-type h3:first-child {
      color: var(--primary-green-color);
    }

    .socialBox {
      display: flex;
      flex-direction: row;
      gap: 1em;
      margin-top: 1em;
    }
  }
  .copyrightSpan {
    font-size: 0.7rem;
  }
`;
