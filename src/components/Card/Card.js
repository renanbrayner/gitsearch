import React from "react";
import "./Card.css"

function Card() {
    return(
        <div className="card">
            <div className="profile-img"></div>
            <h2 className="username">PlaceHolder</h2>
            <p>repositórios</p>
            <p>seguidores</p>
            <p className="last-p">seguindo</p>
        </div>
    );
};

export default Card;