import { StyledAlert } from "./style";

interface IPropsAlert {
  text: string;
}

export const Alert = ({ text }: IPropsAlert) => {
  return (
    <StyledAlert>
      <p>{text}</p>
    </StyledAlert>
  );
};
