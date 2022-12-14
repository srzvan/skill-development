import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "react-redux";

import { store } from "store";

import "styles/jcomeau-reset.css";
import "styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
