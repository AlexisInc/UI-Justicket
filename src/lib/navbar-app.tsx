import { Button, Navbar, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar-app.css'
// @ts-ignore
import ConnectButton from '../ConnectWallet.tsx';
import { useEffect, useState } from 'react';
import { NetworkType } from '@airgap/beacon-sdk';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito';
import { Link,NavLink } from 'react-router-dom';




const  NavbarApp = ()=> {
    const linkStyle = {
        marginRight: "1cm",
        textDecoration: "none",
        color: 'black',
        fontFamily: "Fugaz One"
        

      };

const [userAddress, setUserAddress] = useState<string>("");
const [userBalance, setUserBalance] = useState<number>(0);
const [Tezos, setTezos] = useState<TezosToolkit>(
    new TezosToolkit("https://ghostnet.tezos.marigold.dev")
);
const [wallet, setWallet] = useState<BeaconWallet>(
    new BeaconWallet({
      name: "Training",
      preferredNetwork: NetworkType.GHOSTNET,
    })
);

useEffect(() => {
    Tezos.setWalletProvider(wallet);
    (async () => {
      const activeAccount = await wallet.client.getActiveAccount();
      if (activeAccount) {
        setUserAddress(activeAccount.address);
        const balance = await Tezos.tz.getBalance(activeAccount.address);
        setUserBalance(balance.toNumber());
      }
    })();
  }, [wallet]);

  return (
    <Navbar id="navbar" >
     
    <Container>

           

      <Nav id="nav" className="me-auto">
        <Link  to='administration' style={linkStyle} >Administration</Link>

        <Link  to='billet' style={linkStyle} >Mes billets </Link>
        <Link to='concert' style={linkStyle}>Concerts</Link>


      </Nav>
      <img id="logo" src="/images/logo.png" alt="Logo de Justicket"/>

      <ConnectButton
              Tezos={Tezos}
              setUserAddress={setUserAddress}
              setUserBalance={setUserBalance}
              wallet={wallet}
      />
      <Button variant="light" >
        <img  id="tez" src="/images/login.png" alt="Bouton pour aller sur votre compte"/>
      </Button>


    </Container>

  </Navbar>


  );
}



export default NavbarApp;