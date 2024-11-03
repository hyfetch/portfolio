import '../styles/global.css';
import { AppProps } from 'next/app'; 
import LocalizationProvider from './LocalizationContext'; 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider>
      <Component {...pageProps} />
    </LocalizationProvider>
  );
}

export default MyApp;
