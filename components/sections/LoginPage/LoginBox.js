import InputBasic from "@/components/common/InputBasic/InputBasic";
import { StyledLoginBox } from "./LoginBox.styled";
import ButtonLink from "@/components/common/ButtonLink/ButtonLink";
import FbIcon from "@/components/common/Icons/FbIcon/FbIcon";
import AppleIcon from "@/components/common/Icons/AppleIcon/AppleIcon";
import LinkedInIcon from "@/components/common/Icons/LinkedInIcon/LinkedInIcon";
import GoogleIcon from "@/components/common/Icons/GoogleIcon/GoogleIcon";
import Wrapper from "@/components/layout/Wrapper/Wrapper";
import Link from "next/link";
import { useState } from "react";
import InputForm from "@/components/common/InputForm/InputForm";
import XIcon from "@/components/common/Icons/XIcon/XIcon";

export default function LoginBox({ language }) {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  return (
    <StyledLoginBox>
      <div className="loginBox">
        <form
          className="formBox"
          action="/api/login-form"
          method="POST"
          name="loginForm"
        >
          <h1>{language.loginBoxHeader}</h1>
          <span className="accountQuestion">
            {language.loginBoxAccountQuestion}
            <Link href="/register">{language.loginBoxBtnSignup}</Link>
          </span>
          <InputForm
            typeOf="input"
            spanText={language.loginBoxEmailInput}
            type="email"
            isRequired={true}
            name="email"
            ariaLabel={language.loginBoxEmailAriaLabel}
            ariaDescribe={language.loginBoxEmailAriaDescribe}
            autocomplete="on"
            onChange={handleInput}
          />
          <InputForm
            typeOf="input"
            spanText={language.loginBoxPasswordInput}
            type="password"
            isRequired={true}
            name="password"
            ariaLabel={language.loginBoxPasswordAriaLabel}
            ariaDescribe={language.loginBoxPasswordAriaDescribe}
            autocomplete="on"
            minlength="8"
            onChange={handleInput}
          />
          <div className="passwordReminderBox">
            <ButtonLink href="/register" textColor="green" asButton={false}>
              {language.loginBoxPasswordReminderBtn}
            </ButtonLink>
          </div>

          <ButtonLink
            href="/"
            backgroundColor="green"
            textColor="white"
            asButton={false}
          >
            {language.loginBoxLoginBtn}
          </ButtonLink>
        </form>
        <span className="anotherLogins">{language.loginBoxAnotherLogins}</span>
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
          <XIcon/>
          </Link>
        </div>
      </div>
    </StyledLoginBox>
  );
}
