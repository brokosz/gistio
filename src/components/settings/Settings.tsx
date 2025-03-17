import React, { useState } from 'react'
import SettingsPanel from './SettingsPanel'

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <button 
        className="settings-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle settings"
      >
        ⚙️
      </button>
      
      {isOpen && <SettingsPanel onClose={() => setIsOpen(false)} />}
      
      <style jsx="true">{`
        .settings-toggle {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f0f0f0;
          border: 1px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          cursor: pointer;
          z-index: 100;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        @media (prefers-color-scheme: dark) {
          .settings-toggle {
            background: #2d3748;
            border-color: #4a5568;
          }
        }
      `}</style>
    </>
  )
}

export default Settings
