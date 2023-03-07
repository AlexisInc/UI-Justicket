import { NetworkType } from "@airgap/beacon-types";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";
import { useEffect, useState } from "react";
import "./App.css";
import ConnectButton from "./ConnectWallet.tsx";
import DisconnectButton from "./DisconnectWallet.tsx";

function App() {
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

  const [userAddress, setUserAddress] = useState<string>("");
  const [userBalance, setUserBalance] = useState<number>(0);

  return (
      <div className="App">
        <header className="App-header">
          <ConnectButton
              Tezos={Tezos}
              setUserAddress={setUserAddress}
              setUserBalance={setUserBalance}
              wallet={wallet}
          />

          <DisconnectButton
              wallet={wallet}
              setUserAddress={setUserAddress}
              setUserBalance={setUserBalance}
          />

          <div>
            I am {userAddress} with {userBalance} mutez
          </div>
        </header>
      </div>
  );
}

export default App;
