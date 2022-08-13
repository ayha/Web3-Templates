import {useState, useEffect } from 'react';
import { WalletState } from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
import walletConnectModule from '@web3-onboard/walletconnect';
import {init, useConnectWallet} from '@web3-onboard/react';
import { Button } from '@mui/material';
import { ethers } from 'ethers';
import icon from './icon';


const INFURA_KEY = "b455f9f0e21a4629b2210b1a80b25cef"
const RPC_URL = `https://mainnet.infura.io/v3/${INFURA_KEY}`;

const injected = injectedModule();

const walletConnect = walletConnectModule({
    qrcodeModalOptions: { mobileLinks: ['metamask', 'rainbow', 'argent', 'trust' ]}
})

init({
    wallets: [injected, walletConnect],
    chains: [{id: '0x1', token: 'ETH', label: 'Ethereum Mainnet', rpcUrl: RPC_URL}],
    appMetadata: {
        name: 'Web3 Snippets',
        description: 'Snippets for simple web3 operations',
        icon: icon
    }
});

type Props = {
    onConnect: (wallet: WalletState | null) => void;
}

const Wallet = (props : Props) => {

    
 
    const [{wallet, connecting}, connect, disconnect] = useConnectWallet();

    useEffect( () => {
      
            props.onConnect(wallet);
       
    }, [wallet]);


    const handleConnect  = async () => {
        if(wallet) {
          
            disconnect(wallet);
         
        } else {
            connect();

        }
    }

    return <Button disabled={connecting} variant="contained" onClick={ handleConnect  }>
        {connecting ? 'Connecting...' : wallet ? 'Disconnect' : "Connect Wallet"}
    </Button> 
}

export default Wallet;