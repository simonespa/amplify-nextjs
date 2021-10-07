import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export async function getServerSideProps() {
  return {
    props: {
      description: 'This is a server-side rendered page'
    }
  }
}
export default function SSR({ description }) {
  return (
    <>
      <Head>
        <title>Server Side Rendering page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Server Side Rendering</h1>
        <p>{description}</p>

        <Link href="/">
          <a>
            <h2>Home page &rarr;</h2>
          </a>
        </Link>
      </main>

      <footer>
        <span>This is a footer section</span>
      </footer>
    </>
  )
}
