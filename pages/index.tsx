// import NotificationBanner from './NotificationBanner';
import FullDescription from './FullDescription';
import NotableRoles from './NotableRoles';
import FindMe from './FindMe';
import Skills from './Skills';
import Header from './header';
import Footer from './Footer';
import Head from 'next/head';
export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>mstrv - portfolio</title>
        <meta name="description" content="a silly site :3" />
        <meta name="author" content="mstrv" />
      </Head>
      <div className="wrapper">
        <div className="content max-w-4xl mx-auto py-8 px-4">
          <Header />
          <FullDescription />
          <NotableRoles />
          <Skills />
          <FindMe />
          <Footer />
        </div>
      </div>
    </div>
  );
}
