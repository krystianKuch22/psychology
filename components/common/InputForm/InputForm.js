import { StyledInputForm, StyledSelectForm } from "./InputForm.styles";

export default function InputForm({
  children,
  typeOf,
  spanText,
  type,
  isRequired,
  name,
  ariaLabel,
  ariaDescribe,
  autocomplete,
  onChange,
  value,
  minLength
}) {
  if (typeOf === "input") {
    return (
      <StyledInputForm>
        <input
          type={type}
          required={isRequired}
          name={name}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribe}
          autoComplete={autocomplete}
          onChange={onChange}
          value={value}
          minLength={minLength}
        />
        <span>{spanText}</span>
      </StyledInputForm>
    );
  } else if (typeOf === "select") {
    return (
      <StyledSelectForm>
        <select
          name={name}
          required={isRequired}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribe}
          value={value}
          onChange={onChange}
        >
          {children}
        </select>
        <span>{spanText}</span>
      </StyledSelectForm>
    );
  }
}
