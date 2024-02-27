import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}
export interface GlobalStateType {
  isLoggedin?: boolean;
}
export interface GlobalAction {
  type: string;
  payload?: any;
}
