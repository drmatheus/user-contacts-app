import { FieldError } from "react-hook-form";
import { StyledInput } from "./style";

type TPInput = {
  label: string;
  type: string;
  error?: FieldError | undefined;
  register: any;
  defaulfValue?: string;
};

export function Input({ label, type, error, register, defaulfValue }: TPInput) {
  return (
    <StyledInput>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        defaultValue={defaulfValue}
        {...register(label.toLowerCase().replaceAll(" ", "_"))}
      />
      {error?.message && <span>{error.message}</span>}
    </StyledInput>
  );
}

type TPSelect = {
  label: string;
  error?: FieldError | undefined;
  register: any;
  defaultValue?: string;
};

export function Select({ label, error, register, defaultValue }: TPSelect) {
  return (
    <StyledInput>
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        defaultValue={defaultValue}
        {...register(label.toLowerCase().replaceAll(" ", "_"))}
      >
        <option value="">Select an option...</option>
        <option value="phone">Phone</option>
        <option value="email">Email</option>
      </select>
      {error?.message && <span>{error.message}</span>}
    </StyledInput>
  );
}
