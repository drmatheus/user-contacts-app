import { StyledButton } from "./style";

interface IPropsButton {
  text: string;
  type: "submit" | "button" | "reset";
  disabled: boolean;
}

export const Button = ({ text, type, disabled }: IPropsButton) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      <span>{text}</span>
    </StyledButton>
  );
};
