import React, { useState } from 'react';
import Select from 'react-select';

const SenateSelector = ({ onSelectDistrict }) => {
  // District options for the dropdown
  const districtOptions = [
    { label: "1A", value: "1A" },
    { label: "1B", value: "1B" },
    { label: "1C", value: "1C" },
    { label: "2A", value: "2A" },
    { label: "2B", value: "2B" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7A", value: "7A" },
    { label: "7B", value: "7B" },
    { label: "8", value: "8" },
    { label: "9A", value: "9A" },
    { label: "9B", value: "9B" },
    { label: "10", value: "10" },
    { label: "11A", value: "11A" },
    { label: "11B", value: "11B" },
    { label: "12A", value: "12A" },
    { label: "12B", value: "12B" },
    { label: "13", value: "13" },
    { label: "14", value: "14" },
    { label: "15", value: "15" },
    { label: "16", value: "16" },
    { label: "17", value: "17" },
    { label: "18", value: "18" },
    { label: "19", value: "19" },
    { label: "20", value: "20" },
    { label: "21", value: "21" },
    { label: "22", value: "22" },
    { label: "23", value: "23" },
    { label: "24", value: "24" },
    { label: "25", value: "25" },
    { label: "26", value: "26" },
    { label: "27A", value: "27A" },
    { label: "27B", value: "27B" },
    { label: "27C", value: "27C" },
    { label: "28", value: "28" },
    { label: "29A", value: "29A" },
    { label: "29B", value: "29B" },
    { label: "29C", value: "29C" },
    { label: "30A", value: "30A" },
    { label: "30B", value: "30B" },
    { label: "31", value: "31" },
    { label: "32", value: "32" },
    { label: "33A", value: "33A" },
    { label: "33B", value: "33B" },
    { label: "33C", value: "33C" },
    { label: "34A", value: "34A" },
    { label: "34B", value: "34B" },
    { label: "35A", value: "35A" },
    { label: "35B", value: "35B" },
    { label: "36", value: "36" },
    { label: "37A", value: "37A" },
    { label: "37B", value: "37B" },
    { label: "38A", value: "38A" },
    { label: "38B", value: "38B" },
    { label: "38C", value: "38C" },
    { label: "39", value: "39" },
    { label: "40", value: "40" },
    { label: "41", value: "41" },
    { label: "42A", value: "42A" },
    { label: "42B", value: "42B" },
    { label: "42C", value: "42C" },
    { label: "43A", value: "43A" },
    { label: "43B", value: "43B" },
    { label: "44A", value: "44A" },
    { label: "44B", value: "44B" },
    { label: "45", value: "45" },
    { label: "46", value: "46" },
    { label: "47A", value: "47A" },
    { label: "47B", value: "47B" },

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

export default SenateSelector;
