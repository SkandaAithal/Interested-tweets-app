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

    case "LOGIN":
      return {
        ...state,
        isLoggedin: true,
      };

    case "NOTIFY":
      return {
        ...state,
        isNotification: true,
        notifyMessage: action.payload,
      };
    case "CLOSE_NOTIFY":
      return {
        ...state,
        isNotification: false,
      };
  }
  return state;
}
