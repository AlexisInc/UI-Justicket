import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { concertSelector } from "../reducer.ts";

const Concert = ()=>{

    const concerts = useSelector(concertSelector);

    return (
      <>
          <h1>Concerts</h1>
          <section className="concerts">
              {concerts.map( concert => {
                  return (
                    <Card className="concert" key={concert.title}>
                        <Card.Header as="h5">{concert.title}</Card.Header>
                        <Card.Body>
                            <Card.Title>{concert.artist}</Card.Title>
                            <Card.Text>
                                Nombre de places : {concert.capacity}
                            </Card.Text>
                            <Card.Text>
                                Date du concert : {concert.date}
                            </Card.Text>
                            <Card.Text>
                                Prix : {concert.priceTezos} Tz
                            </Card.Text>
                            <Button variant="primary">Acheter un billet</Button>
                        </Card.Body>
                    </Card>
                  )
                } )
              }
          </section>
      </>

    );
}



export default Concert;