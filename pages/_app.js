import Head from "next/head";
import "../styles/globals.css";
import "../styles/button.css";
import { Provider } from "react-redux";
import store from "../Components/Redux/store";
import SharedLayOut from "../Components/LayOut/SharedLayOut";
import { ThemeProvider } from "../Components/contexts/ThemeContext";
import { TranslationProvider } from "../Components/contexts/TranslationContext";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <Provider store={store}>
      <ThemeProvider>
        <TranslationProvider>
          <Head>
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