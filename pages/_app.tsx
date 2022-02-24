import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SiteHead } from "../components/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SiteHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
