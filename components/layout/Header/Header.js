import Link from "next/link";
import { StyledHeader } from "./Header.styles";
import ButtonLink from "@/components/common/ButtonLink/ButtonLink";

export default function Header() {
  return (
    <StyledHeader>
      <h2>
        <b>Dobry Terapeuta</b>
      </h2>

      <div>
        <ButtonLink href="/search" asButton={false} second>
          znajdź specjalistę
        </ButtonLink>
        <ButtonLink href="/price-list" asButton={false} second>
          cennik
        </ButtonLink>
        <ButtonLink href="/aboutUs" asButton={false} second>
          o nas
        </ButtonLink>
        <ButtonLink href="/offer" asButton={false} second>
          oferta
        </ButtonLink>
      </div>

      <div>
        <ButtonLink href="/login" asButton={false} second textColor="green">
          zaloguj
        </ButtonLink>
        <ButtonLink href="/forSpecialists" asButton={false} textColor="white">
          dla specjalistów
        </ButtonLink>
      </div>
    </StyledHeader>
  );
}
