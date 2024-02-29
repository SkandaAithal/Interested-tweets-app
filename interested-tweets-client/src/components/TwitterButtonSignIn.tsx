import React from "react";
import { FaTwitter } from "react-icons/fa";

export default function TwitterButtonSignIn() {
  // const twitteroAuth = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3001/auth/login", {
  //       method: "GET",
  //       credentials: "include",
  //     });

  //     if (response.ok) {
  //       const redirectUrl = await response.text(); // Assuming the response contains the redirect URL
  //       window.location.href = redirectUrl; // Redirect the user's browser
  //     } else {
  //       console.error("Failed to initiate OAuth flow:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error during fetch:", error);
  //   }
  // };

  return (<a href="http://localhost:3001/auth/login">
    <button
      // onClick={twitteroAuth}
      className="flex items-center w-full justify-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-md shadow-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
    >
      <FaTwitter className="text-white" />
      Sign In with Twitter
    </button>
    </a>
  );
}
