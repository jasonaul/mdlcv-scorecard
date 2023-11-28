import React, { useState } from 'react';
import DelegateInformation from './components/DelegateInformation.js'; 
import DistrictOrAddressSelector from './components/DistrictorAddressSelector.js';
import InitialSelector from './components/InitialSelector.js';
import SenateSelector from './components/SenateSelector.js';
import SenateInformation from './components/SenateInformation.js';
import Header from './components/Header.js';
import Modal from './components/Modal.js';

const App = () => {
  const [selectedChamber, setSelectedChamber] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false); // State for modal visibility

  const handleRestart = () => {
    setSelectedChamber(null);
    setSelectedDistrict(null);
  };

  const handleChamberChoice = (chamber) => {
    setSelectedChamber(chamber);
  };

  return (
    <div>
      <Header />
      <div style={{ position: 'relative', margin: '1em' }}>
        <button onClick={handleRestart}>Scorecard Home</button>
        <button 
          style={{ position: 'absolute', top: 0, right: 0 }} 
          onClick={() => setShowInstructionsModal(true)}
        >
          How to Use this Scorecard
        </button>

        {showInstructionsModal && (
          <Modal onClose={() => setShowInstructionsModal(false)}>
            {/* Modal content here */}
            <p>To view your representative's score, please click on either "Maryland House of Delegates" or "Maryland Senate" to find your district and representative. If you do not know your district or representative, you can use the "Who represents you in Annapolis?" tool on this page.</p>
          </Modal>
        )}


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

  );
};

export default App;

