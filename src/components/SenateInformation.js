import React, { useState } from 'react';
import delegateData from '../data/senate'; // adjust path as needed
import './DelegateInformation.css';

const SenateInformation = ({ district, onGoBack, restartApp }) => {
  const delegates = delegateData.filter((d) => d.district === district);
  const [currentDelegateIndex, setCurrentDelegateIndex] = useState(0);
  const currentDelegate = delegates[currentDelegateIndex];

  // Mapping committee acronyms to full names
  const committeeNames = {
    "EEE": "Education, Energy, & the Environment Commitee",
    "BAT": "Budget & Taxation Committee",
    "FIN": "Finance Commitee",
    "JPR": "Judicial Proceedings Committee",
    "PRE": "Senate President",
    "JUD": "Judiciary Committee"
  };

  // Function to determine score class
  const getScoreClass = (score) => {
    console.log('Score:', score); // Add this line to log the score

    if (!score) return "score-unknown"; // Add a check for undefined or null
  
    // Remove '%' sign and convert the string to a number
    const numScore = Number(score.replace('%', ''));
  
    if (numScore >= 90) return "score-90-above";
    if (numScore >= 75) return "score-75-89";
    if (numScore >= 50) return "score-50-74";
    if (numScore >= 25) return "score-25-49";
    return "score-0-24";
  };

  return (
    <div className="delegate-info">
      {/* Add Scorecard Home button */}
      {/* <button className="home-button" onClick={restartApp}>Scorecard Home</button> */}

      <button onClick={onGoBack}>Back</button>

      {delegates.length > 1 && (
        <div>
          <button onClick={() => setCurrentDelegateIndex((prevIndex) => (prevIndex - 1 + delegates.length) % delegates.length)}>Previous Delegate</button>
          <button onClick={() => setCurrentDelegateIndex((prevIndex) => (prevIndex + 1) % delegates.length)}>Next Delegate</button>
        </div>
      )}

      <div className="delegate-details">
        <img src={currentDelegate.img} alt={currentDelegate.name} />
        <div>
          <h1>{currentDelegate.name}</h1>
          <p>District: {currentDelegate.district}</p>
          <p>Party: <span className={`party-${currentDelegate.party}`}>{currentDelegate.party}</span></p>
          <p>Committee: {committeeNames[currentDelegate.committee]}</p>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Issue</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(currentDelegate.votes).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>
                {currentDelegate.votes[key] === '+' ? '✅' : (currentDelegate.votes[key] === '-' ? '❌' : 'Not Present')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="score-section">
        <div className={`score-box ${getScoreClass(currentDelegate['2023 Score'])}`}>
          <p>2023 Score: {currentDelegate['2023 Score']}</p>
        </div>
        <div className={`score-box ${getScoreClass(currentDelegate['Life time Score'])}`}>
          <p>Life time Score: {currentDelegate['Life time Score']}</p>
        </div>
      </div>
    </div>
  );
};

export default SenateInformation;
