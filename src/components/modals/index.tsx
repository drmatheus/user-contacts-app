import { FieldError, FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormContainer, HeaderModalStyled } from "./style";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/Md";
import { useContext } from "react";
import { ModalContext } from "../../contexts/UserContext";
import { Input, Select } from "../input";
import { Button } from "../button";

export const ContactFormEdit = ({ onCancel }: { onCancel: () => void }) => {
  const schemaContact = yup.object().shape({
    type: yup.string().required("Select the contact type"),
    contact: yup
      .string()
      .test("conditional-validation", "Invalid value", function (value) {
        const { type } = this.parent;
        if (type === "phone") {
          return /^\d{11}$/.test(value!);
        } else {
          return yup.string().email().isValidSync(value);
        }
      })
      .required("Enter a value"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaContact),
  });

  const { submitAttContact, currentContact } = useContext(ModalContext);

  return (
    <FormContainer>
      <HeaderModalStyled>Edit Contact</HeaderModalStyled>
      <form
        onSubmit={handleSubmit((data) => {
          submitAttContact(data);
        })}
      >
        <Select
          label="Type"
          register={register}
          error={errors.type as FieldError}
          defaultValue={currentContact?.type ? currentContact.type : ""}
        />
        <div>
          <Input
            label="Contact"
            register={register}
            type="text"
            error={errors.contact as FieldError}
            defaulfValue={currentContact?.contact ? currentContact.contact : ""}
          />
        </div>

        <Button disabled={false} text="Save" type="submit" />
        <Button
          disabled={false}
          text="Cancel"
          type="reset"
          onClick={onCancel}
        />
      </form>
    </FormContainer>
  );
};

export const DeleteContact = ({ onCancel }: { onCancel: () => void }) => {
  const { submitDeleteContact, currentContact } = useContext(ModalContext);

  return (
    <FormContainer>
      <HeaderModalStyled>Delete Contact</HeaderModalStyled>
      <p>Confirm delete?</p>
      <div>
        {currentContact.type == "phone" ? (
          <BsTelephone />
        ) : (
          <MdOutlineMailOutline />
        )}
        <span>{currentContact.contact}</span>
      </div>
      <Button
        disabled={false}
        text="Delete"
        type="submit"
        onClick={() => {
          submitDeleteContact();
          onCancel();
        }}
      />
      <Button disabled={false} text="Cancel" type="reset" onClick={onCancel} />
    </FormContainer>
  );
};

export const ContactFormCreate = ({ onCancel }: { onCancel: () => void }) => {
  const schemaContact = yup.object().shape({
    type: yup.string().required("Select the contact type"),
    contact: yup
      .string()
      .test("conditional-validation", "Invalid value", function (value) {
        const { type } = this.parent;
        if (type === "phone") {
          return /^\d{11}$/.test(value!);
        } else {
          return yup.string().email().isValidSync(value);
        }
      })
      .required("Enter a value"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaContact),
  });

  const { submitNewContact } = useContext(ModalContext);

  return (
    <FormContainer>
      <HeaderModalStyled>New Contact</HeaderModalStyled>
      <form
        onSubmit={handleSubmit((data) => {
          submitNewContact(data);
        })}
      >
        <Select
          label="Type"
          register={register}
          error={errors.type as FieldError}
        />

        <Input
          type="text"
          label="Contact"
          register={register}
          error={errors.contact as FieldError}
        />
        <div>
          <Button disabled={false} text="Create" type="submit" />
          <Button
            disabled={false}
            text="Cancel"
            type="reset"
            onClick={onCancel}
          />
        </div>
      </form>
    </FormContainer>
  );
};

export const CustomerFormCreate = ({ onCancel }: { onCancel: () => void }) => {
  const schemaCustomer = yup.object().shape({
    name: yup.string().required("Customer name is required"),
    phone: yup
      .string()
      .required("Enter a phone number")
      .length(11, "Phone must have exactly 11 characters"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Customer email is required")
      .max(32, "Max characters is 32"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaCustomer),
  });

  const handleSubmition = (data: FieldValues) => {
    submitNewCustomer(data);
    onCancel();
  };

  const { submitNewCustomer } = useContext(ModalContext);

  return (
    <FormContainer>
      <HeaderModalStyled>New Customer</HeaderModalStyled>
      <form onSubmit={handleSubmit(handleSubmition)}>
        <Input
          type="text"
          register={register}
          label="Name"
          error={errors.name as FieldError}
        />
        <Input
          type="text"
          register={register}
          label="Email"
          error={errors.email as FieldError}
        />
        <Input
          type="text"
          register={register}
          label="Phone"
          error={errors.phone as FieldError}
        />
        <Button
          disabled={false}
          text="Cancel"
          type="reset"
          onClick={onCancel}
        />

        <Button disabled={false} text="Create" type="submit" />
      </form>
    </FormContainer>
  );
};

export const UserFormEdit = ({ onCancel }: { onCancel: () => void }) => {
  const userSchema = yup.object().shape({
    name: yup.string().max(20, "Name must contain a maximum of 20 characters"),
    password: yup.string().max(64),
    password_confirmation: yup.string().test({
      name: "password_confirmation",
      test: function (value) {
        const { password } = this.parent;
        if (password && value !== password) {
          throw new yup.ValidationError(
            "Password and password confirmation do not match"
          );
        }
        return true;
      },
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const handleSubmition = (data: FieldValues) => {
    Object.keys(data).forEach((key) => {
      if (!data[key]) {
        delete data[key];
      }
    });
    submitAttUser(data);
    onCancel();
  };

  const { submitAttUser } = useContext(ModalContext);

  return (
    <FormContainer>
      <HeaderModalStyled>Edite User</HeaderModalStyled>
      <form onSubmit={handleSubmit(handleSubmition)}>
        <Input
          type="text"
          register={register}
          label="Name"
          error={errors.name as FieldError}
        />
        <Input
          type="password"
          register={register}
          label="Password"
          error={errors.password as FieldError}
        />
        <Input
          type="password"
          register={register}
          label="Password Confirmation"
          error={errors.password_confirmation as FieldError}
        />
        <Button
          disabled={false}
          text="Cancel"
          type="reset"
          onClick={onCancel}
        />

        <Button disabled={false} text="Save" type="submit" />
      </form>
    </FormContainer>
  );
};

export const DeleteCustomer = ({ onCancel }: { onCancel: () => void }) => {
  const { submitDeleteCustomer, currentCustomer } = useContext(ModalContext);

  return (
    <FormContainer>
      <HeaderModalStyled>Delete Customer</HeaderModalStyled>
      <h2>Confirm delete?</h2>
      <h3>{currentCustomer.name}</h3>
      <Button
        disabled={false}
        text="Delete"
        type="submit"
        onClick={() => {
          submitDeleteCustomer();
          onCancel();
        }}
      />
      <Button disabled={false} text="Cancel" type="reset" onClick={onCancel} />
    </FormContainer>
  );
};
