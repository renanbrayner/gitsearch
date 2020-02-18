import React from "react";
import "./Card.css"

function Card(props) {
    return(
        <div className="card">
            <div className="profile-img" style={{backgroundImage: `url(${props.avatar})`}}></div>
            <div className="flex">
                <h2 className="username">{props.login}</h2>
                <a href={`https://github.com/${props.login}`} target="_blank" className="profile-link">Ver perfil</a>
            </div>
            <p>repositórios - {props.repos}</p>
            <p>seguidores - {props.followers}</p>
            <p className="last-p">seguindo - {props.following}</p>
        </div>
    );
};

export default Card;