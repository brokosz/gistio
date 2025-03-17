/**
 * Settings store to manage user preferences
 */

// Define types for settings
export type ThemeType = 'brutalist' | 'minimal' | 'classic' | 'tailwind';
export type ColorMode = 'system' | 'light' | 'dark';
export type FontSize = 'small' | 'medium' | 'large';
export type ReadabilitySpacing = 'compact' | 'comfortable' | 'spacious';
export type ParagraphWidth = 'narrow' | 'medium' | 'wide';

export interface Settings {
  theme: ThemeType;
  colorMode: ColorMode;
  ligaturesEnabled: boolean;
  fontSize: FontSize;
  spacing: ReadabilitySpacing;
  width: ParagraphWidth;
}

// Default settings
const DEFAULT_SETTINGS: Settings = {
  theme: 'brutalist',
  colorMode: 'system',
  ligaturesEnabled: true,
  fontSize: 'medium',
  spacing: 'comfortable',
  width: 'medium'
};

// Key for storing settings in localStorage
const SETTINGS_KEY = 'gistio-user-settings';

// Get settings from localStorage or use defaults
export const getSettings = (): Settings => {
  try {
    const storedSettings = localStorage.getItem(SETTINGS_KEY);
    if (storedSettings) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(storedSettings) };
    }
  } catch (error) {
    console.error('Error loading settings:', error);
  }
  return { ...DEFAULT_SETTINGS };
};

// Save settings to localStorage
export const saveSettings = (settings: Settings): void => {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving settings:', error);
  }
};

// Apply settings to the document
export const applySettings = (settings: Settings): void => {
  const { theme, colorMode, ligaturesEnabled, fontSize, spacing, width } = settings;
  
  // Reset all classes first
  document.body.className = '';
  
  // Apply theme
  document.body.classList.add(theme);
  
  // Apply color mode - for system, don't add any class to use media queries
  if (colorMode === 'light') {
    document.body.classList.add('light-mode');
  } else if (colorMode === 'dark') {
    document.body.classList.add('dark-mode');
  }
  // For system, we use prefers-color-scheme media query in CSS
  
  // Apply ligatures
  if (!ligaturesEnabled) {
    document.body.classList.add('no-ligatures');
  }
  
  // Apply font size
  document.body.classList.add(`font-${fontSize}`);
  
  // Apply spacing
  document.body.classList.add(`spacing-${spacing}`);
  
  // Apply width
  document.body.classList.add(`width-${width}`);
  
  // Debug to console
  console.log('Settings applied:', settings);
  console.log('Current classes:', document.body.className);
};

// Initialize settings when app loads
export const initSettings = (): Settings => {
  const settings = getSettings();
  applySettings(settings);
  return settings;
};
