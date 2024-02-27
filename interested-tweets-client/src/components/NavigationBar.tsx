import React from "react";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { useGlobalDispatch } from "@/context/globalState";

export default function NavigationBar() {
  const dispatch = useGlobalDispatch();
  return (
    <nav className="flex justify-between items-center bg-black py-2 px-6">
      <div className="flex items-center">
        <FaTwitter className="h-6 w-6 text-white mr-2" />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        <Link className="text-white hover:underline" href="/">
          <>Interested Tweets</>
        </Link>
        <Link className="text-white hover:underline" href="/myfeed">
          <>My Feed</>
        </Link>
        <button
          onClick={() => {
            dispatch({ type: "LOGOUT" });
          }}
          className="bg-slate-500 text-white bg-opacity-40 backdrop-blur-lg backdrop-filter hover:backdrop-blur-xl hover:bg-opacity-60 flex justify-between gap-5 m-3 items-center py-2 px-4 list-none hover:scale-105 transform transition-transform rounded-md"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
