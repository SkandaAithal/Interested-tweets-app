import React, { useState } from "react";
import styles from "../styles/spinnerLoader.module.css";
export default function YoutubeComponent({ videoId }: { videoId: string }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="w-full h-full bg-black flex justify-center items-center gap-2 text-white ">
          <span className={styles.loader}></span> Loading...
        </div>
      )}
      <iframe
        id="video"
        className="w-full h-full"
        src={`//www.youtube.com/embed/${videoId}?rel=0`}
        allowFullScreen={true}
        onLoad={() => {
          setIsLoading(false);
        }}
      ></iframe>
    </>
  );
}
