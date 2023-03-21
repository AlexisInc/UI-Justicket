import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { concerttSelector } from "../reducer.ts";

const Concert = ()=>{

    const concerts = useSelector(concerttSelector);

    return (
      <>
        
          <h1>Concerts</h1>
          <section className="concerts">
              <Card className="concert">
                  <Card.Header as="h5">Titre du concert</Card.Header>
                  <Card.Body>
                      <Card.Title>Artiste du concert</Card.Title>
                      <Card.Text>
                          Lieu du concert
                      </Card.Text>
                      <Card.Text>
                          Date du concert
                      </Card.Text>
                      <Card.Text>
                          Prix du concert en Tz
                      </Card.Text>
                      <Button variant="primary">Acheter un billet</Button>
                  </Card.Body>
              </Card>
              <Card className="concert">
                  <Card.Header as="h5">Titre du concert</Card.Header>
                  <Card.Body>
                      <Card.Title>Artiste du concert</Card.Title>
                      <Card.Text>
                          Lieu du concert
                      </Card.Text>
                      <Card.Text>
                          Date du concert
                      </Card.Text>
                      <Card.Text>
                          Prix du concert en Tz
                      </Card.Text>
                      <Button variant="primary">Acheter un billet</Button>
                  </Card.Body>
              </Card>
              <Card className="concert">
                  <Card.Header as="h5">Titre du concert</Card.Header>
                  <Card.Body>
                      <Card.Title>Artiste du concert</Card.Title>
                      <Card.Text>
                          Lieu du concert
                      </Card.Text>
                      <Card.Text>
                          Date du concert
                      </Card.Text>
                      <Card.Text>
                          Prix du concert en Tz
                      </Card.Text>
                      <Button variant="primary">Acheter un billet</Button>
                  </Card.Body>
              </Card>
              <Card className="concert">
                  <Card.Header as="h5">Titre du concert</Card.Header>
                  <Card.Body>
                      <Card.Title>Artiste du concert</Card.Title>
                      <Card.Text>
                          Lieu du concert
                      </Card.Text>
                      <Card.Text>
                          Date du concert
                      </Card.Text>
                      <Card.Text>
                          Prix du concert en Tz
                      </Card.Text>
                      <Button variant="primary">Acheter un billet</Button>
                  </Card.Body>
              </Card>
              <Card className="concert">
                  <Card.Header as="h5">Titre du concert</Card.Header>
                  <Card.Body>
                      <Card.Title>Artiste du concert</Card.Title>
                      <Card.Text>
                          Lieu du concert
                      </Card.Text>
                      <Card.Text>
                          Date du concert
                      </Card.Text>
                      <Card.Text>
                          Prix du concert en Tz
                      </Card.Text>
                      <Button variant="primary">Acheter un billet</Button>
                  </Card.Body>
              </Card>
              <Card className="concert">
                  <Card.Header as="h5">Titre du concert</Card.Header>
                  <Card.Body>
                      <Card.Title>Artiste du concert</Card.Title>
                      <Card.Text>
                          Lieu du concert
                      </Card.Text>
                      <Card.Text>
                          Date du concert
                      </Card.Text>
                      <Card.Text>
                          Prix du concert en Tz
                      </Card.Text>
                      <Button variant="primary">Acheter un billet</Button>
                  </Card.Body>
              </Card>
              <Card className="concert">
                  <Card.Header as="h5">Titre du concert</Card.Header>
                  <Card.Body>
                      <Card.Title>Artiste du concert</Card.Title>
                      <Card.Text>
                          Lieu du concert
                      </Card.Text>
                      <Card.Text>
                          Date du concert
                      </Card.Text>
                      <Card.Text>
                          Prix du concert en Tz
                      </Card.Text>
                      <Button variant="primary">Acheter un billet</Button>
                  </Card.Body>
              </Card>
              <Card className="concert">
                  <Card.Header as="h5">Titre du concert</Card.Header>
                  <Card.Body>
                      <Card.Title>Artiste du concert</Card.Title>
                      <Card.Text>
                          Lieu du concert
                      </Card.Text>
                      <Card.Text>
                          Date du concert
                      </Card.Text>
                      <Card.Text>
                          Prix du concert en Tz
                      </Card.Text>
                      <Button variant="primary">Acheter un billet</Button>
                  </Card.Body>
              </Card>
          </section>
      </>

    );
}



export default Concert;