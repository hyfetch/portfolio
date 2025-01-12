import '../styles/global.css';
import { AppProps } from 'next/app'; 
import LocalizationProvider from './LocalizationContext'; 
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider>
      <Head>
      <Head>
  <meta name="description" content="a silly site :3" />
  <meta name="author" content="mstrv" />
  
    <meta property="og:title" content="mstrv - portfolio" />
    <meta property="og:description" content="a silly site :3" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://mero.gay" />
    <meta property="og:image" content="https://contact.mero.lol/images/peek.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="mstrv portfolio" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="mstrv - portfolio" />
    <meta name="twitter:description" content="a silly site :3" />
    <meta name="twitter:image" content="https://contact.mero.lol/images/peek.png" />
    {/*This is why this repo was private for so long, because i did small commits to experiment ;p */}
</Head>
      </Head>
      <Component {...pageProps} />
    </LocalizationProvider>
  );
}

export default MyApp