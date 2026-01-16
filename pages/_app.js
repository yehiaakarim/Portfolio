import Head from "next/head";
import "../styles/globals.css";
import "../styles/button.css";
import { Provider } from "react-redux";
import store from "../Components/Redux/store";
import SharedLayOut from "../Components/LayOut/SharedLayOut";
import { ThemeProvider } from "../Components/contexts/ThemeContext";
import { TranslationProvider } from "../Components/contexts/TranslationContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const originalUrl = window.location.href;
    window.history.pushState(null, '', '/#projects');
    window.history.pushState(null, '', originalUrl);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider>
        <TranslationProvider>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <link rel="icon" href="/favicons/default-icon.svg" />
          </Head>
          <SharedLayOut>
            <Component {...pageProps} />
          </SharedLayOut>
        </TranslationProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;