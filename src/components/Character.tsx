import { useState } from 'react';

type CharacterProps = {
  character: {
    id: number;
    name: string;
    species: string;
    origin: {
      name: string;
    };
    image: string;
  };
};
export default function Character({ character }: CharacterProps) {
  const [showMore, setShowMore] = useState(false);
  const handleSeeMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        <img
          className="rounded-t-lg"
          src={character.image}
          alt={character.name}
        />
        <div className="py-6 px-8 rounded-lg bg-white">
          <h2 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{character.name}.</h2>
          <p className="text-gray-700 tracking-wide">{character.species}</p>
          {showMore && (
            <div className="mt-4">
              <p className="text-gray-700">{character.origin.name}</p>
              {/* Add more details you want to show */}
            </div>
          )}
          <button
            className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
            onClick={handleSeeMoreClick}>
            {showMore ? 'Hide Details' : 'See More'}
          </button>
        </div>
        <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg text-black">
          <span className="text-md">{character.id}</span>
        </div>
      </div>
    </>
  );
}
