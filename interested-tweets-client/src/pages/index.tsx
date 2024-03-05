import Authentication from "@/components/Authentication";
import HomePageInterests from "@/components/HomePageInterests";
import { useGlobalDispatch, useGlobalState } from "@/context/globalState";
import { GrCaretNext } from "react-icons/gr";

export default function Home() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const { filterButton } = useGlobalState();
  const dispatch = useGlobalDispatch();
  // const YOUTUBE_URI = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&q=${}&maxResults=10`;
  return (
    <>
      <HomePageInterests />
      <div className="container">
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
        <div className=""></div>
      </div>
    </>
  );
}
