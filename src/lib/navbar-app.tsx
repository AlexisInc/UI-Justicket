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
import {Form} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {addressSelector, adminSelector, balanceSelector} from "../reducer";
import {Cmd} from "redux-loop";
import dispatch = Cmd.dispatch;




const  NavbarApp = ()=> {
    const linkStyle = {
        marginRight: "1cm",
        textDecoration: "none",
        color: 'black',
        fontFamily: "Fugaz One"
        

      };

// const [userAddress, setUserAddress] = useState<string>("");
// const [userBalance, setUserBalance] = useState<number>(0);
// const [isAdmin, setIsAdmin] = useState<boolean>(false);

    const userBalance = useSelector(balanceSelector)
    const isAdmin = useSelector(adminSelector)
    const userAddress = useSelector(addressSelector)
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

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/plain");
        myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
          const formData: FormData = new FormData();
          formData.append('address', userAddress)
        const myRequest = new Request('admin/is_admin', {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: formData
        });
        fetch(myRequest)
            .then((response) => response.json())
            .then( (data) => {
                dispatch(isAdmin(data.isAdmin))
            })
        useDispatch()
      }
    })();
  }, [wallet]);
  return (
    <Navbar id="navbar" >
     
    <Container>

           

      <Nav id="nav" className="me-auto">

          {isAdmin ?
        <Link  to='administration' style={linkStyle} >Administration</Link>
            : ''}
        <Link  to='billet' style={linkStyle} >Mes billets </Link>
        <Link to='concert' style={linkStyle}>Concerts</Link>


      </Nav>
      <img id="logo" src="/images/logo.png" alt="Logo de Justicket"/>
        {userAddress.length === 0 ?
      <ConnectButton
              Tezos={Tezos}
              setUserAddress={setUserAddress}
              setUserBalance={setUserBalance}
              wallet={wallet}
      /> : ''}
      <Button variant="light" >
        <img  id="tez" src="/images/login.png" alt="Bouton pour aller sur votre compte"/>
      </Button>


    </Container>

  </Navbar>


  );
}



export default NavbarApp;