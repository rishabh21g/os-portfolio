import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOSStore } from '@/stores/osStore';
import { Window } from './Window';
import { Dock } from './Dock';
import { Wallpaper } from './Wallpaper';

export const Desktop: React.FC = () => {
  const { windows, isDarkMode } = useOSStore();

  useEffect(() => {
    // Apply dark mode class to html element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <Wallpaper />
      
      {/* Windows */}
      <AnimatePresence>
        {windows
          .filter(window => window.isOpen && !window.isMinimized)
          .sort((a, b) => a.zIndex - b.zIndex)
          .map(window => (
            <Window key={window.id} windowData={window} />
          ))}
      </AnimatePresence>

      {/* Dock */}
      <Dock />
    </div>
  );
};