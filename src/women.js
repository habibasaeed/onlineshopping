import "./men.css";
import { Link } from 'react-router-dom';
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import women1 from './images/women1.jpg';
import women2 from './images/women2.jpg';
import women3 from './images/women3.jpg';
import women4 from './images/women4.jpg';
import women5 from './images/women5.jpg';
import women6 from './images/women6.jpg';
import women7 from './images/women7.jpg';
import women8 from './images/women8.jpg';
import women9 from './images/women9.jpg';
import women10 from './images/women10.jpg';
import women11 from './images/women11.jpg';
import women12 from './images/women12.jpg';
import women13 from './images/women13.jpg';
import women14 from './images/women14.jpg';


const Headerwomen = () => {
    return (  
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
 <ul id="womennav">
      <li><Link to="/TopsW">Tops</Link></li> 
      <li><Link to="/ButtomsW"> Pants</Link></li>
      <li><Link to="/ShoesW">Shoes</Link></li>
    </ul>
        </nav>
        );
    }
  const Women = () => {
    const carouselStyle = {
      width: '600px',
      height: '600px',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: ' auto',
      display:'inline-block',
    };
  
    const slideStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      display:'inline-block',
    };
  
    const imageStyle = {
      maxHeight: '100%',
      maxWidth: '100%',
    };
    return (
        <div style={carouselStyle}>
          <CarouselProvider
            
            naturalSlideWidth={400}
            naturalSlideHeight={400}
            totalSlides={6}
            visibleSlides={1}
            infinite={true}
            isPlaying={true}
            interval={2000}
            dragEnabled={false}
            touchEnabled={false}
            playDirection="forward"
            transitionMs={500}
          >
            <Slider>
              <Slide index={0} style={slideStyle}>
                <img src={women1} alt="women 1" style={imageStyle} />
              </Slide>
              <Slide index={1} style={slideStyle}>
                <img src={women2} alt="women 2" style={imageStyle} />
              </Slide>
              <Slide index={2} style={slideStyle}>
                <img src={women3} alt="women 3" style={imageStyle} />
              </Slide>
              <Slide index={3} style={slideStyle}>
                <img src={women4} alt="women 4" style={imageStyle} />
              </Slide>  <Slide index={4} style={slideStyle}>
                <img src={women5} alt="women 5" style={imageStyle} />
              </Slide>
              <Slide index={5} style={slideStyle}>
                <img src={women6}  style={imageStyle} />
              </Slide>
              <Slide index={6} style={slideStyle}>
                <img src={women7}  style={imageStyle} />
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
    );
};

     const Women2 = () => {
        const carouselStyle2 = {
            width: '600px',
            height: '600px',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'start',
            margin: '20px 20px',
            display:'inline-block',

          };
        
          const slideStyle2 = {
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'start',
            height: '100%',
            display:'inline-block',
          };
        
          const imageStyle2 = {
            maxHeight: '100%',
            maxWidth: '100%',
          };
    return (
      <div style={carouselStyle2}>
        <CarouselProvider
          naturalSlideWidth={400}
          naturalSlideHeight={400}
          totalSlides={6}
          visibleSlides={1}
          infinite={true}
          isPlaying={true}
          interval={2000}
          dragEnabled={false}
          touchEnabled={false}
          playDirection="forward"
          transitionMs={500}
        >
          <Slider>
            <Slide index={0} style={slideStyle2}>
              <img src={women8} alt="women 3" style={imageStyle2} />
            </Slide>
            <Slide index={1} style={slideStyle2}>
              <img src={women9} alt="women 4" style={imageStyle2} />
            </Slide>
            <Slide index={2} style={slideStyle2}>
              <img src={women10} alt="women 5" style={imageStyle2} />
            </Slide>
            <Slide index={3} style={slideStyle2}>
                <img src={women11} alt="women 8" style={imageStyle2} />
              </Slide> 
               <Slide index={4} style={slideStyle2}>
                <img src={women12}  style={imageStyle2} />
              </Slide>
              <Slide index={5} style={slideStyle2}>
                <img src={women13}  style={imageStyle2} />
              </Slide>
              <Slide index={6} style={slideStyle2}>
                <img src={women14}  style={imageStyle2} />
              </Slide>
          </Slider>   
        </CarouselProvider>
   </div>
    );
  };


  export const WomenPage = () => {
    return (
      <>
     <Headerwomen/>
        <Women />
        <Women2 />
      </>
    );
  };