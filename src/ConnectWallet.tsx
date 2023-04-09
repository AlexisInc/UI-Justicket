import { NetworkType } from '@airgap/beacon-sdk';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito';
import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import { walletConnection, isAdminAction } from './action.ts';
// @ts-ignore
import { checkIsAdmin } from './service/adminService.ts';

type ButtonProps = {
  Tezos: TezosToolkit;
  setUserAddress: Dispatch<SetStateAction<string>>;
  setUserBalance: Dispatch<SetStateAction<number>>;
  //wallet: BeaconWallet;
};

const ConnectButton = ({
  Tezos,
  setUserAddress,
  setUserBalance,
}: ButtonProps): JSX.Element => {
  const [wallet, setWallet] = useState<BeaconWallet>(
    new BeaconWallet({
      name: 'Training',
      preferredNetwork: NetworkType.GHOSTNET,
    })
  );

  const dispatch = useDispatch();
  const connectWallet = async (): Promise<void> => {
    try {
      await wallet.requestPermissions({
        network: {
          type: NetworkType.GHOSTNET,
          rpcUrl: 'https://ghostnet.tezos.marigold.dev',
        },
      });
      const userAddress = await wallet.getPKH();
      const balance = await Tezos.tz.getBalance(userAddress);
      console.log(userAddress);
      console.log(wallet);
      dispatch(walletConnection(userAddress, balance.toNumber(), wallet));
      //await checkIsAdmin(userAddress, dispatch);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button variant="light" onClick={connectWallet}>
      <img id="tez" src="/images/tezos.png" alt="Logo Tezos" />
    </Button>
  );
};

export default ConnectButton;

/*
useEffect(() => {
  
    Tezos.setWalletProvider(wallet);
    (async () => {
      const activeAccount = await wallet.client.getActiveAccount();
      if (activeAccount) {
    
        const balance = await Tezos.tz.getBalance(activeAccount.address);
        dispatch(walletConnection(activeAccount.address,balance.toNumber()))

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
                dispatch(isAdminAction(data.isAdmin))
            })
      }
    })();
    
  }, );
  */
