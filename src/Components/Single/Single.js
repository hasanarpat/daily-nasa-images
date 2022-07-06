import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

export const Single = () => {

  
    const {date} = useParams();
    const [imgData,setImgData]=useState(null);
    const url="https://api.nasa.gov/planetary/apod?date="+date+"&api_key=API_KEY";
    
    console.log(date);

    useEffect(()=>{
      fetch(url).then(response=>response.json()).then(
        data=>setImgData(data));
    },[])

    function getPicture(url){
      window.open(
          url,
          "_blank",
          "noopener,noreferrer"
        );
    }
  

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{imgData ? imgData.title : <></>}</h2>
      <h5>{imgData ? imgData.date : <></>}</h5>
      <img onClick={()=>{getPicture(imgData.hdurl)}} 
      className={styles.img} src={imgData ? imgData.hdurl
       : ''}>
       </img>
      <br />
      <p>{imgData ? imgData.explanation : <></>}</p>
      <h4>Image Credit: {imgData ? imgData.copyright : <> Undefined</>}</h4>
    </div>
  )
}