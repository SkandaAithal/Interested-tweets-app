import { GlobalAction, GlobalStateType } from "@/types/globalStateTypes";

export default function reducerFunction(
  state: GlobalStateType,
  action: GlobalAction
): GlobalStateType {
  switch (action.type) {
    case "LOGOUT":
      return {
        ...state,
        isLoggedin: false,
      };
  }
  return state;
}
