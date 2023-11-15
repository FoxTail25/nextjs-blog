import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Component2I from '../../components/Component2I';
import s from '../../styles/first.module.scss'
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>

      <Head>
        <title>Firat Page</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <script src='/firstp.js'></script> */}

      </Head>


      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      {/* <Component2I /> */}
      <p className={s.text}>
        some text 
        <span>some text in span</span>
      </p>
    </Layout>
  );
}