import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import recentslide1 from '../img/recentslide1.png'
import recentslide2 from '../img/recentslide2.png'
import recentslide3 from '../img/recentslide3.png'
import recentslide4 from '../img/recentslide4.png'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={recentslide4}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={recentslide3}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={recentslide2}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={recentslide1}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;