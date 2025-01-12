import '../styles/global.css';
import { AppProps } from 'next/app'; 
import LocalizationProvider from './LocalizationContext'; 
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider>
      <Head>
      <meta name="description" content="a silly site :3" />
      <meta name="author" content="mstrv" />
      <meta property="og:title" content="mstrv - portfolio" />
      <meta property="og:description" content="a silly site :3" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mero.gay" />
      <meta property="og:image" content="https://contact.mero.lol/images/peek.png" />
      <meta name="twitter:title" content="mstrv - portfolio" />
      <meta name="twitter:description" content="a silly site :3" />
      <meta name="twitter:image" content="https://contact.mero.lol/images/peek.png" />
      </Head>
      <Component {...pageProps} />
    </LocalizationProvider>
  );
}

export default MyApp