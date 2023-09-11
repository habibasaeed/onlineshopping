import "./men.css";
import { Link } from 'react-router-dom';
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import men5 from './images/men5.jpg';
import men6 from './images/men6.jpg';
import men7 from './images/men7.jpg';
import men8 from './images/men8.jpg';
import men9 from './images/men9.jpg';
import men10 from './images/men10.jpg';
import men11 from './images/men11.jpg';
import men12 from './images/men12.jpg';
import men13 from './images/men13.jpg';
import men14 from './images/men14.jpg';
import men15 from './images/men15.jpg';


const Headermen = () => {
    return (  
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
 <ul id="mennav">
      <li><Link to="/Tops">Tops</Link></li> 
      <li><Link to="/Buttoms"> Pants</Link></li>
      <li><Link to="/Shoes">Shoes</Link></li>
    </ul>
        </nav>
        );
    }
 const Men = () => {
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
            totalSlides={5}
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
                <img src={men5} alt="Men 1" style={imageStyle} />
              </Slide>
              <Slide index={1} style={slideStyle}>
                <img src={men6} alt="Men 2" style={imageStyle} />
              </Slide>
              <Slide index={2} style={slideStyle}>
                <img src={men7} alt="Men 3" style={imageStyle} />
              </Slide>
              <Slide index={3} style={slideStyle}>
                <img src={men11} alt="Men 7" style={imageStyle} />
              </Slide>  <Slide index={4} style={slideStyle}>
                <img src={men12} alt="Men 8" style={imageStyle} />
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
    );
};

     const Men2 = () => {
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
          totalSlides={5}
          visibleSlides={1}
          infinite={true}
          isPlaying={true}
          interval={3000}
          dragEnabled={false}
          touchEnabled={false}
          playDirection="forward"
          transitionMs={500}
        >
          <Slider>
            <Slide index={0} style={slideStyle2}>
              <img src={men8} alt="Men 3" style={imageStyle2} />
            </Slide>
            <Slide index={1} style={slideStyle2}>
              <img src={men9} alt="Men 4" style={imageStyle2} />
            </Slide>
            <Slide index={2} style={slideStyle2}>
              <img src={men10} alt="Men 5" style={imageStyle2} />
            </Slide>
            <Slide index={3} style={slideStyle2}>
                <img src={men13} alt="Men 8" style={imageStyle2} />
              </Slide>  <Slide index={4} style={slideStyle2}>
                <img src={men14} alt="Men 9" style={imageStyle2} />
              </Slide>
          </Slider>   
        </CarouselProvider>
   </div>
    );
  };


  export const MenPage = () => {
    return (
      <>
     <Headermen/>
        <Men />
        <Men2 />
      </>
    );
  };