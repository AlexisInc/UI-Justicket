import { NetworkType } from "@airgap/beacon-sdk";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";
import { Dispatch, SetStateAction } from "react";
import { Button } from "react-bootstrap";

type ButtonProps = {
    Tezos: TezosToolkit;
    setUserAddress: Dispatch<SetStateAction<string>>;
    setUserBalance: Dispatch<SetStateAction<number>>;
    wallet: BeaconWallet;
};

const ConnectButton = ({
                           Tezos,
                           setUserAddress,
                           setUserBalance,
                           wallet,
                       }: ButtonProps): JSX.Element => {
    const connectWallet = async (): Promise<void> => {
        try {
            await wallet.requestPermissions({
                network: {
                    type: NetworkType.GHOSTNET,
                    rpcUrl: "https://ghostnet.tezos.marigold.dev",
                },
            });
            // gets user's address
            const userAddress = await wallet.getPKH();
            const balance = await Tezos.tz.getBalance(userAddress);
            setUserBalance(balance.toNumber());
            setUserAddress(userAddress);
        } catch (error) {
            console.log(error);
        }
    };


    return (

        <Button variant="light" onClick={connectWallet}><img  id="tez" src="/images/tezos.png" alt="Logo Tezos"/></Button>
            
    );
};

export default ConnectButton;