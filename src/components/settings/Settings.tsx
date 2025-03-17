import React, { useState, useEffect } from 'react'
import SettingsPanel from './SettingsPanel'
import { initSettings } from '../../utils/settingsStore'
import SettingsIcon from './SettingsIcon'

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  // Initialize settings when component mounts
  useEffect(() => {
    initSettings();
  }, []);
  
  return (
    <>
      <button 
        className="settings-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle settings"
      >
        <SettingsIcon />
      </button>
      
      {isOpen && <SettingsPanel onClose={() => setIsOpen(false)} />}
    </>
  )
}

export default Settings
