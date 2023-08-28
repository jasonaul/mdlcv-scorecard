import React, { useState } from 'react';
import Select from 'react-select';

const DistrictOrAddressSelector = ({ onSelectDistrict }) => {
  // District options for the dropdown
  const districtOptions = [
    { label: "10", value: "10" },
    { label: "11A", value: "11A" },
    // ... All other district options go here
  ];

  // State to hold the selected district
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  // Handler for when a district is selected
  const handleSelect = (selectedOption) => {
    setSelectedDistrict(selectedOption);
    onSelectDistrict(selectedOption.value);
  };

  return (
    <div style={{ padding: '1em', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Select Your District</h1>
      <Select
        options={districtOptions}
        onChange={handleSelect}
        placeholder="Select your district..."
        isSearchable
        isClearable
      />
    </div>
  );
};

export default DistrictOrAddressSelector;
