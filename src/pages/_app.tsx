import "../styles/globals.css";
import type { AppProps } from "next/app";
import Cart from "../components/Cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cart />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
