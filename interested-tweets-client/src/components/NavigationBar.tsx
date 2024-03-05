import React from "react";
import { useGlobalDispatch } from "@/context/globalState";
import Cookies from "universal-cookie";
import { SiYoutube } from "react-icons/si";

export default function NavigationBar() {
  const dispatch = useGlobalDispatch();
  return (
    <nav className="flex justify-between items-center bg-black py-2 px-6">
      <div className="flex items-center">
        <SiYoutube className="h-6 w-6 text-white mr-2" />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => {
            dispatch({ type: "LOGOUT" });
            const cookie = new Cookies();
            cookie.remove("jwtToken");
            localStorage.removeItem("token");
          }}
          className="bg-slate-500 text-white bg-opacity-40 backdrop-blur-lg backdrop-filter hover:backdrop-blur-xl hover:bg-opacity-60 flex justify-between gap-5 m-3 items-center py-2 px-4 list-none hover:scale-105 transform transition-transform rounded-md"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
