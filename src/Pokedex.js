import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = (props) => {
	return (
		<div className="Pokedex">
			<h1 className="Pokedex-heading">Pokedex</h1>
			{props.pokemon.map((p) => {
				return (
					<Pokecard
						key={p.id}
						name={p.name}
						image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
						type={p.type}
					/>
				);
			})}
		</div>
	);
};

export default Pokedex;
