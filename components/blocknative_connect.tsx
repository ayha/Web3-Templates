import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
import {init, useConnectWallet} from '@web3-onboard/react';
import { Button } from '@mui/material';
import { ethers } from 'ethers';


export interface Props {
    
}

const Wallet = (props : Props) => {

   
    
    const RPC_URL = "https://mainnet.infura.io/v3/b455f9f0e21a4629b2210b1a80b25cef";
    const injected = injectedModule();



    const onboard = Onboard({
        wallets: [injected],
        chains: [
          {
            id: '0x1',
            token: 'ETH',
            label: 'Ethereum Mainnet',
            rpcUrl: RPC_URL
          }
        ]
      });

        
   /*     const [{wallet, connecting}, connect, disconnect] = useConnectWallet();
       let ethersProvider;
        
       if(wallet) {
        ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any');

       } */
      

       
       const connect = async () => { 
            //onboard.setChain({ chainId: 1});
            console.log(onboard);
           // const wallets = await onboard.connectWallet();
            //console.log(wallets);
       }
        
        
    

    

    
    return <Button variant="contained" onClick={ connect }>
        Connect
    </Button> 
}

export default Wallet;