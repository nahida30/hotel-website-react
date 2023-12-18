import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Property from './Property';
import { useEffect, useState } from 'react';
import { property } from 'lodash';



const PropertyType = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [images, setImages] = useState([])
  useEffect(()=>{
    fetch("/data.json")
    .then(res => res.json())
    .then(data => setImages(data))

  },[])

 
  return (
    <div className='px-32'>
      <h1>Property Type</h1>

      <Carousel responsive={responsive}>
       {images.map(image => <Property key={property.id} image={image}></Property>)}
      
      
      
      </Carousel>
    </div>
  );
};

export default PropertyType;
