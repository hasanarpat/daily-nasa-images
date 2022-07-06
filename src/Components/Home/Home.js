import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Random } from "../Random/Random";

const Home = () => {
  const [imgdata, setImgData] = useState(null);

  let url = `https://api.nasa.gov/planetary/apod?date=&api_key=API_KEY`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImgData(data);
        console.log(data);}
        );
    
  }, []);

  function getPicture(url){
    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
      );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>ASTRONOMY PICTURE OF THE DAY</h2>
      <h5>{imgdata ? imgdata.date : <></>}</h5>
      <img onClick={()=>{getPicture(imgdata.hdurl)}} className={styles.img} src={imgdata ? imgdata.url : <></>}></img>
      <h3 className={styles.header2}>{imgdata ? imgdata.title : <></>}</h3>
      <br />
      <p>{imgdata ? imgdata.explanation : <></>}</p>
      <h4>Image Credit: {imgdata ? imgdata.copyright : <></>}</h4>
      <br />
      <h5>May You Interest</h5>
      <hr></hr>
      <Random />
    </div>
  );
};

export default Home;
