import React from 'react';
import { motion } from 'framer-motion';
import { useOSStore } from '@/stores/osStore';
import { 
  Terminal,
  Code,
  Chrome,
  Settings,
  Calculator,
  Calendar,
  Clock,
  Cloud,
  FileText,
  StickyNote
} from 'lucide-react';

const apps = [
  { type: 'terminal' as const, icon: Terminal, label: 'Terminal' },
  { type: 'vscode' as const, icon: Code, label: 'VS Code' },
  { type: 'chrome' as const, icon: Chrome, label: 'Chrome' },
  { type: 'settings' as const, icon: Settings, label: 'Settings' },
  { type: 'calculator' as const, icon: Calculator, label: 'Calculator' },
  { type: 'calendar' as const, icon: Calendar, label: 'Calendar' },
  { type: 'clock' as const, icon: Clock, label: 'Clock' },
  { type: 'weather' as const, icon: Cloud, label: 'Weather' },
  { type: 'resume' as const, icon: FileText, label: 'Resume' },
  { type: 'notes' as const, icon: StickyNote, label: 'Notes' },
];

export const Dock: React.FC = () => {
  const { openApp, windows } = useOSStore();

  return (
    <motion.div
      className="dock"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {apps.map((app, index) => {
        const Icon = app.icon;
        const isOpen = windows.some(w => w.type === app.type && w.isOpen);
        
        return (
          <motion.button
            key={app.type}
            className="dock-icon group relative"
            onClick={() => openApp(app.type)}
            whileHover={{ scale: 1.2, y: -8 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ 
              delay: 0.1 * index,
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <Icon className={`w-8 h-8 ${isOpen ? 'text-primary' : 'text-foreground'}`} />
            
            {/* App label tooltip */}
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {app.label}
              </div>
            </div>
            
            {/* Running indicator */}
            {isOpen && (
              <motion.div
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              />
            )}
          </motion.button>
        );
      })}
    </motion.div>
  );
};