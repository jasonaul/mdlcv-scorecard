import React, { useState } from 'react';
import DelegateInformation from './components/DelegateInformation.js'; 
import DistrictOrAddressSelector from './components/DistrictorAddressSelector.js';
import InitialSelector from './components/InitialSelector.js';
import SenateSelector from './components/SenateSelector.js';
import SenateInformation from './components/SenateInformation.js';
import Header from './components/Header.js';

const App = () => {
  const [selectedChamber, setSelectedChamber] = useState(null); // either 'house' or 'senate'
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const handleRestart = () => {
    setSelectedChamber(null);
    setSelectedDistrict(null);
  };

  const handleChamberChoice = (chamber) => {
    setSelectedChamber(chamber);
  };

  return (
    <div>
      <Header /> {/* Always visible header */}
      <div style={{ margin: '1em' }}>
    <div style={{ margin: '1em' }}>
      <button onClick={handleRestart}>Scorecard Home</button>

      {!selectedChamber ? (
        <InitialSelector onChoose={handleChamberChoice} />
      ) : !selectedDistrict ? (
        selectedChamber === 'house' ? (
          <DistrictOrAddressSelector onSelectDistrict={setSelectedDistrict} />
        ) : (
          <SenateSelector onSelectDistrict={setSelectedDistrict} />
        )
      ) : selectedChamber === 'house' ? (
        <DelegateInformation
          district={selectedDistrict}
          onGoBack={() => setSelectedDistrict(null)}
        />
      ) : (
        <SenateInformation
          district={selectedDistrict}
          onGoBack={() => setSelectedDistrict(null)}
        />
      )}
    </div>
    </div>
    </div>
  );
};

export default App;

