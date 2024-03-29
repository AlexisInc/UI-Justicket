import { Button, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar-app.css';
// @ts-ignore
import ConnectButton from '../ConnectWallet.tsx';
import { useEffect, useState } from 'react';
import { NetworkType } from '@airgap/beacon-sdk';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito';
import { Link, NavLink } from 'react-router-dom';
import { Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addressSelector, adminSelector, balanceSelector } from '../reducer.ts';
import { Cmd } from 'redux-loop';

const NavbarApp = () => {
  const linkStyle = {
    marginRight: '1cm',
    textDecoration: 'none',
    color: 'black',
    fontFamily: 'Fugaz One',
  };

  const userBalance = useSelector(balanceSelector);
  const isAdmin = useSelector(adminSelector);
  const userAddress = useSelector(addressSelector);
  const [Tezos, setTezos] = useState<TezosToolkit>(
    new TezosToolkit('https://ghostnet.tezos.marigold.dev')
  );

  return (
    <Navbar id="navbar">
      <Container>
        <Nav id="nav" className="me-auto">
          {isAdmin ? (
            <Link to="administration" style={linkStyle}>
              Administration
            </Link>
          ) : (
            ''
          )}
          <Link to="billet" style={linkStyle}>
            Mes billets{' '}
          </Link>
          <Link to="concert" style={linkStyle}>
            Concerts
          </Link>
        </Nav>
        <img id="logo" src="/images/logo.png" alt="Logo de Justicket" />
        {userAddress.length === 0 ? <ConnectButton Tezos={Tezos} /> : ''}
        <Button variant="light">
          <img
            id="tez"
            src="/images/login.png"
            alt="Bouton pour aller sur votre compte"
          />
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
