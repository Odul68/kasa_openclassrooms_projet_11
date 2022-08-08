import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export default function AccomodationGallery({ accomodation }) {
  const [slideNumber, setSlideNumber] = useState(0);

  const Next = () => {
    if (slideNumber === accomodation.img.length - 1) {
      setSlideNumber(0);
    } else {
      setSlideNumber(slideNumber + 1);
    }
  };

  const Prev = () => {
    if (slideNumber === 0) {
      setSlideNumber(accomodation.img.length - 1);
    } else {
      setSlideNumber(slideNumber - 1);
    }
  };

  return (
    <>
      <Carousel>
        <div className="carousel-indicators">
          {slideNumber + 1} / {accomodation.pictures.length}
        </div>
        {accomodation.pictures.map((picture) => (
          <Carousel.Item key={picture}>
            <img className="d-block w-100" src={picture} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
