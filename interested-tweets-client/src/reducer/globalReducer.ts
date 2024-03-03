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

    case "ADD_INTEREST":
      const interestObject = { value: action.payload, tag: action.payload };

      if ([...state.userInterests, interestObject].length > 5) {
        return {
          ...state,
          interestLengthFlag: true,
        };
      } else {
        return {
          ...state,
          userInterests: [...state.userInterests, interestObject],
          searchInterests: [...state.searchInterests, action.payload],
          interestLengthFlag: false,
        };
      }

    case "REMOVE_INTEREST":
      const filteredUserInterests = state.userInterests.filter(
        ({ value }) => value !== action.payload
      );
      const filteredSearch = state.searchInterests.filter(
        (text) => text !== action.payload
      );

      return {
        ...state,
        userInterests: filteredUserInterests,
        searchInterests: filteredSearch,
        interestLengthFlag: false,
      };
  }
  return state;
}
