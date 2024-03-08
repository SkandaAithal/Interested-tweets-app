import React, { useEffect, useRef } from "react";
import HomePageInterests from "@/components/HomePageInterests";
import Loader from "@/components/Loader";
import { useGlobalDispatch, useGlobalState } from "@/context/globalState";
import { youtubeApiCall } from "@/utilities/youtubeApiCall";
import { GrCaretNext } from "react-icons/gr";
import YoutubeComponent from "@/components/YoutubeComponent";

export default function Home() {
  const {
    youtubeVideosArray,
    isLoading,
    filterButton,
    nextPageToken,
    searchInterests,
    totalResults,
  } = useGlobalState();
  const dispatch = useGlobalDispatch();
  const scrollEvent = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (!isLoading && youtubeVideosArray.length <= totalResults) {
        youtubeApiCall(dispatch, searchInterests, nextPageToken, false);
      }
    }
  };

  useEffect(() => {
    youtubeApiCall(dispatch, searchInterests, nextPageToken, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => window.removeEventListener("scroll", scrollEvent);
  });
  return (
    <>
      <HomePageInterests />

      <div className={` w-full ${filterButton ? "fixed  z-0" : ""}`}>
        <div className="flex items-center justify-center  gap-3 p-5">
          <h1 className="text-3xl font-bold ">Youtube Videos</h1>
          <button
            className="bg-red-600 rounded-full flex gap-1 items-center text-white py-2 px-4 md:w-auto"
            onClick={() => {
              dispatch({ type: "OPEN_FILTER" });
            }}
          >
            <p className="hidden md:block">APPLY FILTER</p>
            <GrCaretNext className="text-xl" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {youtubeVideosArray.length !== 0 &&
            youtubeVideosArray.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden h-60">
                <YoutubeComponent videoId={item.id.videoId} />
              </div>
            ))}
        </div>
        {isLoading && <Loader />}
      </div>
    </>
  );
}
