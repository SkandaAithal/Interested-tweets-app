import Authentication from "@/components/Authentication";
import HomePage from "@/components/HomePage";

import { useGlobalState } from "@/context/globalState";

export default function Home() {
  const { isLoggedin } = useGlobalState();
  return (
    <div className="">
      <HomePage />
    </div>
  );
}
