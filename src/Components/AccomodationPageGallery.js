import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export default function AccomodationGallery({ accomodation }) {
  const [slideNumber, setSlideNumber] = useState(0); // Starts at 0

  return (
    <div className="carousel-wrapper">
      <div className="carousel-indicators">
        {slideNumber + 1} / {accomodation.pictures.length}
      </div>
      <Carousel onSlide={(e) => setSlideNumber(e)}>
        {accomodation.pictures.map(
          (
            picture // the number changes with the slide from "onSlide"
          ) => (
            <Carousel.Item key={picture}>
              <img className="d-block w-100" src={picture} />
            </Carousel.Item>
          )
        )}
      </Carousel>
    </div>
  );
}
