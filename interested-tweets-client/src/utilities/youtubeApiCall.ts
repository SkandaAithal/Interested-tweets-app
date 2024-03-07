import { GlobalAction } from "@/types/globalStateTypes";
import { Dispatch } from "react";
export async function youtubeApiCall(
  dispatch: Dispatch<GlobalAction>,
  searchInterests: string[],
  nextPageToken: string,
  initialCall: boolean
): Promise<any> {
  try {
    const API_KEY = "AIzaSyAiot5L8CH6b-2Uz8BuG1mD06w_-o2UjaI";

    let query;
    if (searchInterests.length === 0) {
      query = "world";
    } else {
      query = searchInterests.join("|");
    }

    let Token;
    if (initialCall) {
      Token = "";
    } else {
      Token = nextPageToken;
    }
    const YOUTUBE_URI = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&q=${query}&maxResults=10&order=relevance&pageToken=${Token}`;

    dispatch({ type: "IS_LOADING" });

    const response = await fetch(YOUTUBE_URI);
    const data = await response.json();
    console.log(data);
    if (!data.error) {
      dispatch({ type: "APPLY_FILTER", payload: data });
    }
  } catch (err) {
  } finally {
    dispatch({ type: "END_LOADING" });
  }
}
