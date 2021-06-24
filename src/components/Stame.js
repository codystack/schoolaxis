import React from 'react'
import './Stame.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import colors from '../img/colors.svg'
import customize from '../img/customize.svg'
import animate from '../img/animate.svg'
import seemoreicon1 from '../icons/seemoreicon1.svg'

function Stame() {
    return (
        <div className="stamebg">

        <Container fluid="sm pb-5">
            <Row className="justify-content-md-center">
                <Col><h2 className="h2stame">Student Accommodation<br />Made Easy</h2></Col>
            </Row>

            <Row className="justify-content-md-center text-center">
                <Col xs={6} md={4}>
                    <img src={colors} alt="" />
                    <h5 className="pt-4 h5stame">Easy to use</h5>
                    <p className="pstame">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </Col>
                <Col xs={6} md={4}>
                    <img src={customize} alt="" />
                    <h5 className="pt-4 h5stame">Easy to use</h5>
                    <p className="pstame">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </Col>
                <Col xs={6} md={4}>
                    <img src={animate} alt="" />
                    <h5 className="pt-4 h5stame">Easy to use</h5>
                    <p className="pstame">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </Col>
            </Row>

            <Row className="justify-content-md-center text-center">
                <Col>
                    <Button variant="light" size="lg" className="stamebtn">
                        Know us more <img src={seemoreicon1} alt="" />
                    </Button>
                </Col>
            </Row>
        </Container>
            
        </div>
    )
}

export default Stame
