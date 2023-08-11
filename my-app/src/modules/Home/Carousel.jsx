import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
function CarouselComponent({setSelectedSubcategory}) {

  return (
    <Carousel autoPlay interval={1000}>
      <div className="carousel-slide">
        <img src={process.env.PUBLIC_URL + "/media/s1.png"} alt="Slide 1" />
        <div className="carousel-overlay">
          <h1>Luxury Floral Boxes</h1>
          <h5>Shop Now from <b>'Flower Boxes'</b></h5><br/>
          <button className="carousel-button" onClick={() => setSelectedSubcategory("FLORAL BOXES")}>Shop Now</button>
        </div>
      </div>
      <div className="carousel-slide">
        <img src={process.env.PUBLIC_URL + "/media/s2.png"} alt="Slide 2" />
        <div className="carousel-overlay">
           <h1>Blooms Never Go Out of Style</h1>
          <h5>Shop Now from <b>'Floral Baskets</b></h5><br/>
          <button className="carousel-button" onClick={() => setSelectedSubcategory("FLORAL BASKETS")}>Shop Now</button>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselComponent;
