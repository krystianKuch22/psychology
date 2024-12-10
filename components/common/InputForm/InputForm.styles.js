import styled from "styled-components";

export const StyledInputForm = styled.label`
  position: relative;

  input {
    width: 100%;
    height: 3em;
    padding-top: 1em;
    padding-left: 0.4em;
    text-align: left;
    border-radius: 8px;
    border-width: 1px;
    border-color: var(--input-border-color);
    
  }
  span {
    position: absolute;
    left: 0.8em;
    top: 0.6em;
    font-size: 0.6rem;
    color: var(--input-text-span-color);
  }
`;

export const StyledSelectForm = styled.label`
  position: relative;

  select {
    position: relative;
    width: 100%;
    height: 3em;
    padding-top: 1.2em;
    padding-left: 0.4em;
    text-align: left;
    padding: 0.8em 0.2em 0 0.2em;
    border-radius: 0.5em;
    border-color: var(--input-border-color);
  }

  span {
    position: absolute;
    left: 0.8em;
    top: 0.6em;
    font-size: 0.6rem;
    color: var(--input-text-span-color);
  }
`;
