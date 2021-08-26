import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export async function getServerSideProps() {
  return {
    props: {
      description: 'What about this page?'
    }
  }
}


export default function SSR() {
  return (
    <>
      <Head>
        <title>Server Side Rendering page</title>
        <link rel="icon" href="/fav.ico" />
      </Head>

      <main>
        <h1>Server Side Rendering</h1>

        <Link href="/">
          <a>
            <h2>Home page &rarr;</h2>
          </a>
        </Link>
      </main>

      <footer>
        <Image src="/spider-web.svg" alt="Spider Web" width={72} height={16} />
      </footer>
    </>
  )
}
