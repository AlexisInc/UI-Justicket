import { TezosToolkit } from '@taquito/taquito';
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { billetSelector, walletSelector } from '../reducer.ts';
const Billet = () => {
  const billets = useSelector(billetSelector);
  const wallet = useSelector(walletSelector);
  const tezos = new TezosToolkit('https://ghostnet.tezos.marigold.dev');

  useEffect(() => {
    console.log('loaad');
    async function getNft() {}

    getNft();
  }, []);

  return (
    <>
      <h1>Mes billets</h1>
      <section className="billets">
        <Card className="billet">
          <Card.Header as="h5">Nom de billet</Card.Header>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>Id billet</Card.Text>
            <Button variant="primary">Transférer</Button>
            <Button variant="primary">Burn</Button>
          </Card.Body>
        </Card>

        <Card className="billet">
          <Card.Header as="h5">Nom de billet</Card.Header>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>Id billet</Card.Text>
            <Button variant="primary">Transférer</Button>
            <Button variant="primary">Burn</Button>
          </Card.Body>
        </Card>

        <Card className="billet">
          <Card.Header as="h5">Nom de billet</Card.Header>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>Id billet</Card.Text>
            <Button variant="primary">Transférer</Button>
            <Button variant="primary">Burn</Button>
          </Card.Body>
        </Card>

        <Card className="billet">
          <Card.Header as="h5">Nom de billet</Card.Header>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>Id billet</Card.Text>
            <Button variant="primary">Transférer</Button>
            <Button variant="primary">Burn</Button>
          </Card.Body>
        </Card>

        <Card className="billet">
          <Card.Header as="h5">Nom de billet</Card.Header>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>Id billet</Card.Text>
            <Button variant="primary">Transférer</Button>
            <Button variant="primary">Burn</Button>
          </Card.Body>
        </Card>

        <Card className="billet">
          <Card.Header as="h5">Nom de billet</Card.Header>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>Id billet</Card.Text>
            <Button variant="primary">Transférer</Button>
            <Button variant="primary">Burn</Button>
          </Card.Body>
        </Card>

        <Card className="concert">
          <Card.Header as="h5">Nom de billet</Card.Header>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>Id billet</Card.Text>
            <Button variant="primary">Transférer</Button>
            <Button variant="primary">Burn</Button>
          </Card.Body>
        </Card>

        <Card className="concert">
          <Card.Header as="h5">Nom de billet</Card.Header>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>Id billet</Card.Text>
            <Button variant="primary">Transférer</Button>
            <Button variant="primary">Burn</Button>
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

export default Billet;
