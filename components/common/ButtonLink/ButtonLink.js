import { StyledButton, StyledLink } from "./ButtonLink.styles";

export default function ButtonLink({
  children,
  className,
  href,
  asButton = true,
  backgroundColor,
  textColor,
  name,
  value,
  onClick
}) {
  if (asButton)
    return (
      <StyledButton $backgroundColor={backgroundColor} $textColor={textColor} name={name} value={value} onClick={onClick}>
        {children}
      </StyledButton>
    );
  return (
    <StyledLink href={href} $backgroundColor={backgroundColor} $textColor={textColor} className={`a ${className}`} passHref>
      {children}
    </StyledLink>
  );
}
