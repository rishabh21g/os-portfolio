import React from 'react';
import { motion } from 'framer-motion';
import { Rnd } from 'react-rnd';
import { AppWindow, useOSStore } from '@/stores/osStore';
import { WindowContent } from './apps/WindowContent';

interface WindowProps {
  windowData: AppWindow;
}

export const Window: React.FC<WindowProps> = ({ windowData }) => {
  const { 
    closeApp, 
    minimizeApp, 
    maximizeApp, 
    setActiveWindow, 
    updateWindowPosition, 
    updateWindowSize,
    activeWindow 
  } = useOSStore();

  const isActive = activeWindow === windowData.id;

  const handleDragStop = (e: any, data: any) => {
    updateWindowPosition(windowData.id, { x: data.x, y: data.y });
  };

  const handleResizeStop = (e: any, direction: any, ref: any, delta: any, position: any) => {
    updateWindowSize(windowData.id, {
      width: ref.offsetWidth,
      height: ref.offsetHeight,
    });
    updateWindowPosition(windowData.id, position);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Rnd
        size={windowData.size}
        position={windowData.position}
        onDragStop={handleDragStop}
        onResizeStop={handleResizeStop}
        minWidth={300}
        minHeight={200}
        bounds="parent"
        dragHandleClassName="window-drag-handle"
        style={{ zIndex: windowData.zIndex }}
        disableDragging={windowData.isMaximized}
        enableResizing={!windowData.isMaximized}
      >
        <div 
          className={`window h-full flex flex-col ${isActive ? 'ring-2 ring-primary/50' : ''}`}
          onClick={() => setActiveWindow(windowData.id)}
        >
          {/* Title Bar */}
          <div className="titlebar window-drag-handle">
            <div className="traffic-lights">
              <button
                className="traffic-light close"
                onClick={() => closeApp(windowData.id)}
                aria-label="Close"
              />
              <button
                className="traffic-light minimize"
                onClick={() => minimizeApp(windowData.id)}
                aria-label="Minimize"
              />
              <button
                className="traffic-light maximize"
                onClick={() => maximizeApp(windowData.id)}
                aria-label="Maximize"
              />
            </div>
            
            <div className="flex-1 text-center">
              <span className="text-sm font-medium text-foreground">
                {windowData.title}
              </span>
            </div>
            
            <div className="w-16" /> {/* Spacer for symmetry */}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            <WindowContent type={windowData.type} windowId={windowData.id} />
          </div>
        </div>
      </Rnd>
    </motion.div>
  );
};