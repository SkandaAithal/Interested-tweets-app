import Authentication from "@/components/Authentication";
import { useGlobalState } from "@/context/globalState";

export default function Home() {
  return (
    <div className="">
      <Authentication />
    </div>
  );
}
