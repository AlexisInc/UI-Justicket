import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import concertData from '../concerts.json';
import { fetchDataConcert, buy_nft } from '../action.ts';
import { useDispatch, useSelector } from 'react-redux';
import { nftSelector, walletSelector } from '../reducer.ts';
import { TezosToolkit } from '@taquito/taquito';

const Concert = () => {
  const dispatch = useDispatch();
  const concert_nfts = useSelector(nftSelector);
  const wallet = useSelector(walletSelector);
  const tezos = new TezosToolkit('https://ghostnet.tezos.marigold.dev');
  useEffect(() => {
    dispatch(fetchDataConcert());
  }, []);

  async function handleBuyTicket(contractAddress) {
    if (wallet == null) {
      alert('connectez vous a votre wallet !');
    } else {
      tezos.setWalletProvider(wallet);
      const contract = await tezos.wallet.at(contractAddress);

      const concert_nft = concert_nfts.find(
        (elt) => (elt.address = contractAddress)
      );
      const nftNotBuyed = concert_nft.nft.slice(
        0,
        concert_nft.nft.length - concert_nft.concert.nft_vendus
      );
      console.log(nftNotBuyed);
      const token = nftNotBuyed.pop();
      const operation = await contract.methods.buy_ticket(token).send();

      dispatch(buy_nft(token, contractAddress));
    }
  }

  async function handleRefund(contractAddress) {
    tezos.setWalletProvider(wallet);
    const contract = await tezos.wallet.at(contractAddress);
    const token = concert_nfts
      .find((elt) => (elt.address = contractAddress))
      .nft.pop();

    const operation = await contract.methods.refund(contractAddress).send();

    //dispatch(create_concert(token, 'KT1JXEthzfrNSS4jfjdYbyp9WM5mYbBcZbVC'));
  }

  return (
    <>
      <h1>Concerts</h1>
      <section className="concerts">
        {concert_nfts.map((concert_nft, i) => {
          return (
            <Card key={concert_nft.concert.title} className="concert" key={i}>
              <Card.Header as="h5">{concert_nft.concert.title}</Card.Header>
              <Card.Body>
                <Card.Title>{concert_nft.concert.artist}</Card.Title>
                <Card.Text>
                  Nombre de places : {concert_nft.concert.capacity}
                </Card.Text>
                <Card.Text>
                  Date du concert : {concert_nft.concert.date}
                </Card.Text>
                <Card.Text>
                  Prix : {concert_nft.concert.priceTezos} Tz
                </Card.Text>

                <Card.Text>
                  Places disponibles :
                  {concert_nft.nft.length - concert_nft.concert.nft_vendus}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() =>
                    handleBuyTicket(concert_nft.concert.contractAddress)
                  }
                >
                  Acheter un billet
                </Button>
                <Button
                  variant="primary"
                  onClick={() =>
                    handleRefund(concert_nft.concert.contractAddress)
                  }
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
