import React from "react";
import { FaTwitter } from "react-icons/fa";

export default function TwitterButtonSignIn() {
  const twitterOauth = async () => {
    try {
      const response = fetch("http://localhost:3001/auth/login", {
        mode: "no-cors",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text(); // Parse response as text
        })
        .then((html) => {
          // HTML content is available here
          console.log(html);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={twitterOauth}
      className="flex items-center w-full justify-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-md shadow-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
    >
      <FaTwitter className="text-white" />
      Sign In with Twitter
    </button>
  );
}
