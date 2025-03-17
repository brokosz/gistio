import React from 'react';

const SettingsIcon: React.FC = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Safari-style text formatting icon */}
    <path d="M12 2H8.5C7.12 2 6 3.12 6 4.5v15C6 20.88 7.12 22 8.5 22H12"/>
    <path d="M16 2h1.5C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5H16"/>
    <path d="M6 12h18"/>
    <path d="M9 17h4"/>
    <path d="M13 7h4"/>
  </svg>
);

export default SettingsIcon;
