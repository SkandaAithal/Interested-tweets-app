import reducerFunction from "@/reducer/globalReducer";
import {
  GlobalAction,
  GlobalStateType,
  ProviderProps,
} from "@/types/globalStateTypes";
import React, { createContext, Dispatch, useContext, useReducer } from "react";

const GlobalStateContext = createContext<GlobalStateType | undefined>(
  undefined
);

const GlobalDispatch = createContext<Dispatch<GlobalAction> | undefined>(
  undefined
);

export function GlobalContextProvider({ children }: ProviderProps) {
  const initialState: GlobalStateType = {
    isLoggedin: true,
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatch.Provider value={dispatch}>
        {children}
      </GlobalDispatch.Provider>
    </GlobalStateContext.Provider>
  );
}

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return context;
};

export const useGlobalDispatch = () => {
  const context = useContext(GlobalDispatch);
  if (context === undefined) {
    throw new Error("useGlobalDispatch must be used within a GlobalProvider");
  }
  return context;
};
