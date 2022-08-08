import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Accomodation(accomodation) {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("accomodation.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
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
          to={`/accomodationDetails/${item.id}`}
          key={item.id}
          className="accomodationCards"
        >
          <img src={item.cover} />
          <p>{item.title}</p>
        </Link>
      ))}
    </div>
  );
}
