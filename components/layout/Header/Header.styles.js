import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--primary-background-color);
  height: 10vh;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65%;

    h2 {
      display: flex;
      a {
        text-decoration: none;
        color: #000;
      }
    }
  }

  .active{
    color: var(--primary-green-color);
  }
`;
