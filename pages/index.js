import Head from 'next/head'
import Image from 'next/image'

import WalletConnector from '../components/connect_wallet';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web3 App Starter</title>
        <meta name="description" content="Generic Web3 App Starter Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Web3 Starter Template
        </h1>

       

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Connect Wallet</h2>
            <WalletConnector />
          </div>

          <div className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </div>

          <div
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </div>

          <div
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </div>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <a
          href="https://www.techballers.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <span className={styles.logo}>
            <Image src="/techballers-logo.png" alt="Tech Ballers Logo" width={77} height={50} />
          </span>
        </a>
      </footer>
    </div>
  )
}
