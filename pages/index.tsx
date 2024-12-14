// import NotificationBanner from './NotificationBanner';
import FullDescription from './FullDescription';
import NotableRoles from './NotableRoles';
import FindMe from './FindMe';
import Skills from './Skills';
import Header from './header';
import Footer from './Footer';
import Head from 'next/head';

const Home = () => (
  <div className="bg-gray-100 min-h-screen">
    <Head>
      <title>mstrv - portfolio</title>
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
    <div className="wrapper">
      <div className="content max-w-4xl mx-auto py-8 px-4">
        <Header />
        <FullDescription />
        <NotableRoles />
        <Skills />
        <FindMe />
        <Footer />
        <div className="Mastodon">
        <a rel="me" href="https://meow.social/@mero">Mastodon</a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

