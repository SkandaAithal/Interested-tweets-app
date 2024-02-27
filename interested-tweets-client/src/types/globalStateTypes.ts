import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}
export interface GlobalStateType {
  isLoggedin?: boolean;
  isNotification: boolean;
  notifyMessage: string;
}
export interface GlobalAction {
  type: string;
  payload?: any;
}
