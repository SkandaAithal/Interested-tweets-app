import React, { FormEvent, useState } from "react";
import { HiExclamationCircle } from "react-icons/hi";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import TwitterButtonSignIn from "./TwitterButtonSignIn";
import { validation } from "@/utilities/validation";
import {
  FormErrorsType,
  UserAuthenticationProps,
  UserInputsTypes,
} from "@/types/authentication";
import { useGlobalDispatch } from "@/context/globalState";

export default function UserAuthentication({
  type,
  isLogin,
  setIsLogin,
}: UserAuthenticationProps) {
  const initialFormErrors: FormErrorsType = {
    nameError: "",
    emailError: "",
    passwordError: "",
  };
  const dispatch = useGlobalDispatch();
  const [formErrors, setFormErrors] =
    useState<FormErrorsType>(initialFormErrors);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [userInputs, setUserInputs] = useState<UserInputsTypes>({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedErrors = validation(type, userInputs, formErrors);
    setFormErrors(updatedErrors);

    if (Object.values(updatedErrors).every((ele) => ele === "")) {
      if (isLogin) {
        try {
          delete userInputs.name;

          const response = await fetch("http://localhost:3001/users/login", {
            method: "POST",
            body: JSON.stringify(userInputs),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const data = await response.json();
          console.log(data);
          dispatch({ type: "LOGIN" });
          dispatch({ type: "NOTIFY", payload: data.message });
        } catch (err) {}
      } else {
        try {
          const response = await fetch("http://localhost:3001/users/register", {
            method: "POST",
            body: JSON.stringify(userInputs),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const data = await response.json();
          console.log(data);
          dispatch({ type: "NOTIFY", payload: data.message });
          setUserInputs({ name: "", email: "", password: "" });
          setIsLogin(true);
        } catch (err) {
          console.log(err);
        }
      }
      setFormErrors(initialFormErrors);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-4">User {type}</h1>
      <div className="bg-white shadow-lg rounded px-4 py-8 w-full max-w-md">
        {isLogin && (
          <>
            <TwitterButtonSignIn />
            <div className="flex items-center justify-center my-4 gap-4">
              <div className="flex-1 h-px bg-gray-500"></div>
              <h1 className="text-gray-600">OR</h1>
              <div className="flex-1 h-px bg-gray-500"></div>
            </div>
          </>
        )}
        <form onSubmit={formSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                User Name:
              </label>
              <input
                className="shadow-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                type="name"
                name="name"
                id="name"
                value={userInputs.name}
                onChange={inputHandler}
                placeholder="name"
              />
              {formErrors.nameError && (
                <div className="flex items-center gap-1 text-red-500 m-1">
                  <HiExclamationCircle className="text-red-500" />
                  <p className="text-red-500">{formErrors.nameError}</p>
                </div>
              )}
            </div>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              type="text"
              name="email"
              id="email"
              value={userInputs.email}
              onChange={inputHandler}
              placeholder="Email"
            />
            {formErrors.emailError && (
              <div className="flex items-center gap-1 text-red-500 m-1">
                <HiExclamationCircle className="text-red-500" />
                <p className="text-red-500">{formErrors.emailError}</p>
              </div>
            )}
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <div className="relative">
              <input
                className="shadow-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 pr-10"
                type={showPassword ? "password" : "text"}
                name="password"
                id="password"
                value={userInputs.password}
                onChange={inputHandler}
                placeholder="Password"
              />
              {showPassword ? (
                <IoEyeOutline
                  className="absolute top-0 right-0 mt-3 mr-3 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <IoEyeOffOutline
                  className="absolute top-0 right-0 mt-3 mr-3 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
              {formErrors.passwordError && (
                <div className="flex items-center gap-1 text-red-500 m-1">
                  <HiExclamationCircle className="text-red-500" />
                  <p className="text-red-500">{formErrors.passwordError}</p>
                </div>
              )}
            </div>
          </div>
          <input
            className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value={type}
          />
          {isLogin && (
            <p className="text-sm text-gray-600 my-3">
              Create your account. &nbsp;
              <span
                onClick={() => {
                  setUserInputs({ name: "", email: "", password: "" });
                  setIsLogin(false);
                  setFormErrors(initialFormErrors);
                }}
                className="text-blue-500 underline cursor-pointer"
              >
                SignUp
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
