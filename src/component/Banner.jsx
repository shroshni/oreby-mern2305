import React from 'react'
import Images from './Images'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Container from './Container'





const Banner = () => {
 
  
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      
      <Container>
         <Slider {...settings}>
        <div>
          <Images  src="images/banner.png" alt="banner" />
        </div>
        
        <div>
          <Images src="images/banner.png" alt="banner" />
        </div>
        
        <div>
          <Images src="images/banner.png" alt="banner" />
        </div>
        
        <div>
          <Images src="images/banner.png" alt="banner" />
        </div>
        
      </Slider>
      </Container>
         
      
    
    );
  
}

export default Banner 