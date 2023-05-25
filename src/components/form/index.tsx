import { ReactNode } from "react";
import { StyledForm } from "./style";

interface IPropsForm {
  children: ReactNode;
  onSubmit?: any;
}

export const Form = ({ children, onSubmit }: IPropsForm) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};
