import Link from "next/link";
export function PokemonCard({ pokemon }) {
  return (
    <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
      <div className=" border-[#ddd] rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 overflow-auto">
        <div className="bg-white p-7">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`}
            alt={pokemon.name}
            className="w-24 h-24 mx-auto"
            width={96}
            height={96}
          />
        </div>
        <div className="p-4 ">
          <p className=" capitalize font-medium font-semibold text-[#31616df7]">{pokemon.name}</p>
          <br />
          <button className="text-blue-600 text-[14px] cursor-pointer">Details</button>
        </div>
      </div>
    </Link>
  );
}
