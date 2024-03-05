import { useGlobalState } from "@/context/globalState";
import React from "react";

export default function MyFeed() {
  const { searchInterests } = useGlobalState();
  const searchQuery = searchInterests.join(" . ");

  const userId = "1744626094647500801";
  return <div>MyFeed</div>;
}
