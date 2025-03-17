import React from 'react'

// Enums for settings
enum Theme {
  Brutalist = 'brutalist',
  Minimal = 'minimal',
  Classic = 'classic'
}

enum ColorMode {
  Light = 'light',
  Dark = 'dark',
  System = 'system'
}

enum FontSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

enum ReadabilitySpacing {
  Tight = 'tight',
  Normal = 'normal',
  Spacious = 'spacious'
}

enum ParagraphWidth {
  Narrow = 'narrow',
  Medium = 'medium',
  Wide = 'wide'
}

interface SettingsPanelProps {
  onClose: () => void;
}

const SettingsPanel = ({ onClose }: SettingsPanelProps) => {
  return (
    <div className="settings-panel">
      <div className="settings-header">
        <h2>Settings</h2>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      
      <div className="settings-content">
        <div className="settings-section">
          <h3>Coming Soon</h3>
          <p>Settings functionality will be implemented in a future update.</p>
        </div>
      </div>
      
      <style jsx="true">{`
        .settings-panel {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 300px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 110;
          overflow: hidden;
        }
        
        .settings-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          border-bottom: 1px solid #eee;
        }
        
        .settings-header h2 {
          margin: 0;
          font-size: 18px;
        }
        
        .close-button {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
        }
        
        .settings-content {
          padding: 16px;
        }
        
        .settings-section {
          margin-bottom: 20px;
        }
        
        .settings-section h3 {
          margin-top: 0;
          margin-bottom: 10px;
          font-size: 16px;
        }
        
        @media (prefers-color-scheme: dark) {
          .settings-panel {
            background: #2d3748;
            color: #e2e8f0;
          }
          
          .settings-header {
            border-bottom-color: #4a5568;
          }
          
          .close-button {
            color: #a0aec0;
          }
        }
      `}</style>
    </div>
  )
}

export default SettingsPanel
