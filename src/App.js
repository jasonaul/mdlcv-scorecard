import React, { useState } from 'react';
import DelegateInformation from './components/DelegateInformation.js'; // Assume you have this component
import DistrictOrAddressSelector from './components/DistrictorAddressSelector.js'


const App = () => {
  // State to keep track of selected district
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  // Handler for when a district is selected
  const handleSelectDistrict = (district) => {
    setSelectedDistrict(district);
  };

  return (
    <div style={{ margin: '1em' }}>
      {!selectedDistrict ? (
        <DistrictOrAddressSelector onSelectDistrict={handleSelectDistrict} />
      ) : (
        <DelegateInformation
          district={selectedDistrict}
          onGoBack={() => setSelectedDistrict(null)} // This resets the selectedDistrict to null, hence going back to selection screen
        />
      )}
    </div>
  );
};

export default App;
