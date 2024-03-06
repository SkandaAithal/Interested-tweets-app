import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButtonSignIn() {
  return (
    <Link href={"http://localhost:3001/auth/Googlelogin"}>
      <button className="mb-4 w-full bg-white text-gray-700 rounded-lg py-2 px-4 flex items-center gap-2 justify-center border border-blue-300 hover:bg-gray-100 hover:shadow-md">
        <FcGoogle className="h-6 w-6" />
        Sign In with Google
      </button>
    </Link>
  );
}
