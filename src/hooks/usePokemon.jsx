"use client";
import { useState, useEffect } from "react";

export function usePokemon() {
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchTypes() {
      const res = await fetch("https://pokeapi.co/api/v2/type");
      const data = await res.json();
      setTypes(data.results);
    }
    fetchTypes();
  }, []);

  useEffect(() => {
    async function fetchPokemons() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
      const data = await res.json();
      setPokemons(data.results);
      setFilteredPokemons(data.results);
    }
    fetchPokemons();
  }, []);

  useEffect(() => {
    let filtered = pokemons.filter((pokemon) =>
      pokemon.name.includes(searchTerm.toLowerCase())
    );

    if (selectedType) {
      async function filterByType() {
        const res = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
        const data = await res.json();
        const typePokemons = data.pokemon.map((p) => p.pokemon.name);
        filtered = filtered.filter((pokemon) => typePokemons.includes(pokemon.name));
        setFilteredPokemons(filtered);
      }
      filterByType();
    } else {
      setFilteredPokemons(filtered);
    }
  }, [searchTerm, selectedType, pokemons]);

  return { types, filteredPokemons, setSearchTerm, setSelectedType };
}