import React, { useState } from "react";
import arrowDown from "../icons/arrowDownWhite.png";
import arrowUp from "../icons/arrowUpWhite.png";

const Dropdown = (props) => {
  const title = props.title;
  const content = props.content;

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      // if clicked on but is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div className="accordionSection">
      <div className="accordionContainer">
        <div className="accordionButtonWrap" onClick={() => toggle(content)}>
          <h1>{title}</h1>
          <span>
            {/* To switch the arrow when content is open or closed */}
            {clicked === content ? (
              <img src={arrowUp} alt="arrowUp" />
            ) : (
              <img src={arrowDown} alt="arrowDown" />
            )}
          </span>
        </div>
        {/* If the title is "Équipements", then the content will be a list 
          if not then just a text container
        */}
        {clicked === content ? (
          title === "Équipements" ? (
            <ul className="dropdownContent">
              {content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="dropdownContent">{content}</p>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
