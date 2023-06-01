import { yupResolver } from "@hookform/resolvers/yup";
import { FieldError, FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { MainDiv } from "../../App";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/API";

export const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const loginSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter your email"),

    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d).+$/,
        "Passwors must contains at least 1 number and 1 letter"
      ),
    password_confirmation: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password")], "Passwords don't match"),
    name: yup.string().required("Please enter your name").min(12),
  });

  const handleRegister = async (data: FieldValues): Promise<void> => {
    const register = toast.loading("Registring, await...", { autoClose: 3000 });
    try {
      setLoading(true);
      await api.post("users/", data);

      toast.update(register, {
        render: "Redirecting...",
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });
      navigate("/login");
    } catch (e: any) {
      console.log(e);
      toast.update(register, {
        render: e.response.data.message,
        type: "error",
        isLoading: false,
        autoClose: 1500,
      });
    }
    setTimeout(() => setLoading(false), 3000);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <MainDiv>
      <div>
        <h1>Register</h1>
        <Form onSubmit={handleSubmit(handleRegister)}>
          <Input
            label="Email"
            type="text"
            register={register}
            error={errors.email as FieldError}
          />
          <Input
            label="Name"
            type="text"
            register={register}
            error={errors.name as FieldError}
          />
          <Input
            label="Password"
            type="password"
            register={register}
            error={errors.password as FieldError}
          />
          <Input
            label="Password Confirmation"
            type="password"
            register={register}
            error={errors.password_confirmation as FieldError}
          />
          <Button type="submit" text="Register" disabled={loading} />
        </Form>
        <Form>
          <h4>Already have an account?</h4>
          <Link className="linkButton" to="/login">
            Login
          </Link>
        </Form>
      </div>
      <div>
        <img className="logo" src={logo} alt="Logo" />
      </div>
    </MainDiv>
  );
};

export default Register;
