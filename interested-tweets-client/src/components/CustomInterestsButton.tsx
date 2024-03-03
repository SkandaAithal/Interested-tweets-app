import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { CustomButtonPropTypes } from "@/types/utilityTypes";
import { useGlobalDispatch, useGlobalState } from "@/context/globalState";

export default function CustomInterestsButton({
  text,
  filter,
}: CustomButtonPropTypes) {
  const [selected, setSelected] = useState<boolean>(false);
  const dispatch = useGlobalDispatch();
  const { searchInterests } = useGlobalState();

  // Define button styles based on selected and filter props
  const buttonStyles = `
    rounded-full py-2 px-4 shadow-md hover:shadow-lg
    ${
      selected
        ? "text-white bg-black"
        : filter
        ? "text-white bg-black"
        : "bg-white text-black "
    } 
  
    relative
    transition-all duration-200
    cursor-pointer
  `;

  useEffect(() => {
    if (!searchInterests.includes(text)) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  }, [searchInterests]);

  // Function to handle button click when filter is true
  const handleButtonClick = () => {
    if (!filter) {
      if (!selected) {
        dispatch({ type: "ADD_INTEREST", payload: text });
      }
    }
  };

  return (
    <div
      className={`flex justify-center items-center gap-2 m-2 rounded-full w-fit relative overflow-hidden ${buttonStyles} ${
        selected ? "shadow-md" : "drop-shadow-lg"
      }`}
      onClick={handleButtonClick}
    >
      <button className="col-span-2">{text}</button>
      {filter && (
        <div
          className="flex items-center justify-center col-start-2"
          onClick={() => {
            dispatch({ type: "REMOVE_INTEREST", payload: text });
          }}
        >
          <RxCross1 className={`${filter ? "" : "hidden"} text-white`} />
        </div>
      )}
    </div>
  );
}
