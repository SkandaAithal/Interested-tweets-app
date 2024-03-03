import { useGlobalState } from "@/context/globalState";
import React from "react";
import CustomInterestsButton from "./CustomInterestsButton";

export default function HomePageInterests() {
  const { allInterests } = useGlobalState();

  return (
    <main className="flex flex-wrap justify-center">
      {allInterests &&
        allInterests.map((text, index) => (
          <CustomInterestsButton key={index} filter={false} text={text} />
        ))}
    </main>
  );
}
