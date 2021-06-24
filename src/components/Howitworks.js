import React from 'react'
import './Howitworks.css'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import startsearch from '../img/startsearch.jpg'

function Howitworks() {
    return (
        <div className="howitworksbg">
            
            <Container fluid="sm pb-5">
                <Row className="justify-content-md-center">
                    <Col><h2 className="h2hiw">How it works</h2></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className="hitimgbg text-center">
                        <img src={startsearch} alt="" rounded />
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Howitworks
