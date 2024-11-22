import styled from "styled-components";

export const StyledTrustPhone = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  height: 80vh;
  background-color: #fff;

  .imgBox {
    position: relative;
    width: 10em;
    height: 10em;
    margin-bottom: 3em;
  }

  h2 {
    font-size: 2.5rem;
  }

  p {
    width: 40vh;
    text-align: center;
    font-size: 0.8rem;
    color: #3b3663;
  }

  .numberBtnText {
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
