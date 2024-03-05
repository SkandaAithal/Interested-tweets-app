import CustomInterestsButton from "@/components/CustomInterestsButton";
import HomePageInterests from "@/components/HomePageInterests";

import { useGlobalState } from "@/context/globalState";
import Link from "next/link";
import { GrCaretNext } from "react-icons/gr";

export default function Home() {
  const { userInterests, interestLengthFlag } = useGlobalState();
  return (
    <div className="">
      <div className="sticky top-0 z-50 bg-white">
        <div className="p-4 border border-gray-400 rounded m-3">
          <h1 className="font-bold text-3xl mb-4">Your Interests: </h1>
          {interestLengthFlag && (
            <p className="text-red-700 ">
              You can choose a maximum of 5 Interests
            </p>
          )}
          {userInterests.length !== 0 ? (
            <div className="flex-col justify-between ">
              <div className="flex flex-wrap ">
                {userInterests.map(({ value }, index) => (
                  <CustomInterestsButton
                    key={index}
                    filter={true}
                    text={value}
                  />
                ))}
              </div>
              <Link
                href={"/myfeed"}
                className="bg-blue-400 rounded-full flex gap-1 m-2 items-center w-fit text-white py-2 px-4"
              >
                <p>NEXT</p>
                <GrCaretNext className=" text-xl" />
              </Link>
            </div>
          ) : (
            <p className="text-gray-500 p-3.5">Choose your interests...</p>
          )}
        </div>
      </div>

      <HomePageInterests />
    </div>
  );
}
