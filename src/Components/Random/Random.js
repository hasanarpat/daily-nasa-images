import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";

export const Random = () => {
  
  let url =
    "https://api.nasa.gov/planetary/apod?count=9&api_key=API_KEY";
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const nasa = data;
        setImages(nasa);
      });
  }, []);


  

  return (
    <div>
      
    <Carousel images={images} />
      
    </div>
  );
};
