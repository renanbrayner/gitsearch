import React from "react";
import "./Card.css"

function Card() {
    return(
        <div className="card">
            <div className="profile-img"></div>
            <h2 className="username">PlaceHolder</h2>
            <p>repos</p>
            <p>followers</p>
            <p className="last-p">following</p>
        </div>
    );
};

export default Card;