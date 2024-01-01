import React from "react";
import ReactDOM from "react-dom/client";
import "./Card.css";

// this props will be getting the custom attributes just like in HTML
function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="mypic" className="card_img"></img>
        <div className="card_info">
          <span className="card_category">{props.title}</span>
          <h3 className="card_title">{props.name}</h3>
          <a href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
