import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
  --primary-background-color: #fff;
  --primary-green-color: #0CBC7C;
  --input-border-color: #AEAEAE;
  --background-section-1-color: #F2F3FF;
  --background-section-2-color: #D9DCFE;
  --background-section-3-color: #F5F5F5;
  --background-section-register-why-worth-color: #F5F5F5;
  --background-footer-color: #000;
  --titles-footer-color: #BBFFE6;
  --distinguished-color: #BBFFE7;
  --star-color: #FFC825;
  --input-text-span-color: #777575;
  --secondary-text-color: #3B3663;
  --tag-background-color: #fff;
  --tag-text-color: #454545;
  --distinguished-star-color: #00744a;
  --doctor-category-text-color: #454545;
  --opinions-text-color: #aeaeae;
  --doctor-description-text-color: #454545;
  --decoline-color: #dddddd;
  --background-tag-doctor-card-color: #f2f3ff;
  --decoline-plan-color: #c4c4c4;
  --plan-span-background-color: #D3D4FF;
  --plan-span-text-color: #3B3663;

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
