import { create } from 'zustand';

export interface AppWindow {
  id: string;
  type: 'terminal' | 'vscode' | 'chrome' | 'settings' | 'calculator' | 'calendar' | 'clock' | 'weather' | 'resume' | 'notes';
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

interface OSState {
  windows: AppWindow[];
  activeWindow: string | null;
  isDarkMode: boolean;
  isLoading: boolean;
  
  // Actions
  openApp: (type: AppWindow['type']) => void;
  closeApp: (id: string) => void;
  minimizeApp: (id: string) => void;
  maximizeApp: (id: string) => void;
  setActiveWindow: (id: string) => void;
  updateWindowPosition: (id: string, position: { x: number; y: number }) => void;
  updateWindowSize: (id: string, size: { width: number; height: number }) => void;
  toggleTheme: () => void;
  setLoading: (loading: boolean) => void;
}

export const useOSStore = create<OSState>((set, get) => ({
  windows: [],
  activeWindow: null,
  isDarkMode: false,
  isLoading: false,

  openApp: (type) => {
    const { windows } = get();
    
    // Check if app is already open
    const existingWindow = windows.find(w => w.type === type);
    if (existingWindow) {
      set({
        windows: windows.map(w => 
          w.id === existingWindow.id 
            ? { ...w, isMinimized: false, zIndex: Math.max(...windows.map(w => w.zIndex)) + 1 }
            : w
        ),
        activeWindow: existingWindow.id
      });
      return;
    }

    // Create new window
    const id = `${type}-${Date.now()}`;
    const newWindow: AppWindow = {
      id,
      type,
      title: getAppTitle(type),
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      position: { 
        x: 100 + (windows.length * 30), 
        y: 100 + (windows.length * 30) 
      },
      size: getDefaultSize(type),
      zIndex: Math.max(...windows.map(w => w.zIndex), 0) + 1
    };

    set({
      windows: [...windows, newWindow],
      activeWindow: id
    });
  },

  closeApp: (id) => {
    const { windows } = get();
    set({
      windows: windows.filter(w => w.id !== id),
      activeWindow: windows.find(w => w.id !== id && !w.isMinimized)?.id || null
    });
  },

  minimizeApp: (id) => {
    const { windows } = get();
    set({
      windows: windows.map(w => 
        w.id === id ? { ...w, isMinimized: true } : w
      ),
      activeWindow: windows.find(w => w.id !== id && !w.isMinimized)?.id || null
    });
  },

  maximizeApp: (id) => {
    const { windows } = get();
    set({
      windows: windows.map(w => 
        w.id === id 
          ? { 
              ...w, 
              isMaximized: !w.isMaximized,
              position: w.isMaximized ? w.position : { x: 0, y: 0 },
              size: w.isMaximized ? w.size : { width: window.innerWidth, height: window.innerHeight - 100 }
            } 
          : w
      )
    });
  },

  setActiveWindow: (id) => {
    const { windows } = get();
    set({
      windows: windows.map(w => 
        w.id === id ? { ...w, zIndex: Math.max(...windows.map(w => w.zIndex)) + 1 } : w
      ),
      activeWindow: id
    });
  },

  updateWindowPosition: (id, position) => {
    const { windows } = get();
    set({
      windows: windows.map(w => 
        w.id === id ? { ...w, position } : w
      )
    });
  },

  updateWindowSize: (id, size) => {
    const { windows } = get();
    set({
      windows: windows.map(w => 
        w.id === id ? { ...w, size } : w
      )
    });
  },

  toggleTheme: () => {
    set(state => ({ isDarkMode: !state.isDarkMode }));
  },

  setLoading: (loading) => {
    set({ isLoading: loading });
  }
}));

function getAppTitle(type: AppWindow['type']): string {
  const titles = {
    terminal: 'Terminal',
    vscode: 'VS Code',
    chrome: 'Chrome',
    settings: 'System Preferences',
    calculator: 'Calculator',
    calendar: 'Calendar',
    clock: 'Clock',
    weather: 'Weather',
    resume: 'Resume',
    notes: 'Notes'
  };
  return titles[type];
}

function getDefaultSize(type: AppWindow['type']): { width: number; height: number } {
  const sizes = {
    terminal: { width: 800, height: 500 },
    vscode: { width: 1000, height: 700 },
    chrome: { width: 1200, height: 800 },
    settings: { width: 600, height: 500 },
    calculator: { width: 320, height: 400 },
    calendar: { width: 800, height: 600 },
    clock: { width: 400, height: 300 },
    weather: { width: 400, height: 500 },
    resume: { width: 900, height: 700 },
    notes: { width: 700, height: 600 }
  };
  return sizes[type];
}