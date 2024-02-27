import React, { FormEvent, useState } from "react";
import UserAuthentication from "./UserAuthentication";
import { validation } from "@/utilities/validation";
import { FormErrorsType } from "@/types/authentication";
import { useGlobalState } from "@/context/globalState";

export default function Authentication() {
  const [formErrors, setFormErrors] = useState<FormErrorsType>({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const { isLoggedin } = useGlobalState();

  const [isLogin, setIsLogin] = useState<boolean>(true);

  const loginSubmit = async (
    e: FormEvent<HTMLFormElement>,
    type: string,
    inputs: { username?: string; email: string; password: string },
    errors: FormErrorsType
  ) => {
    e.preventDefault();
    const updatedErrors = validation(type, inputs, errors);
    setFormErrors(updatedErrors);

    // Check if there are no errors
    if (Object.values(updatedErrors).length === 0) {
      try {
      } catch (error) {}
    }
    return;
  };

  return (
    <div>
      {isLogin ? (
        <>
          <UserAuthentication
            type="Login"
            isLogin={true}
            formErrors={formErrors}
            formSubmit={loginSubmit}
            setIsLogin={setIsLogin}
            setFormErrors={setFormErrors}
          />
        </>
      ) : (
        <UserAuthentication
          type="SignUp"
          isLogin={false}
          formErrors={formErrors}
          formSubmit={loginSubmit}
          setIsLogin={setIsLogin}
          setFormErrors={setFormErrors}
        />
      )}
    </div>
  );
}
