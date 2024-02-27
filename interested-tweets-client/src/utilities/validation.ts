import { FormErrorsType } from "@/types/authentication";

export function validation(
  type: string,
  inputs: { name?: string; email: string; password: string },
  errors: FormErrorsType
) {
  if (type === "SignUp") {
    if (!inputs.name) {
      errors = { ...errors, nameError: "Invalid Username" };
    } else {
      delete errors.nameError;
    }
  }

  // Validate email
  if (!inputs.email) {
    errors = { ...errors, emailError: "Email is required" };
  } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
    errors = { ...errors, emailError: "Invalid email format" };
  } else {
    delete errors.emailError;
  }

  // Validate password
  if (!inputs.password) {
    errors = { ...errors, passwordError: "Password is required" };
  } else if (inputs.password.length < 8) {
    errors = {
      ...errors,
      passwordError: "Password must be at least 8 characters long",
    };
  } else {
    delete errors.passwordError;
  }

  return errors;
}
