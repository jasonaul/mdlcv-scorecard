// components/InitialSelector.js
import './InitialSelector.css'; // Import the CSS

const InitialSelector = ({ onChoose }) => {
  return (
    <div className="selector-container">
      <button className="image-button" onClick={() => onChoose('house')}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Seal_of_Maryland_%28reverse%29.svg/1024px-Seal_of_Maryland_%28reverse%29.svg.png" alt="Maryland House of Delegates" />
        <span className="image-button-text">Maryland House of Delegates</span>
      </button>
      <button className="image-button" onClick={() => onChoose('senate')}>
        <img src="https://www.cookpolitical.com/sites/default/files/styles/d08_traditional/public/2023-05/Charlie%20Column%20050423.png" alt="Maryland State Senate" />
        <span className="image-button-text">Maryland State Senate</span>
      </button>
    </div>
  );
};

export default InitialSelector;
