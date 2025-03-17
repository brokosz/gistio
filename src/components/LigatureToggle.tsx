import React, { useEffect, useState } from 'react';
import { getLigaturePreference, toggleLigatures } from '../utils/ligatures';

const LigatureToggle: React.FC = () => {
  const [enabled, setEnabled] = useState(true);

  // Initialize the component with the current preference
  useEffect(() => {
    setEnabled(getLigaturePreference());
  }, []);

  const handleToggle = () => {
    toggleLigatures();
    setEnabled(!enabled);
  };

  return (
    <button 
      className="ligature-toggle" 
      onClick={handleToggle}
      title={enabled ? "Disable ligatures" : "Enable ligatures"}
    >
      {enabled ? "Ligatures: ON" : "Ligatures: OFF"}
    </button>
  );
};

export default LigatureToggle;
