import { useGlobalState } from "@/context/globalState";
import React, { ReactNode } from "react";
import NavigationBar from "./NavigationBar";
import Authentication from "./Authentication";
import Notification from "./Notification";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const { isLoggedin, isNotification } = useGlobalState();
  return (
    <>
      {isLoggedin ? (
        <>
          <NavigationBar />
          {children}
        </>
      ) : (
        <>
          <Authentication />
        </>
      )}
      {isNotification && <Notification />}
    </>
  );
}
