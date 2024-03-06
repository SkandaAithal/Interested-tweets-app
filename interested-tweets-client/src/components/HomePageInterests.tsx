import { useGlobalDispatch, useGlobalState } from "@/context/globalState";
import React from "react";
import CustomInterestsButton from "./CustomInterestsButton";
import { GrCaretNext } from "react-icons/gr";
import { youtubeApiCall } from "@/utilities/youtubeApiCall";
import { RxCross1 } from "react-icons/rx";

export default function HomePageInterests() {
  const {
    allInterests,
    searchInterests,
    interestsLimitFlag,
    filterButton,
    nextPageToken,
  } = useGlobalState();
  const dispatch = useGlobalDispatch();
  return (
    <main
      className={`bg-gradient-radial absolute top-0 w-full
       z-10 from-red-600 to-transparent ${filterButton ? "" : "hidden"}`}
    >
      <div className="sticky w-full container mx-auto d:w-full lg:w-3/4 xl:w-2/3  top-4 z-50">
        <div className="p-4 border border-gray-400 rounded-2xl m-3  bg-white">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-3xl mb-3">Your Interests: </h1>
            <RxCross1
              onClick={() => {
                dispatch({ type: "CLOSE_FILTER" });
              }}
              className={` text-black text-2xl cursor-pointer`}
            />
          </div>
          {interestsLimitFlag && (
            <p className="text-red-700 mb-1 ">
              You can choose a maximum of 5 Interests
            </p>
          )}

          <div className="flex-col justify-between ">
            {searchInterests.length !== 0 ? (
              <div className="flex flex-wrap gap-2 ">
                {searchInterests.map((value, index) => (
                  <CustomInterestsButton
                    key={index}
                    filter={true}
                    text={value}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 p-3">Choose your interests...</p>
            )}

            <button
              onClick={() => {
                if (searchInterests.length === 0) {
                  dispatch({ type: "CLOSE_FILTER" });
                } else {
                  dispatch({ type: "CLEAR_LIST" });
                  youtubeApiCall(
                    dispatch,
                    searchInterests,
                    nextPageToken,
                    true
                  );
                }
              }}
              className="bg-red-600 rounded-full flex gap-1 m-1 mt-3 items-center w-fit text-white py-2 px-4"
            >
              <p>APPLY</p>
              <GrCaretNext className=" text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className=" container mx-auto py-8 px-4  md:w-full lg:w-3/4 xl:w-2/3 ">
        <h2 className="text-white text-4xl font-semibold mb-4">
          All Interests
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {allInterests &&
            allInterests.map((text, index) => (
              <CustomInterestsButton key={index} filter={false} text={text} />
            ))}
        </div>
      </div>
    </main>
  );
}
