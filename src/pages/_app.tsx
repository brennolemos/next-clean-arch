import type { AppProps } from "next/app";

import { CartProvider } from "../context/cart-context";
import Cart from "../components/Cart";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Cart />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
