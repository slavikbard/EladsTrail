'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilitySettings {
  textSize: number;
  grayscale: boolean;
  highContrast: boolean;
  keyboardNav: boolean;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
  toggleGrayscale: () => void;
  toggleHighContrast: () => void;
  toggleKeyboardNav: () => void;
  resetSettings: () => void;
}

const defaultSettings: AccessibilitySettings = {
  textSize: 100,
  grayscale: false,
  highContrast: false,
  keyboardNav: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  useEffect(() => {
    const stored = localStorage.getItem('accessibility-settings');
    if (stored) {
      setSettings(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));

    document.documentElement.style.fontSize = `${settings.textSize}%`;

    if (settings.grayscale) {
      document.documentElement.classList.add('grayscale');
    } else {
      document.documentElement.classList.remove('grayscale');
    }

    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (settings.keyboardNav) {
      document.documentElement.classList.add('keyboard-nav');
    } else {
      document.documentElement.classList.remove('keyboard-nav');
    }
  }, [settings]);

  const increaseTextSize = () => {
    setSettings(prev => ({
      ...prev,
      textSize: Math.min(prev.textSize + 10, 150),
    }));
  };

  const decreaseTextSize = () => {
    setSettings(prev => ({
      ...prev,
      textSize: Math.max(prev.textSize - 10, 80),
    }));
  };

  const toggleGrayscale = () => {
    setSettings(prev => ({ ...prev, grayscale: !prev.grayscale }));
  };

  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const toggleKeyboardNav = () => {
    setSettings(prev => ({ ...prev, keyboardNav: !prev.keyboardNav }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        increaseTextSize,
        decreaseTextSize,
        toggleGrayscale,
        toggleHighContrast,
        toggleKeyboardNav,
        resetSettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
