import type { AppProps } from 'next/app';
import Link from 'next/link';
import '@/styles/reset.css';
import '@/styles/globalType.css';
import '@/styles/styles.css';
import '@/styles/blog.css';
import '@/styles/tailwind.css';

import GlobalFooter from '../components/GlobalFooter';
import GlobalNav from '../components/GlobalNav';
import BgColumn from '../components/BgColumn';
import SkipLink from '../components/SkipLink';
// import SEO from '../components/SEO';

const GlobalLayout = (props: any): any => {
  if (!props) return null;
  const { title, image, location, children } = props;

  return (
    <div className='flex flex-col justify-start gap-8 h-full min-h-[100vh]'>
      {/* <BgColumn /> */}
      {/* <SEO image={image} title={title} location={location.pathname} /> */}
      <GlobalNav />
      <div className='w-full flex flex-col mx-auto'>{children}</div>
      <GlobalFooter />
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
