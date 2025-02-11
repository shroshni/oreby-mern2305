import React, { useState } from 'react'
import Images from './Images'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";






const Banner = () => {
 
  let [active, setActive]= useState("0");
      
  var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,



      responsive: [
     
        {
          breakpoint: 600,
          settings: {
            appendDots: dots => (
              <div
                style={{
                  backgroundColor: "transparent",
                  borderRadius: "10px",
                  padding: "10px",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%) translateX(-50%)",
                  left: "5%",
      
                }}
              >
                <ul style={{ margin: "0px" }}> {dots} </ul>
              </div>
            ),
  
            customPaging: i => (
              <div
                style={i=== active? 
                  {
                      width: "20px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      padding: "5px 0px",
                      fontSize:"10px",
                      fontWeight:"500",
                    }
                    
                    : {
                      width: "20px",
                      color: "#262626",
                      fontSize:"0px",
                      borderRight: "3px #FFFFFF solid",
                      padding: "5px 0px",
                    }
                  }
                
               
              >
                0{i + 1}
              </div>
            ),
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      

      
      beforeChange: (prev, next) => {
        setActive(next);
      },
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "transparent",
            borderRadius: "10px",
            padding: "10px",
            position: "absolute",
            
            top: "50%",
            transform: "translateY(-50%) translateX(-50%)",
            left: "10%",

          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={i=== active? 
            {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "9px 0px",
                fontSize:"16px",
                fontWeight:"500",
              }
              
              : {
                width: "30px",
                color: "#262626",
                fontSize:"0px",
                borderRight: "3px #FFFFFF solid",
                padding: "9px 0px",
              }
            }
          
         
        >
          0{i + 1}
        </div>
      )
    };
  
  
   
  
    return (
      
     <div className=''>
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
     </div>
        
     
         
      
       
      
    
    );
  
}

export default Banner 