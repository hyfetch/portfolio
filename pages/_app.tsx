import '../styles/global.css'; // Import the global CSS file
import { AppProps } from 'next/app'; // Import AppProps from next/app
import LocalizationProvider from './LocalizationContext'; // Import the LocalizationProvider

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider>
      <Component {...pageProps} />
    </LocalizationProvider>
  );
}

export default MyApp;
