import { FieldError } from "react-hook-form";
import { StyledInput } from "./style";

type TPInput = {
  label: string;
  type: string;
  error?: FieldError | undefined;
  register: any;
};

export function Input({ label, type, error, register }: TPInput) {
  return (
    <StyledInput>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        {...register(label.toLowerCase().replaceAll(" ", "_"))}
      />
      {error?.message && <span>{error.message}</span>}
    </StyledInput>
  );
}
