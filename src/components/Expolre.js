import React from 'react'
import './Explore.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import uk from '../img/uk.jpg'
import ny from '../img/ny.jpg'
import cali from '../img/cali.jpg'


function Expolre() {
    return (
        <div className="explore">
            <h2>Explore Popular Cities</h2>
            <Container>
                <Row className="justify-content-md-center pb-5">
                    <Col>
                        <Card className="cardlocation">
                            <Card.Img variant="top" src={uk} />
                            <Card.Body>
                                <Card.Title>London, UK</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="cardlocation">
                            <Card.Img variant="top" src={ny} />
                            <Card.Body>
                                <Card.Title>New York, USA</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="cardlocation">
                            <Card.Img variant="top" src={cali} />
                            <Card.Body>
                                <Card.Title>California, USA</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Expolre
