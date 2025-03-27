"use client";
import { usePokemon } from "../hooks/usePokemon";
import { SearchForm } from "../components/SearchForm";
import { PokemonCard } from "../components/PokemonCard";

export default function Home() {
  const { types, filteredPokemons, setSearchTerm, setSelectedType } = usePokemon();

  return (
    <div className=" mx-auto ">
      <h1 className="text-4xl font-bold text-center mb-6">Pokémon Search</h1>
      <SearchForm types={types} setSearchTerm={setSearchTerm} setSelectedType={setSelectedType} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
