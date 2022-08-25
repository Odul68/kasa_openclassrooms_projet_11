import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Accomodation() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("accomodation.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="accomodationCardsContainer">
      {data.map((item) => (
        <Link
          to={`/accomodationDetails/${item.id}`} // Goes to the accomodationDetails page with the correct id
          key={item.id}
          className="accomodationCards"
        >
          <img src={item.cover} alt="cover" />
          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
}
