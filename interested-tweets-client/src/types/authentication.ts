import { Dispatch } from "react";

export interface UserAuthenticationProps {
  type: string;
  isLogin: boolean;
  formErrors: FormErrorsType;
  formSubmit: Function;
  setIsLogin: Dispatch<boolean>;
  setFormErrors: Dispatch<FormErrorsType>;
}

export interface FormErrorsType {
  nameError?: string;
  emailError: string;
  passwordError: string;
}
