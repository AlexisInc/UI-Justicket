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
      //commenter la ligne ci dessous si vous voulez avoir accès à toutes les fonctionnalités sans être admin dans la bdd du back
      await checkIsAdmin(userAddress, dispatch);
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