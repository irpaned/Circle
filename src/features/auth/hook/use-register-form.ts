import React from "react";
import { api } from "../../../libraries/api";
import { RegisterForm } from "../types/register-form";

import { RegisterSchema } from "../validators/register-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const useRegisterForm = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    try {
      const response = await api.post("/auth/register", data);

      const token = response.data.token;

      if (token) {
        localStorage.setItem("token", token);
      }
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
    handleSubmit,
    handleClick,
    show,
    setShow,
    errors,
    onSubmit,
  };
};
