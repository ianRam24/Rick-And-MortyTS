import { SetStateAction, useEffect, useState } from 'react';
import Character from './Character';
import NextPage from './NextPage';

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export default function CharactersList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    getData();
  }, [page]);

  if (loading) {
    return <div>Loading</div>;
  }
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchTerm(e.target.value);
  };
  const filteredCharacters = characters.filter(char => char.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <div>
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search characters..."
            className="py-2 px-4 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {filteredCharacters.map(character => {
            return (
              <Character
                key={character.id}
                character={character}
              />
            );
          })}
          <NextPage
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </>
  );
}
