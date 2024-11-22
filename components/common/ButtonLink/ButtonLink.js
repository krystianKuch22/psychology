import { StyledButton, StyledLink } from "./ButtonLink.styles";

export default function ButtonLink({
  children,
  href,
  asButton = true,
  bgc,
  textColor,
}) {
  if (asButton)
    return (
      <StyledButton $bgc={bgc} $textColor={textColor}>
        {children}
      </StyledButton>
    );
  return (
    <StyledLink href={href} $bgc={bgc} $textColor={textColor} passHref>
      {children}
    </StyledLink>
  );
}
