import React from "react";
import { FaTwitter } from "react-icons/fa";

export default function TwitterButtonSignIn() {
  return (
    <button className="flex items-center w-full justify-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-md shadow-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200">
      <FaTwitter className="text-white" />
      Sign In with Twitter
    </button>
  );
}
