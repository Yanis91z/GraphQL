// src/App.tsx
import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetailModal from './components/CharacterDetailModal';

const App: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);

  const handleCharacterClick = (character: any) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      <CharacterList onCharacterClick={handleCharacterClick} />
      {selectedCharacter && <CharacterDetailModal character={selectedCharacter} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;