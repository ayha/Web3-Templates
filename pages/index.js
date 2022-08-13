import {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//import Wallet from '../components/connect_wallet';
import BNWallet from "../components/blocknative_connect";
import WCWallet from '../components/connect_wallet';

const axios = require('axios').default;





import { ETHERSCAN_KEY, ALCHEMY_KEY } from '../components/constants';
import { connected } from 'process';

export default function Home() {

  const [connectedWallet, setConnectedWallet] = useState([]);

  const setWallet = (wallet) => {
    console.log(wallet);
    setConnectedWallet(wallet);
  }
  

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
            <h2>Connect Wallet </h2>
            <h3>Blocknative</h3><BNWallet onConnect={setWallet} />
            
            
            {connectedWallet != null &&
            <div><h3>Connected Wallet</h3>
                Connected to account {connectedWallet.accounts[0].address.slice(0, 5) + "..."} on {connectedWallet.chains[0].id} in {connectedWallet.label}  
            </div>}
           
            

            
          </div>

          <div className={styles.card}>
            <h2>Get Smart Contract Token</h2>
            
          </div>

          <div
            className={styles.card}
          >
            <h2>Check Token Balance of Wallet</h2>
          
          </div>

          <div
            className={styles.card}
          >
            <h2>Interact with Smart Contract</h2>
            
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
