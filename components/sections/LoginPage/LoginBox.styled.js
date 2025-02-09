import styled from "styled-components";

export const StyledLoginBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 70vh;

  .loginBox {
    display: flex;
    flex-direction: column;
    gap: 1em;
    text-align: center;
    width: 30em;

    .formBox {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    h1 {
      font-size: 2rem;
    }

    .accountQuestion {
      a {
        margin-left: 0.3em;
        color: #000;
        text-decoration: none;
        font-weight: bold;
        font-size: 0.8rem;
      }
    }

    .passwordReminderBox {
      text-align: right;
      a {
        padding: 0;
      }
    }

    .anotherLogins {
      text-transform: uppercase;
      color: var(--primary-green-color);
    }

    .socialBox {
      display: flex;
      justify-content: center;
      gap: 1em;

      svg {
      }
    }
  }
`;
