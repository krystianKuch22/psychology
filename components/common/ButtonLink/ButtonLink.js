import { StyledButton, StyledLink } from "./ButtonLink.styles";

export default function ButtonLink({
  children,
  href,
  asButton = true,
  second,
  textColor,
}) {
  if (asButton)
    return (
      <StyledButton $second={second} $textColor={textColor}>
        {children}
      </StyledButton>
    );
  return (
    <StyledLink href={href} $second={second} $textColor={textColor} passHref>
      {children}
    </StyledLink>
  );
}
