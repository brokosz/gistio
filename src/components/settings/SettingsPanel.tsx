import React, { useState, useEffect } from 'react'
import { 
  ThemeType, 
  ColorMode, 
  FontSize, 
  ReadabilitySpacing, 
  ParagraphWidth, 
  getSettings, 
  saveSettings, 
  applySettings 
} from '../../utils/settingsStore'

interface SettingsPanelProps {
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ onClose }) => {
  const [settings, setSettings] = useState(getSettings());
  
  // When settings change, save and apply them
  useEffect(() => {
    saveSettings(settings);
    applySettings(settings);
  }, [settings]);
  
  // Update a single setting
  const updateSetting = <K extends keyof typeof settings>(
    key: K,
    value: typeof settings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };
  
  return (
    <div className="settings-panel">
      <div className="settings-header">
        <h3>DISPLAY SETTINGS</h3>
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
      
      <div className="settings-section">
        <label>COLOR THEME</label>
        <div className="settings-options">
          <div className="font-size-options">
            <button 
              className={`color-option light ${settings.colorMode === 'light' ? 'active' : ''}`}
              onClick={() => updateSetting('colorMode', 'light' as ColorMode)}
              aria-label="Light mode"
            />
            <button 
              className={`color-option system ${settings.colorMode === 'system' ? 'active' : ''}`}
              onClick={() => updateSetting('colorMode', 'system' as ColorMode)}
              aria-label="System mode"
            />
            <button 
              className={`color-option dark ${settings.colorMode === 'dark' ? 'active' : ''}`}
              onClick={() => updateSetting('colorMode', 'dark' as ColorMode)}
              aria-label="Dark mode"
            />
          </div>
        </div>
      </div>
      
      <div className="settings-divider"></div>
      
      <div className="settings-section">
        <label>LAYOUT STYLE</label>
        <div className="theme-buttons">
          <button 
            className={`theme-button ${settings.theme === 'brutalist' ? 'active' : ''}`}
            onClick={() => updateSetting('theme', 'brutalist' as ThemeType)}
          >
            Brutalist
          </button>
          <button 
            className={`theme-button ${settings.theme === 'minimal' ? 'active' : ''}`}
            onClick={() => updateSetting('theme', 'minimal' as ThemeType)}
          >
            Minimal
          </button>
          <button 
            className={`theme-button ${settings.theme === 'classic' ? 'active' : ''}`}
            onClick={() => updateSetting('theme', 'classic' as ThemeType)}
          >
            Classic
          </button>
        </div>
      </div>
      
      <div className="settings-divider"></div>
      
      <div className="settings-section">
        <label>TEXT SIZE</label>
        <div className="font-size-options">
          <button 
            className={`text-size-option small ${settings.fontSize === 'small' ? 'active' : ''}`}
            onClick={() => updateSetting('fontSize', 'small' as FontSize)}
            aria-label="Small text"
          >
            A
          </button>
          <button 
            className={`text-size-option medium ${settings.fontSize === 'medium' ? 'active' : ''}`}
            onClick={() => updateSetting('fontSize', 'medium' as FontSize)}
            aria-label="Medium text"
          >
            A
          </button>
          <button 
            className={`text-size-option large ${settings.fontSize === 'large' ? 'active' : ''}`}
            onClick={() => updateSetting('fontSize', 'large' as FontSize)}
            aria-label="Large text"
          >
            A
          </button>
        </div>
      </div>
      
      <div className="settings-divider"></div>
      
      <div className="settings-section">
        <label>PARAGRAPH WIDTH</label>
        <div className="width-options">
          <button 
            className={`width-option narrow ${settings.width === 'narrow' ? 'active' : ''}`}
            onClick={() => updateSetting('width', 'narrow' as ParagraphWidth)}
            aria-label="Narrow width"
          >
            <span className="width-line"></span>
          </button>
          <button 
            className={`width-option medium ${settings.width === 'medium' ? 'active' : ''}`}
            onClick={() => updateSetting('width', 'medium' as ParagraphWidth)}
            aria-label="Medium width"
          >
            <span className="width-line"></span>
          </button>
          <button 
            className={`width-option wide ${settings.width === 'wide' ? 'active' : ''}`}
            onClick={() => updateSetting('width', 'wide' as ParagraphWidth)}
            aria-label="Wide width"
          >
            <span className="width-line"></span>
          </button>
        </div>
      </div>
      
      <div className="settings-divider"></div>
      
      <div className="settings-section">
        <label>TEXT SPACING</label>
        <div className="spacing-options">
          <button 
            className={`spacing-option ${settings.spacing === 'compact' ? 'active' : ''}`}
            onClick={() => updateSetting('spacing', 'compact' as ReadabilitySpacing)}
            aria-label="Compact spacing"
          >
            <span className="spacing-line"></span>
            <span className="spacing-line"></span>
            <span className="spacing-line"></span>
          </button>
          <button 
            className={`spacing-option ${settings.spacing === 'comfortable' ? 'active' : ''}`}
            onClick={() => updateSetting('spacing', 'comfortable' as ReadabilitySpacing)}
            aria-label="Comfortable spacing"
          >
            <span className="spacing-line"></span>
            <span className="spacing-line"></span>
            <span className="spacing-line"></span>
          </button>
          <button 
            className={`spacing-option ${settings.spacing === 'spacious' ? 'active' : ''}`}
            onClick={() => updateSetting('spacing', 'spacious' as ReadabilitySpacing)}
            aria-label="Spacious spacing"
          >
            <span className="spacing-line"></span>
            <span className="spacing-line"></span>
            <span className="spacing-line"></span>
          </button>
        </div>
      </div>
      
      <div className="settings-divider"></div>
      
      <div className="settings-section">
        <div className="settings-options">
          <button 
            className={`small-button ${settings.ligaturesEnabled ? 'active' : ''}`}
            onClick={() => updateSetting('ligaturesEnabled', !settings.ligaturesEnabled)}
          >
            {settings.ligaturesEnabled ? 'Ligatures On' : 'Ligatures Off'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
