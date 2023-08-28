import React from 'react';
import './LegislativeBodySelector.css';


const LegislativeBodySelector = ({ onSelect }) => {
  return (
    <div className="selector-container">
      <h1>Select Legislative Body</h1>
      <button onClick={() => onSelect('House')}>House</button>
      <button onClick={() => onSelect('Senate')}>Senate</button>
    </div>
  );
};

export default LegislativeBodySelector;
