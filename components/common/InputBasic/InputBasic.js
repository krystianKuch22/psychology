import { StyledInputBasic } from "./InputBasic.styles";

export default function InputBasic({
  type,
  placeholder,
  name,
  value,
  id,
  isRequired,
  ariaLabel,
  ariaDescribe,
  autocomplete,
  minlength,
  maxlength,
  onChange
}) {
  return (
    <StyledInputBasic
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      id={id}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribe}
      required={isRequired}
      autoComplete={autocomplete}
      minLength={minlength}
      maxlength={maxlength}
      onChange={onChange}
    ></StyledInputBasic>
  );
}
