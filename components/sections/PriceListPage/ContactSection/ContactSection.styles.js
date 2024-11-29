import styled from "styled-components";

export const StyledContactSection = styled.section`
  padding: 3em 0;
  background-color: var(--primary-background-color);
  .contactBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    h3 {
      font-size: 2.5rem;
    }
    span {
      font-size: 0.9rem;
    }

    a {
      color: var(--primary-green-color);
    }
  }
`;
