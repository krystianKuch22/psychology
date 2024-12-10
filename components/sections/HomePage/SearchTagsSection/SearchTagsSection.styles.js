import styled from "styled-components";

export const StyledSearchTagsSection = styled.section`
  display: flex;
  align-items: center;
  height: 18vh;
  background-color: var( --background-section-1-color);

  .tagsFlex {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .tagsBox {
    display: flex;
    gap: 0.5em;

    a {
      border-radius: 8px;
      text-decoration: none;
      color: var(--tag-text-color);
    }
  }

  a {
    padding: 0.5em 1em;
    background-color: var(--tag-background-color);
  }
`;
