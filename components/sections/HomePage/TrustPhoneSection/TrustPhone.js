import Image from "next/image";
import { StyledTrustPhone } from "./TrustPhone.styles";
import ButtonLink from "@/components/common/ButtonLink/ButtonLink";
import PhoneIcon from "@/components/common/Icons/PhoneIcon/PhoneIcon";

export default function TrustPhone({ language }) {
  return (
    <StyledTrustPhone>
      <div className="imgBox">
        <Image
          src="/png/trustPhoneImg.png"
          alt="Image of the girl with some thoughts"
          fill
          style={{ objectFit: "contain" }}
          sizes="50%"
        />
      </div>
      <h2>{language.trustPhone}</h2>
      <p>{language.descriptionOfTrustPhone}</p>
      <ButtonLink backgroundColor="white" textColor="green">
        <span className="numberBtnText">
          <PhoneIcon />
          {language.numberOfTrustPhone}
        </span>
      </ButtonLink>
      <ButtonLink textColor="white" backgroundColor="green">{language.trustPhoneButton}</ButtonLink>
    </StyledTrustPhone>
  );
}
