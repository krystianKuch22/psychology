import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
  --primary-green-color: #0CBC7C
}

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;

    h2{
      font-size: 1.5rem;
    }
  }

  body {
    background-color: #bbb;
  }
`;

export default GlobalStyles;
