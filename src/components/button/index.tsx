import { StyledButton } from "./style";

interface IPropsButton {
  text: string;
  type: "submit" | "button" | "reset";
  disabled: boolean;
  onClick?: () => void;
}

export const Button = ({ text, type, disabled, onClick }: IPropsButton) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      <span>{text}</span>
    </StyledButton>
  );
};
