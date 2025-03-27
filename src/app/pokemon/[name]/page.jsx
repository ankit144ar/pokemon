"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Breadcrumb } from "../../../components/Breadcrumb";

export default function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (!name) return;
    async function fetchPokemonDetails() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      console.log(data);
      setPokemon(data);
    }
    fetchPokemonDetails();
  }, [name]);

  if (!pokemon) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Breadcrumb name={pokemon.name} />
      <div className="flex justify-center flex-col my-4 max-w-[300px] mx-auto rounded-lg overflow-auto">
        <div className="flex justify-center bg-[#76a0f0] py-7">
          <img
            src={pokemon.sprites?.front_default}
            alt={pokemon.name}
            className="w-32 h-32"
          />
        </div>
        <div className="p-4 text-lg bg-[#fbfba3]">
          <p className="text-[16px]">
            <span className="font-semibold">Name: </span>
            {pokemon?.name || ''}
          </p>
          <p className="text-[16px]"><span  className="font-semibold">Type: </span> {pokemon.types.map((type,index) => <span key={index}>{type?.type?.name}{index !== pokemon.types.length - 1 ? ',' : ''}</span>)}</p>
          <p className="text-[16px]"><span  className="font-semibold">Stats: </span>{pokemon.stats.map((data,index) => <span key={index}>{data?.stat?.name}{index !== pokemon.stats.length - 1 ? ', ' : ''}</span>)}</p>
          <p className="text-[16px]"><span className="font-semibold">Abilities: </span>{pokemon.abilities.map((data,index) => <span key={index}>{data?.ability?.name}{index !== pokemon.abilities.length - 1 ? ', ' : ''}</span>)}</p>
          <p className="text-[16px]"><span  className="font-semibold">Some Moves: </span>{pokemon.moves.slice(0, 5).map((data,index) => <span key={index}>{data?.move?.name}{index !== pokemon.moves.length - 1 ? ', ' : ''}</span>)}</p>
        </div>
      </div>
    </div>
  );
}
