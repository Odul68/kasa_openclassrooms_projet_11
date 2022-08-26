import React, { useState } from "react";
import arrowRight from "../icons/arrowRightSlider.png";
import arrowLeft from "../icons/arrowLeftSlider.png";

const Slider = (props) => {
  const images = props.images;
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1); // Si sur la première image, retourne à la dernière, sinon juste la précédente
  };

  const next = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1); // Si sur la dernière image, retourne à la première, sinon juste la suivante
  };

  if (images.length === 1) {
    return (
      <div className="sliderContainer">
        <img src={images[index]} alt="" className="sliderImage" />
      </div>
    );
  } else {
    return (
      <div className="sliderContainer">
        <img
          src={arrowLeft}
          alt=""
          className="sliderPrevArrow"
          onClick={prev}
        />
        <img src={images[index]} alt="" className="sliderImage" />
        <img
          src={arrowRight}
          alt=""
          className="sliderNextArrow"
          onClick={next}
        />
        <span className="sliderIndicators">
          {index + 1}/{images.length}
        </span>
      </div>
    );
  }
};

export default Slider;
