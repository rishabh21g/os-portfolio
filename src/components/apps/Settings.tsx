import React from 'react';
import { motion } from 'framer-motion';
import { useOSStore } from '@/stores/osStore';
import { 
  Monitor, 
  Palette, 
  User, 
  Info, 
  Wifi, 
  Volume2, 
  Battery,
  Moon,
  Sun,
  Smartphone
} from 'lucide-react';

export const Settings: React.FC = () => {
  const { isDarkMode, toggleTheme } = useOSStore();

  const settingsCategories = [
    {
      icon: User,
      title: 'User Account',
      description: 'Manage your profile and account settings'
    },
    {
      icon: Palette,
      title: 'Appearance',
      description: 'Customize the look and feel of RishabhOS'
    },
    {
      icon: Monitor,
      title: 'Display',
      description: 'Adjust screen resolution and display settings'
    },
    {
      icon: Wifi,
      title: 'Network',
      description: 'Configure internet and network connections'
    },
    {
      icon: Volume2,
      title: 'Sound',
      description: 'Manage audio settings and sound preferences'
    },
    {
      icon: Battery,
      title: 'Power',
      description: 'Battery and power management options'
    }
  ];

  return (
    <div className="h-full bg-background overflow-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-white p-6">
        <h1 className="text-3xl font-bold mb-2">System Preferences</h1>
        <p className="text-primary-foreground/80">Customize your RishabhOS experience</p>
      </div>

      <div className="p-6 space-y-6">
        {/* System Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Info className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">RishabhOS</h2>
              <p className="text-muted-foreground">Version 1.0 (Build 2025.01)</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">System:</span>
                <span>Virtual Portfolio OS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Processor:</span>
                <span>React.js Engine v18.3.1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Memory:</span>
                <span>TypeScript 5.0 Runtime</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Graphics:</span>
                <span>Framer Motion GPU</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Storage:</span>
                <span>Zustand State Manager</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Network:</span>
                <span>Lovable Cloud Connected</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="text-xl font-bold mb-4">Quick Settings</h3>
          
          <div className="space-y-4">
            {/* Theme Toggle */}
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-3">
                {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                <div>
                  <h4 className="font-semibold">Dark Mode</h4>
                  <p className="text-sm text-muted-foreground">
                    {isDarkMode ? 'Currently using dark theme' : 'Currently using light theme'}
                  </p>
                </div>
              </div>
              <button
                onClick={toggleTheme}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  isDarkMode ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <motion.div
                  className="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm"
                  animate={{ x: isDarkMode ? 26 : 2 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>

            {/* Other Quick Settings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Wifi className="w-5 h-5 text-green-500" />
                  <div>
                    <h4 className="font-semibold">WiFi</h4>
                    <p className="text-xs text-muted-foreground">Connected to Lovable Cloud</p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Volume2 className="w-5 h-5 text-blue-500" />
                  <div>
                    <h4 className="font-semibold">Sound</h4>
                    <p className="text-xs text-muted-foreground">Output: 85%</p>
                  </div>
                </div>
                <div className="w-16 h-1 bg-gray-300 rounded-full">
                  <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Settings Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="text-xl font-bold mb-4">System Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {settingsCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 bg-muted/30 hover:bg-muted/50 rounded-lg text-left transition-colors"
                >
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">{category.title}</h4>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Developer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-xl p-6"
        >
          <h3 className="text-xl font-bold mb-4">About the Developer</h3>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xl font-bold">
              RG
            </div>
            <div>
              <h4 className="font-bold text-lg">Rishabh Gupta</h4>
              <p className="text-muted-foreground">Full Stack Developer</p>
              <p className="text-sm text-muted-foreground mt-1">
                Built with ❤️ using React.js, TypeScript, Tailwind CSS, and Framer Motion
              </p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">IIT Madras</span>
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Software Developer</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
