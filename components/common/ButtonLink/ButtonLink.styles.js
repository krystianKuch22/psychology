import Link from "next/link";
import styled, { css } from "styled-components";

const buttonVariants = {
    white: {
        color: '#fff',
    },
    green: {
        color: 'var(--primary-green-color)',
    }

};

const baseButtonStyle = css`
  padding: 10px 20px;
  background-color: ${({$second}) => ($second ? '#fff' : 'var(--primary-green-color)')};
  color: ${({$textColor}) => buttonVariants[$textColor]?.color || 'black'};
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #005bb5;
  }

  b{
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
