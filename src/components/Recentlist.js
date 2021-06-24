import React, { useState } from 'react'
import './Recentlist.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Recentslide from './Recentslide'
import Recentslide1 from './Recentslide1'
import Recentslide2 from './Recentslide2'
import Recentslide3 from './Recentslide3'
import seemoreicon2 from '../icons/seemoreicon2.svg'
import mapicon from '../icons/mapicon.svg'
import Rating from 'react-simple-star-rating'


function Recentlist() {

    const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic

  }
    return (
        <div className="recentlistbg">

            <Container fluid="sm pb-5">
                <Row className="justify-content-md-center">
                    <Col><h2 className="h2recent">Recently Listed</h2></Col>
                </Row>

                <Row className="justify-content-md-center pb-5">
                    <Col>
                       <Recentslide />
                    </Col>
                    <Row className="slideinfo">
                        <Col className="slideinfo1">
                            <h5 className="h5slide">St. Peters BLVD, Turin</h5>
                            <Rating onClick={handleRating} ratingValue={rating} size={20} label ransition fillColor='orange' emptyColor='gray' className='foo' // Will remove the inline style if applied
                            />
                            <Button className="slideprice">£3500/month</Button>
                            <img src={mapicon} alt="" /> <p>25 Mins drive to Oxford University</p>
                            <span><p>1 Toilet and 1 Bathroom</p></span>
                        </Col>
                    </Row>
                    
                    <Col>
                       <Recentslide1 />
                    </Col>

                    <Row className="slideinfo">
                        <Col className="slideinfo1">
                            <h5 className="h5slide">King's Crest Accommodation</h5>
                            <Rating onClick={handleRating} ratingValue={rating} size={20} label ransition fillColor='orange' emptyColor='gray' className='foo' // Will remove the inline style if applied
                            />
                            <Button className="slideprice">£3500/month</Button>
                            <img src={mapicon} alt="" /> <p>25 Mins drive to Oxford University</p>
                            <span><p>1 Toilet and 1 Bathroom</p></span>
                        </Col>
                    </Row>
                    
                </Row>

                <Row className="justify-content-md-center pb-5">
                    <Col>
                       <Recentslide2 />
                    </Col>

                    <Row className="slideinfo">
                        <Col className="slideinfo1">
                            <h5 className="h5slide">King's Crest Accommodation</h5>
                            <Rating onClick={handleRating} ratingValue={rating} size={20} label ransition fillColor='orange' emptyColor='gray' className='foo' // Will remove the inline style if applied
                            />
                            <Button className="slideprice">£3500/month</Button>
                            <img src={mapicon} alt="" /> <p>25 Mins drive to Oxford University</p>
                            <span><p>1 Toilet and 1 Bathroom</p></span>
                        </Col>
                    </Row>

                    <Col>
                       <Recentslide3 />
                    </Col>

                    <Row className="slideinfo">
                        <Col className="slideinfo1">
                            <h5 className="h5slide">St. Peters BLVD, Turin</h5>
                            <Rating onClick={handleRating} ratingValue={rating} size={20} label ransition fillColor='orange' emptyColor='gray' className='foo' // Will remove the inline style if applied
                            />
                            <Button className="slideprice">£3500/month</Button>
                            <img src={mapicon} alt="" /> <p>25 Mins drive to Oxford University</p>
                            <span><p>1 Toilet and 1 Bathroom</p></span>
                        </Col>
                    </Row>

                </Row>
                

                <Row className="justify-content-md-center text-center">
                    <Col>
                        <Button variant="primary" size="lg" className="recentbtn">
                            See more <img src={seemoreicon2} alt="" />
                        </Button>
                    </Col>
                </Row>
             </Container>
            
        </div>
    )
}

export default Recentlist
