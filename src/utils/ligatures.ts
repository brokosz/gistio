/**
 * Utility functions for handling ligature preferences
 */

// Check if ligatures are enabled from localStorage
export const getLigaturePreference = (): boolean => {
  const preference = localStorage.getItem('ligatures-enabled');
  // Default to enabled if no preference is set
  return preference !== null ? preference === 'true' : true;
};

// Save ligature preference to localStorage
export const setLigaturePreference = (enabled: boolean): void => {
  localStorage.setItem('ligatures-enabled', String(enabled));
};

// Toggle ligatures in the UI
export const toggleLigatures = (): void => {
  const currentPreference = getLigaturePreference();
  const newPreference = !currentPreference;
  
  // Update the UI
  if (newPreference) {
    document.body.classList.remove('no-ligatures');
  } else {
    document.body.classList.add('no-ligatures');
  }
  
  // Save the preference
  setLigaturePreference(newPreference);
};

// Initialize ligatures based on stored preference
export const initLigatures = (): void => {
  const enabled = getLigaturePreference();
  
  if (!enabled) {
    document.body.classList.add('no-ligatures');
  }
};
