import { Button } from '@mui/material';

//import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';

import NodeWalletConnect from "@walletconnect/node";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";

const Wallet = (props) => {

   /*  const provider = new WalletConnectProvider({
        infuraId: 'b455f9f0e21a4629b2210b1a80b25cef',
    }); */

    const connector = new NodeWalletConnect(
        {
          bridge: "https://bridge.walletconnect.org", // Required
        },
        {
          clientMeta: {
            description: "  ",
            url: "https://nodejs.org/en/",
            icons: ["https://nodejs.org/static/images/logo.svg"],
            name: "WalletConnect",
          },
        }
      );
    
      connector.on("connect", (error, payload) => {
        if (error) {
          throw error;
        }
      
        // Close QR Code Modal
        WalletConnectQRCodeModal.close(
          true // isNode = true
        );
      
        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0];
        console.log( accounts + " connected on " + chainId);
        sessionStorage.setItem("connected_accounts", accounts);
        console.log("session " + sessionStorage.getItem("connected_accounts")); 
      });
      
      connector.on("session_update", (error, payload) => {
        if (error) {
          throw error;
        }
      
        // Get updated accounts and chainId
        const { accounts, chainId } = payload.params[0];
      });
      
      connector.on("disconnect", (error, payload) => {
        if (error) {
          throw error;
        }
      
        // Delete walletConnector
      });
      
     

    const connectWallet = () => {
        try {
        if (!connector.connected) {
            // create new session
            connector.createSession().then(() => {
              // get uri for QR Code modal
              const uri = connector.uri;
              // display QR Code modal
              WalletConnectQRCodeModal.open(
                uri,
                () => {
                  console.log("QR Code Modal closed");
                },
                true // isNode = true
              );
            });
          }
        } catch (error) {
            console.log("Unable to connect wallet");
            console.error(error);
        }
    }

    const connectMetamask = async () => {
        try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        console.log("Metamask connected") ;
        console.log(accounts);
        sessionStorage.setItem("connected_accounts", accounts);
        console.log("session " + sessionStorage.getItem("connected_accounts")); 
        //ta-da. you now have the accounts, in here you can invoke a function, setState etc
        } catch (error) {
        //do something with the error
            console.log("Unable to connect metamask");
            console.error(error);
        }
    }

    return <div ><Button variant="contained" onClick={ connectWallet }>Connect Wallet</Button> 
   
    </div>
}   

export default Wallet;