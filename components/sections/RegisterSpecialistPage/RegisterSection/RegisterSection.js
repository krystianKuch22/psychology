import Wrapper from "@/components/layout/Wrapper/Wrapper";
import { StyledRegisterSection } from "./RegisterSection.styles";
import InputBasic from "@/components/common/InputBasic/InputBasic";
import ButtonLink from "@/components/common/ButtonLink/ButtonLink";
import GoogleIcon from "@/components/common/Icons/GoogleIcon/GoogleIcon";
import FbIcon from "@/components/common/Icons/FbIcon/FbIcon";
import LinkedInIcon from "@/components/common/Icons/LinkedInIcon/LinkedInIcon";
import AppleIcon from "@/components/common/Icons/AppleIcon/AppleIcon";
import { useState } from "react";
import InputForm from "@/components/common/InputForm/InputForm";
import XIcon from "@/components/common/Icons/XIcon/XIcon";
import Link from "next/link";

export default function RegisterSection({ language }) {
  const [formRegisterData, setFormRegisterData] = useState({
    email: "",
    nameAndLastname: "",
    specialization: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormRegisterData({
      ...formRegisterData,
      [name]: value,
    });
  };
  return (
    <StyledRegisterSection>
      <Wrapper>
        <div className="box">
          <div className="registerBox">
            <h1>{language.registerSpecialistBoxHeader}</h1>
            <p>{language.registerSpecialistBoxParagraph}</p>
            <form className="formBox">
              <InputForm
                typeOf="input"
                spanText={language.registerSpecialistFormEmailSpan}
                type="email"
                isRequired={true}
                name="email"
                ariaLabel={language.loginBoxEmailLabel}
                ariaDescribe={language.registerSpecialistFormEmailAriaDescribe}
                autocomplete="on"
                onChange={handleInput}
              />
              <InputForm
                typeOf="input"
                spanText={language.registerSpecialistFormFirstLastnameSpan}
                type="text"
                isRequired={true}
                name="nameAndLastname"
                ariaLabel={language.loginBoxNameLastnameLabel}
                ariaDescribe={
                  language.registerSpecialistFormLastnameAriaDescribe
                }
                autocomplete="on"
                onChange={handleInput}
              />
              <InputForm
                typeOf="select"
                spanText={language.registerSpecialistFormSpecializationSpan}
                onChange={handleInput}
                name="specialization"
                ariaLabel={language.registerSpecialistFormSpecializationLabel}
                ariaDescribe={
                  language.registerSpecialistFormSpecializationAriaDescribe
                }
                value={formRegisterData.specialization}
              >
                <option>Psychiatra</option>
                <option>Terapeuta</option>

                {/* Add dynamic options or static ? */}
              </InputForm>
              <ButtonLink
                href="/"
                asButton={false}
                name="specialistRegisterForm"
                backgroundColor="green"
                textColor="white"
              >
                {language.registerSpecialistFormBtn}
              </ButtonLink>
            </form>
            <span className="logToHelp">
              {language.registerSpecialistRegisterHelpSpan}
            </span>
            <div className="socialBox">
              <Link href="/">
                <GoogleIcon />
              </Link>
              <Link href="/">
                <FbIcon />
              </Link>
              <Link href="/">
                <LinkedInIcon />
              </Link>
              <Link href="/">
                <AppleIcon />
              </Link>
              <Link href="/">
                <XIcon />
              </Link>
            </div>
          </div>
          <div className="whyWorthBox">
            <h2>{language.registerSpecialistWhyWorthHeader}</h2>
            <ul className="lsitBox">
              <li>{language.registerSpecialistWhyWorthList1}</li>
              <li>{language.registerSpecialistWhyWorthList2}</li>
              <li>{language.registerSpecialistWhyWorthList3}</li>
              <li>{language.registerSpecialistWhyWorthList4}</li>
              <li>{language.registerSpecialistWhyWorthList5}</li>
              <li>{language.registerSpecialistWhyWorthList6}</li>
              <li>{language.registerSpecialistWhyWorthList7}</li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </StyledRegisterSection>
  );
}
