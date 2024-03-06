import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}
export interface GlobalStateType {
  isLoggedin: boolean;
  isNotification: boolean;
  notifyMessage: string;
  allInterests: string[];
  isLoading: boolean;
  searchInterests: string[];
  interestsLimitFlag: boolean;
  filterButton: boolean;
  nextPageToken: string;
  youtubeVideosArray: YouTubeVideoProps[];
  totalResults: number;
}

interface YouTubeVideoProps {
  id: { videoId: string };
}
export interface interetedDataType {
  value: string;
  tag: string;
}
export interface GlobalAction {
  type: string;
  payload?: any;
}
