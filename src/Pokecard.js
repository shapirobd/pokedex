import React from "react";
import "./Pokecard.css";

const Pokecard = ({ name, image, type }) => {
	return (
		<div className="Pokecard">
			<h1 className="Pokecard-name">{name}</h1>
			<img className="Pokecard-img" src={image} />
			<p>Type: {type}</p>
		</div>
	);
};

export default Pokecard;
