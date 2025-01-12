// import NotificationBanner from './NotificationBanner';
import FullDescription from './FullDescription';
import NotableRoles from './NotableRoles';
import FindMe from './FindMe';
import Header from './header';
import Footer from './Footer';
import Head from 'next/head';

const Home = () => (
  <div className="bg-gray-100 min-h-screen">
    <Head>
      <title>mstrv - portfolio</title>
    </Head>
    <div className="wrapper">
      <div className="content max-w-4xl mx-auto py-8 px-4">
        <Header />
        {/* <FullDescription /> */}
        <NotableRoles />
        <FindMe />
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;

