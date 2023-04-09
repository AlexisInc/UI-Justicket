import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import concertData from '../concerts.json';
import { fetchDataConcert, buy_nft } from '../action.ts';
import { useDispatch, useSelector } from 'react-redux';
import { nftSelector, walletSelector } from '../reducer.ts';
import { TezosToolkit } from '@taquito/taquito';

const Concert = () => {
  const concerts = concertData;
  const dispatch = useDispatch();
  const concert_nfts = useSelector(nftSelector);
  const wallet = useSelector(walletSelector);
  const tezos = new TezosToolkit('https://ghostnet.tezos.marigold.dev');

  useEffect(() => {
    dispatch(fetchDataConcert());
  }, []);
  useEffect(() => {
    console.log('Nouvelle valeur de concert_nfts :', concert_nfts);
    // Appeler votre méthode ici ...
  }, [concert_nfts]);

  async function handleBuyTicket(contractAddress) {
    console.log(wallet);
    tezos.setWalletProvider(wallet);
    // Get the user's address
    const userAddress = await wallet.getPKH();
    // Prepare the transaction
    const contract = await tezos.wallet.at(
      'KT1TbPG9nVYxCPhJJQVKVewP4293mYnMsdS7'
    );
    const token = concert_nfts
      .find((elt) => (elt.address = 'KT1TbPG9nVYxCPhJJQVKVewP4293mYnMsdS7'))
      .nft.pop();
    console.log(token);

    const operation = await contract.methods
      .buy_ticket(token)
      .send({ from: userAddress });

    // Request the user's signature
    const signedOperation = await wallet.signOperation({
      operationDetails: [operation],
    });

    // Broadcast the signed transaction
    const hash = await tezos.rpc.sendOperation(signedOperation.opOb);
    console.log(`Transaction broadcasted with hash ${hash}`);
    console.log(operation);

    dispatch(buy_nft(token, 'KT1TbPG9nVYxCPhJJQVKVewP4293mYnMsdS7'));
  }

  async function handleRefund(contractAddress) {
    console.log(wallet);
    tezos.setWalletProvider(wallet);
    // Get the user's address
    const userAddress = await wallet.getPKH();
    // Prepare the transaction
    const contract = await tezos.wallet.at(
      'KT1TbPG9nVYxCPhJJQVKVewP4293mYnMsdS7'
    );
    const token = concert_nfts
      .find((elt) => (elt.address = 'KT1TbPG9nVYxCPhJJQVKVewP4293mYnMsdS7'))
      .nft.pop();
    console.log(token);

    const operation = await contract.methods
      .refund()
      .send({ from: userAddress });

    // Request the user's signature
    const signedOperation = await wallet.signOperation({
      operationDetails: [operation],
    });

    // Broadcast the signed transaction
    const hash = await tezos.rpc.sendOperation(signedOperation.opOb);
    console.log(`Transaction broadcasted with hash ${hash}`);
    console.log(operation);

    dispatch(buy_nft(token, 'KT1TbPG9nVYxCPhJJQVKVewP4293mYnMsdS7'));
  }

  return (
    <>
      <h1>Concerts</h1>
      <section className="concerts">
        {concerts.map((concert) => {
          return (
            <Card className="concert" key={concert.title}>
              <Card.Header as="h5">{concert.title}</Card.Header>
              <Card.Body>
                <Card.Title>{concert.artist}</Card.Title>
                <Card.Text>Nombre de places : {concert.capacity}</Card.Text>
                <Card.Text>Date du concert : {concert.date}</Card.Text>
                <Card.Text>Prix : {concert.priceTezos} Tz</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleBuyTicket(concert.contractAddress)}
                >
                  Acheter un billet
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleRefund(concert.contractAddress)}
                >
                  Refund
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </section>
    </>
  );
};

export default Concert;
