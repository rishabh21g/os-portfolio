import React from 'react';
import { AppWindow } from '@/stores/osStore';
import { Terminal } from './Terminal';
import { VSCode } from './VSCode';
import { Chrome } from './Chrome';
import { Settings } from './Settings';
import { Calculator } from './Calculator';
import { Calendar } from './Calendar';
import { Clock } from './Clock';
import { Weather } from './Weather';
import { Resume } from './Resume';
import { Notes } from './Notes';

interface WindowContentProps {
  type: AppWindow['type'];
  windowId: string;
}

export const WindowContent: React.FC<WindowContentProps> = ({ type, windowId }) => {
  switch (type) {
    case 'terminal':
      return <Terminal />;
    case 'vscode':
      return <VSCode />;
    case 'chrome':
      return <Chrome />;
    case 'settings':
      return <Settings />;
    case 'calculator':
      return <Calculator />;
    case 'calendar':
      return <Calendar />;
    case 'clock':
      return <Clock />;
    case 'weather':
      return <Weather />;
    case 'resume':
      return <Resume />;
    case 'notes':
      return <Notes />;
    default:
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-muted-foreground">App content not available</p>
        </div>
      );
  }
};