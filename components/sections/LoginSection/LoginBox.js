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
          <label className="inputBox">
            <InputBasic
              type="email"
              isRequired={true}
              name="email"
              ariaLabel={language.loginBoxEmailInput}
              ariaDescribe="loginUsername"
              autocomplete="on"
              onChange={handleInput}
            />
            {/* Dodać kontrolowanie stanu inputów!!! */}
            <span>{language.loginBoxEmailInput}</span>
          </label>
          <label className="inputBox">
            <InputBasic
              type="password"
              isRequired={true}
              name="password"
              ariaLabel={language.loginBoxPasswordInput}
              ariaDescribe="password"
              autocomplete="on"
              minlength="8"
              onChange={handleInput}
            />
            <span>{language.loginBoxPasswordInput}</span>
          </label>
          <div className="passwordReminderBox">
            <ButtonLink href="/register" textColor="green" asButton={false}>
              {language.loginBoxPasswordReminderBtn}
            </ButtonLink>
          </div>

          <ButtonLink href="/" bgc="green" textColor="white" asButton={false}>
            {language.loginBoxLoginBtn}
          </ButtonLink>
        </form>
        <span className="anotherLogins">{language.loginBoxAnotherLogins}</span>
        <div className="socialBox">
          <Link href="/">
            <FbIcon />
          </Link>
          <Link href="/">
            <AppleIcon />
          </Link>
          <Link href="/">
            <LinkedInIcon />
          </Link>
          <Link href="/">
            <GoogleIcon />
          </Link>
        </div>
      </div>
    </StyledLoginBox>
  );
}
