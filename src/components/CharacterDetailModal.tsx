// src/components/CharacterDetailModal.tsx
import React from 'react';

interface CharacterDetailModalProps {
    character: {
        id: string;
        name: string;
        image: string;
        // Add other properties as needed
    };
    onClose: () => void;
}

const CharacterDetailModal: React.FC<CharacterDetailModalProps> = ({ character, onClose }) => {
    return (
        <div>
            <button onClick={onClose}>Close</button>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            {/* Add other details */}
        </div>
    );
};

export default CharacterDetailModal;
