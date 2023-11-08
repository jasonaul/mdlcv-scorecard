import React, { useEffect } from 'react';
import './InitialSelector.css'; // Import the CSS

const InitialSelector = ({ onChoose }) => {
  
  useEffect(() => {
    // Create script tag
    const script = document.createElement('script');
    script.src = 'https://assets.targetedaction.net/embed.js';
    script.async = true;
    
    // Append script to the body
    document.body.appendChild(script);

    return () => {
      // Remove script from the body on cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="selector-container">
      {/* Your existing buttons */}
      <button className="image-button" onClick={() => onChoose('house')}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Seal_of_Maryland_%28reverse%29.svg/1024px-Seal_of_Maryland_%28reverse%29.svg.png" alt="Maryland House of Delegates" />
        <span className="image-button-text">Maryland House of Delegates</span>
      </button>
      <button className="image-button" onClick={() => onChoose('senate')}>
        <img src="https://www.cookpolitical.com/sites/default/files/styles/d08_traditional/public/2023-05/Charlie%20Column%20050423.png" alt="Maryland State Senate" />
        <span className="image-button-text">Maryland State Senate</span>
      </button>

      {/* Embed the third-party widget */}
      <div className="oa-page-embed" data-page-url="https://secure.everyaction.com/p/I1IcpwCZ00-6dkpu4Y3Ihw2"></div>
    </div>
  );
};

export default InitialSelector;
