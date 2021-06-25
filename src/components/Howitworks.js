import React from 'react'
import './Howitworks.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function Howitworks() {
    return (
        <div className="howitworksbg">
            
            <Container fluid="sm pb-5">
                <Row className="justify-content-md-center">
                    <Col><h2 className="h2hiw">How it works</h2></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <Card style={{ width: '18rem' }} className="hitimgbg">
                            <Card.Img className="hitimg" variant="top" src="https://i.imgur.com/OUiBtcF.jpg" />
                        </Card>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Howitworks
