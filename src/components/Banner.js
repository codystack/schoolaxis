import React from 'react'
import './Banner.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import searchicon from '../icons/searchicon.svg'

function Banner() {
    return (
        <div className='banner'>
            <Header />

            <Container fluid="sm pb-5">
                <Row className="justify-content-md-center">
                    <Col>
                        <div className='width3'>
                            <h1 className='bannerh1'>Looking for the perfect student pad?</h1>
                            <Row className="justify-content-md-center">
                                <Col xs={9} className="justify-content-center">
                                    <div className="pt-5">
                                        <Form className="searchbar justify-content-center text-center">
                            
                                            <Form.Row>
                                                <Col xs={5}>
                                                    <FormControl className="formsearch" type="search" placeholder="University or City" aria-label="Search" />
                                                </Col>
                                                <Col xs={5}>
                                                    <Form.Group className="formsearch" controlId="ControlSelect1">
                                                        <Form.Control as="select">
                                                            <option selected value="">Accomodation type</option>
                                                            <option value="">Shared Apartment</option>
                                                            <option value="">Self Contained</option>
                                                            <option value="">1 Bedroom Flat</option>
                                                            <option value="">2 Bedroom Flat</option>
                                                            <option value="">BQ</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Button type="submit" className="searchbutton">
                                                        <img src={searchicon} alt="" />
                                                    </Button>
                                                </Col>
                                            </Form.Row>

                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Banner
