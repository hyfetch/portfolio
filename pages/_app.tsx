import '../styles/global.css'; // Import the global CSS file
import { AppProps } from 'next/app'; // Import AppProps from next/app
import LocalizationProvider from './LocalizationContext'; //This causd so many issues that i don't even know why i localized the page. The hardcoding there is such an atrocity which i refuse to touch anymore.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider>
      <Component {...pageProps} />
    </LocalizationProvider>
  );
}

export default MyApp;
