import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';

interface CharacterListProps {
    onCharacterClick: (character: any) => void;
}

const CharacterList: React.FC<CharacterListProps> = ({ onCharacterClick }) => {
    const { loading, error, data } = useQuery(GET_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <h2>Characters</h2>
            <ul>
                {/* {data.characters.results.map((character: any) => (
                    <li key={character.id} onClick={() => onCharacterClick(character)}>
                        <img src={character.image} alt={character.name} />
                        {character.name}
                    </li>
                ))} */}
            </ul>
        </div>
    );
};

export default CharacterList;