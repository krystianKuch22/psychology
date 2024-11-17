import styled from "styled-components";

export const StyledSearchTagsSection = styled.section`
  display: flex;
  align-items: center;
  height: 18vh;
  background-color: #f2f3ff;

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
      color: #454545;
    }
  }

  a {
    padding: 0.5em 1em;
    background-color: #fff;
  }
`;
