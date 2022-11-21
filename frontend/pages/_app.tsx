import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { theme } from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";

import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }:MyAppProps) {
 return (
  <CacheProvider value={emotionCache}>
   <ThemeProvider theme={theme}>
     <Component {...pageProps} />
   </ThemeProvider>
  </CacheProvider>
 );
}

export default MyApp;