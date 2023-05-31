import { yupResolver } from "@hookform/resolvers/yup";
import { MainDiv } from "../../App";
import * as yup from "yup";
import { FieldError, FieldValues, useForm } from "react-hook-form";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Form } from "../../components/form";
import { api } from "../../services/API";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import Cookies from "js-cookie";

export const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const loginSchema = yup.object({
    password: yup.string().required("Please enter your password"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter your email"),
  });

  const navigate = useNavigate();

  const handleLogin = async (data: FieldValues): Promise<void> => {
    const login = toast.loading("Loggin, await...", { autoClose: 3000 });
    try {
      setLoading(true);
      const { data: token }: { data: { token: string } } = await api.post(
        "login/",
        data
      );

      Cookies.set("userContact@token", `Baerer ${token.token}`, { expires: 7 });

      toast.update(login, {
        render: "Redirecting...",
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });
      navigate("/home");
    } catch (e: any) {
      console.log(e);
      toast.update(login, {
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
      <ToastContainer autoClose={5000} />
      <div>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Input
            label="Email"
            type="text"
            register={register}
            error={errors.email as FieldError}
          />
          <Input
            label="Password"
            type="password"
            register={register}
            error={errors.password as FieldError}
          />
          <Button type="submit" text="Login" disabled={loading} />
        </Form>
        <Form>
          <h4>Not have an account yet?</h4>
          <Link className="linkButton" to="/register">
            Register
          </Link>
        </Form>
      </div>
      <div>
        <img className="logo" src={logo} alt="Logo" />
      </div>
    </MainDiv>
  );
};

export default Login;
