import React, { useEffect, useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  ErrorComponents,
  FormComponents,
  LoadingComponents,
  PreventComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import { register } from "../service/auth.service";
import useApi from "../hook/useApi";

const RegisterPage = () => {
  const nav = useNavigate();
  const { handleDealApi, loading, error, data } = useApi(register);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  useEffect(() => {
    if (data) {
      nav("/");
    }
  }, [data]);
  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleDealApi(formData);
    console.log(formData);
  };
  return (
    <PreventComponents fail={"/home"} check={localStorage.getItem("auth")}>
      <ContainerComponents>
        {loading ? (
          <LoadingComponents />
        ) : (
          <div className="center">
            <div className="w-2/6 h-auto">
              <h1 className="font-serif text-4xl mb-5 font-bold text-center capitalize">
                Register your email
              </h1>
              {error && <ErrorComponents>{error}</ErrorComponents>}
              <form className=" space-y-7 mt-5" onSubmit={handleSubmit}>
                <FormComponents
                  value={formData.name}
                  onChange={handleInputChange}
                  name={"name"}
                  type={"text"}
                  label={"Enter User Name"}
                />
                <FormComponents
                  value={formData.email}
                  onChange={handleInputChange}
                  name={"email"}
                  type={"email"}
                  label={"Enter Your Email"}
                  placeholder="example@gmail.com"
                />
                <FormComponents
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  name={"password"}
                  type={"password"}
                  label={"Password"}
                />
                <FormComponents
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  name={"password_confirmation"}
                  type={"password"}
                  label={"Confirm Your Password"}
                />
                <ButtonComponents
                  type="submit"
                  style={"select-none rounded-lg"}
                >
                  Register
                </ButtonComponents>
              </form>
              <p className="mt-5">
                If you have an account,{" "}
                <button
                  onClick={() => nav("/")}
                  className=" text-blue-400 underline"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        )}
      </ContainerComponents>
    </PreventComponents>
  );
};

export default RegisterPage;
