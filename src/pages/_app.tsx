import type { AppProps } from 'next/app';
import Link from 'next/link';
import '@/styles/reset.css';
import '@/styles/globalType.css';
import '@/styles/styles.css';
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
    <>
      <BgColumn />
      <div className='w-auto p-8 flex md:flex-row flex-col space-between'>
        {/* <SEO image={image} title={title} location={location.pathname} /> */}
        <GlobalNav />
        <div className='max-w-22xl flex flex-col mx-auto'>{children}</div>
      </div>
      <GlobalFooter />
    </>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
