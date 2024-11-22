import Link from "next/link";
import styled, { css } from "styled-components";

const buttonVariants = {
  white: {
    color: "#fff",
  },
  green: {
    color: "var(--primary-green-color)",
  },
};

const baseButtonStyle = css`
  padding: 1em 2em;
  background-color: ${({ $bgc }) =>
    $bgc === "white"
      ? "#fff"
      : $bgc === "green"
      ? "var(--primary-green-color)"
      : "transparent"};
  color: ${({ $textColor }) => buttonVariants[$textColor]?.color || "black"};
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #005bb5;
  }

  b {
    text-transform: none;
  }
`;

// Wspólne style bazowe
export const StyledLink = styled(Link)`
  ${baseButtonStyle}
`;

export const StyledButton = styled.button`
  ${baseButtonStyle}
`;
