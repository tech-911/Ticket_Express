import React from "react";
import "./map.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MapData } from "./mapData";

const Map = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  };
  return (
    <div className="map_wrapper">
      <Slider className="map_carousel" {...settings}>
        {MapData.map(({ src, name }, idx) => {
          return (
            <div key={idx} className="map_item1">
              <h1 key={idx} className="map_header1">
                {name}
              </h1>
              <iframe
                key={idx + 1}
                src={src}
                width="100%"
                height="450"
                loading="eager"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                className="map_iframe"
              ></iframe>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Map;
