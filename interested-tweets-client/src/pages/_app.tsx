import Layout from "@/components/Layout";
import { GlobalContextProvider } from "@/context/globalState";
import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContextProvider>
      <SpeedInsights />
    </>
  );
}
