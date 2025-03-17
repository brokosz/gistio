import React, { useState, useEffect } from 'react';
import SettingsIcon from './SettingsIcon';
import SettingsPanel from './SettingsPanel';
import { initSettings } from '../../utils/settingsStore';

const Settings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize settings when component mounts
  useEffect(() => {
    initSettings();
  }, []);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className="settings-toggle"
        onClick={togglePanel}
        aria-label="Toggle settings"
      >
        <SettingsIcon />
      </button>
      <SettingsPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Settings;
