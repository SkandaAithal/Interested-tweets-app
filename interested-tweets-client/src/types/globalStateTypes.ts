import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}
export interface GlobalStateType {
  isLoggedin?: boolean;
  isNotification: boolean;
  notifyMessage: string;
  allInterests: string[];

  searchInterests: string[];
  interestsLimitFlag: boolean;
  filterButton: boolean;
}

export interface interetedDataType {
  value: string;
  tag: string;
}
export interface GlobalAction {
  type: string;
  payload?: any;
}
