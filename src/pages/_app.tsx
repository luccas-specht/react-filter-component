import Head from 'next/head';
import type { AppProps } from 'next/app';

import '~/styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Luccas Specht - React Test</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
