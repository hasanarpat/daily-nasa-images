import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import "./styles.css";

export default class Carousel extends Component {
  render() {
    const openInNewTab = (url) => {
      window.open(url, "_blank", "noopener,noreferrer");
    };

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    const data = this.props.images;
    console.log(data);
    return (
      <div>
        {data.length > 0 ? (
          <div>
            <h2> Multiple items </h2>
            <Slider {...settings}>
              <div>
                <img
                  onClick={() =>
                    openInNewTab("http://localhost:3000/single/" + data[0].date)
                  }
                  className="image"
                  src={data[0].url}
                />
              </div>
              <div>
                <img
                  onClick={() =>
                    openInNewTab("http://localhost:3000/single/" + data[1].date)
                  }
                  className="image"
                  src={data[1].url}
                />
              </div>
              <div>
                <img
                  onClick={() =>
                    openInNewTab("http://localhost:3000/single/" + data[2].date)
                  }
                  className="image"
                  src={data[2].url}
                />
              </div>
              <div>
                <img
                  onClick={() =>
                    openInNewTab("http://localhost:3000/single/" + data[3].date)
                  }
                  className="image"
                  src={data[3].url}
                />
              </div>
              <div>
                <img
                  onClick={() =>
                    openInNewTab("http://localhost:3000/single/" + data[4].date)
                  }
                  className="image"
                  src={data[4].url}
                />
              </div>
              <div>
                <img
                  onClick={() =>
                    openInNewTab("http://localhost:3000/single/" + data[5].date)
                  }
                  className="image"
                  src={data[5].url}
                />
              </div>
              <div>
                <img
                  onClick={() =>
                    openInNewTab("http://localhost:3000/single/" + data[6].date)
                  }
                  className="image"
                  src={data[6].url}
                />
              </div>
              <div>
                <img
                  onClick={() =>
                    openInNewTab("http://localhost:3000/single/" + data[7].date)
                  }
                  className="image"
                  src={data[7].url}
                />
              </div>
              <div>
                <img
                  onClick={() =>
                    openInNewTab("http://localhost:3000/single/" + data[8].date)
                  }
                  className="image"
                  src={data[8].url}
                />
              </div>
            </Slider>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
