import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  ThemeType, 
  ColorMode, 
  FontSize, 
  ReadabilitySpacing,
  ParagraphWidth,
  getSettings, 
  saveSettings, 
  applySettings 
} from '../../utils/settingsStore';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState<Settings>(getSettings());
  const [showLigatureOption, setShowLigatureOption] = useState<boolean>(false);

  // Check if ligatures are relevant to the current theme
  useEffect(() => {
    // Only show ligature option for themes that support it
    const hasLigatureSupport = ['brutalist', 'minimal', 'classic'].includes(settings.theme);
    setShowLigatureOption(hasLigatureSupport);
  }, [settings.theme]);

  const updateSetting = <K extends keyof Settings>(key: K, value: Settings[K]) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    saveSettings(newSettings);
    applySettings(newSettings);
  };

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.settings-panel') && !target.closest('.settings-toggle')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="settings-panel">
      <div className="settings-header">
        <h3>Reading Options</h3>
        <button className="close-button" onClick={onClose} aria-label="Close settings">×</button>
      </div>
      
      <div className="settings-section">
        <div className="settings-options font-size-options">
          <button 
            className={`text-size-option small ${settings.fontSize === 'small' ? 'active' : ''}`}
            onClick={() => updateSetting('fontSize', 'small')}
            aria-label="Small text"
          >
            A
          </button>
          <button 
            className={`text-size-option medium ${settings.fontSize === 'medium' ? 'active' : ''}`}
            onClick={() => updateSetting('fontSize', 'medium')}
            aria-label="Medium text"
          >
            A
          </button>
          <button 
            className={`text-size-option large ${settings.fontSize === 'large' ? 'active' : ''}`}
            onClick={() => updateSetting('fontSize', 'large')}
            aria-label="Large text"
          >
            A
          </button>
        </div>
      </div>
      
      <div className="settings-section">
        <div className="theme-options">
          {['light', 'dark', 'system'].map((mode) => (
            <button
              key={mode}
              className={`color-option ${mode} ${settings.colorMode === mode ? 'active' : ''}`}
              onClick={() => updateSetting('colorMode', mode as ColorMode)}
              aria-label={`${mode} mode`}
            >
              <span className="color-icon"></span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="settings-divider"></div>
      
      <div className="settings-section select-container">
        <label htmlFor="theme-select">Theme</label>
        <select
          id="theme-select"
          className="theme-select"
          value={settings.theme}
          onChange={(e) => updateSetting('theme', e.target.value as ThemeType)}
        >
          <option value="brutalist">Brutalist</option>
          <option value="minimal">Minimal</option>
          <option value="classic">Classic</option>
          <option value="tailwind">Tailwind</option>
        </select>
      </div>
      
      {showLigatureOption && (
        <div className="settings-section">
          <label>Ligatures</label>
          <div className="toggle-switch-container">
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.ligaturesEnabled}
                onChange={() => updateSetting('ligaturesEnabled', !settings.ligaturesEnabled)}
              />
              <span className="toggle-slider"></span>
            </label>
            <span className="toggle-label">{settings.ligaturesEnabled ? 'On' : 'Off'}</span>
          </div>
        </div>
      )}
      
      <div className="settings-section">
        <label>Text Width</label>
        <div className="width-options">
          <button 
            className={`width-option narrow ${settings.width === 'narrow' ? 'active' : ''}`}
            onClick={() => updateSetting('width', 'narrow')}
          >
            <span className="width-line"></span>
          </button>
          <button 
            className={`width-option medium ${settings.width === 'medium' ? 'active' : ''}`}
            onClick={() => updateSetting('width', 'medium')}
          >
            <span className="width-line"></span>
          </button>
          <button 
            className={`width-option wide ${settings.width === 'wide' ? 'active' : ''}`}
            onClick={() => updateSetting('width', 'wide')}
          >
            <span className="width-line"></span>
          </button>
        </div>
      </div>
      
      <div className="settings-section">
        <label>Spacing</label>
        <div className="spacing-options">
          <button 
            className={`spacing-option ${settings.spacing === 'compact' ? 'active' : ''}`}
            onClick={() => updateSetting('spacing', 'compact')}
          >
            <span className="spacing-line"></span>
            <span className="spacing-line"></span>
            <span className="spacing-line"></span>
          </button>
          <button 
            className={`spacing-option ${settings.spacing === 'comfortable' ? 'active' : ''}`}
            onClick={() => updateSetting('spacing', 'comfortable')}
          >
            <span className="spacing-line"></span>
            <span className="spacing-line"></span>
            <span className="spacing-line"></span>
          </button>
          <button 
            className={`spacing-option ${settings.spacing === 'spacious' ? 'active' : ''}`}
            onClick={() => updateSetting('spacing', 'spacious')}
          >
            <span className="spacing-line"></span>
            <span className="spacing-line"></span>
            <span className="spacing-line"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
