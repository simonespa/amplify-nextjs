import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Home Page</h1>

        <Link href="/ssr">
          <a>
            <h2>Server Side Rendering page &rarr;</h2>
          </a>
        </Link>
      </main>

      <footer>
        <Image src="/spider-web.svg" alt="Spider Web" width={72} height={16} />
      </footer>
    </>
  )
}
