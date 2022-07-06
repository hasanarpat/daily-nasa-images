import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
export const Archive = () => {
  let navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  let url =
    "https://api.nasa.gov/planetary/apod?count=50&api_key=API_KEY";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        setImages(data);
      });
  }, []);

  return (
    <div className="row">
      {isLoaded ? (
        images.map((c, i) => (
          <div className="element">
            <img
              onClick={() => {
                navigate("../single/" + c.date);
              }}
              key={i}
              src={c?.url}
            />
            <div className="exp">
              <p>{c.explanation.slice(0, 256) + "..."}</p>
              <a href={c.explanation}> Read More</a>
            </div>
          </div>
        ))
      ) : (
        <div className="isLoading">
          <h1>Please wait while loading data...</h1>
        </div>
      )}
    </div>
  );
};
