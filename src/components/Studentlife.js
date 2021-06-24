import React from 'react'
import './Studentlife.css'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import stulife1 from '../img/stulife1.png'
import stulife2 from '../img/stulife2.png'
import stulife3 from '../img/stulife3.png'
import seemoreicon3 from '../icons/seemoreicon3.svg'

function Studentlife() {
    return (
        <div className="studentlifebg">

            <Container fluid="sm pb-5">
                <Row className="justify-content-md-center">
                    <Col><h2 className="h2studentlife">#StudentLife</h2></Col>
                </Row>

                <Row className="justify-content-md-center text-center pb-4">
                    <Col>
                        <Card className="stucard">
                            <Card.Img variant="top" src={stulife1} />
                            <Card.Body>
                                <Card.Text className="stup">How to book an accommodation in two minutes</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="stucard">
                            <Card.Img variant="top" src={stulife2} />
                            <Card.Body>
                                <Card.Text className="stup">How to book an accommodation in two minutes</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="stucard">
                            <Card.Img variant="top" src={stulife3} />
                            <Card.Body>
                                <Card.Text className="stup">What do you need to rent an accommodation </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="justify-content-md-center text-center">
                    <Col>
                        <Button variant="light" size="lg" className="stubtn">
                            See more <img src={seemoreicon3} alt="" />
                        </Button>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Studentlife
