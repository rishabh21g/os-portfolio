import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Settings, Globe } from 'lucide-react';

export const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [viewMode, setViewMode] = useState<'analog' | 'digital'>('analog');
  const [timezone, setTimezone] = useState('local');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getRotation = (value: number, max: number) => {
    return (value / max) * 360;
  };

  const AnalogClock = () => {
    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return (
      <div className="relative w-64 h-64 mx-auto">
        {/* Clock Face */}
        <div className="absolute inset-0 border-8 border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 shadow-2xl">
          {/* Hour Markers */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-6 bg-gray-800 dark:bg-gray-200"
              style={{
                top: '10px',
                left: '50%',
                transformOrigin: '50% 118px',
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
              }}
            />
          ))}

          {/* Numbers */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) - 90;
            const radius = 90;
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            
            return (
              <div
                key={i}
                className="absolute w-8 h-8 flex items-center justify-center text-lg font-bold text-gray-800 dark:text-gray-200"
                style={{
                  left: `calc(50% + ${x}px - 16px)`,
                  top: `calc(50% + ${y}px - 16px)`,
                }}
              >
                {i === 0 ? 12 : i}
              </div>
            );
          })}

          {/* Hour Hand */}
          <motion.div
            className="absolute w-1 bg-gray-800 dark:bg-gray-200 rounded-full origin-bottom"
            style={{
              height: '60px',
              left: '50%',
              bottom: '50%',
              transformOrigin: '50% 100%',
            }}
            animate={{
              rotate: getRotation(hours + minutes / 60, 12),
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />

          {/* Minute Hand */}
          <motion.div
            className="absolute w-0.5 bg-gray-600 dark:bg-gray-400 rounded-full origin-bottom"
            style={{
              height: '80px',
              left: '50%',
              bottom: '50%',
              transformOrigin: '50% 100%',
            }}
            animate={{
              rotate: getRotation(minutes + seconds / 60, 60),
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />

          {/* Second Hand */}
          <motion.div
            className="absolute w-px bg-red-500 rounded-full origin-bottom"
            style={{
              height: '90px',
              left: '50%',
              bottom: '50%',
              transformOrigin: '50% 100%',
            }}
            animate={{
              rotate: getRotation(seconds, 60),
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {/* Center Dot */}
          <div className="absolute w-3 h-3 bg-gray-800 dark:bg-gray-200 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    );
  };

  const DigitalClock = () => {
    return (
      <div className="text-center space-y-4">
        <motion.div
          key={formatTime(time)}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          className="text-6xl font-mono font-bold text-primary"
        >
          {formatTime(time)}
        </motion.div>
        
        <div className="text-xl text-muted-foreground">
          {formatDate(time)}
        </div>
      </div>
    );
  };

  const WorldClocks = () => {
    const timezones = [
      { name: 'New York', tz: 'America/New_York' },
      { name: 'London', tz: 'Europe/London' },
      { name: 'Tokyo', tz: 'Asia/Tokyo' },
      { name: 'Sydney', tz: 'Australia/Sydney' },
    ];

    return (
      <div className="grid grid-cols-2 gap-4">
        {timezones.map((tz) => {
          const tzTime = new Date().toLocaleString('en-US', { 
            timeZone: tz.tz,
            hour12: true,
            hour: '2-digit',
            minute: '2-digit'
          });
          
          return (
            <div key={tz.name} className="p-3 bg-muted/50 rounded-lg text-center">
              <div className="font-semibold text-sm text-muted-foreground">{tz.name}</div>
              <div className="font-mono text-lg">{tzTime}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="h-full bg-background p-6 overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Clock</h1>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode(viewMode === 'analog' ? 'digital' : 'analog')}
            className="px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded-lg transition-colors"
          >
            {viewMode === 'analog' ? 'Digital' : 'Analog'}
          </button>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Clock Display */}
      <div className="mb-8">
        {viewMode === 'analog' ? <AnalogClock /> : <DigitalClock />}
      </div>

      {/* Current Location Info */}
      <div className="mb-8 p-4 bg-card border border-border rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <Globe className="w-4 h-4 text-primary" />
          <span className="font-semibold">Current Location</span>
        </div>
        <div className="text-sm text-muted-foreground">
          <div>Saket, New Delhi, India</div>
          <div>UTC+5:30 (IST)</div>
        </div>
      </div>

      {/* World Clocks */}
      <div className="space-y-4">
        <h3 className="font-semibold flex items-center space-x-2">
          <Globe className="w-4 h-4" />
          <span>World Clocks</span>
        </h3>
        <WorldClocks />
      </div>

      {/* Additional Info */}
      <div className="mt-8 p-4 bg-muted/30 rounded-xl">
        <h4 className="font-semibold mb-2">System Information</h4>
        <div className="text-sm text-muted-foreground space-y-1">
          <div>Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</div>
          <div>Locale: {navigator.language}</div>
          <div>System Time: {time.toISOString()}</div>
        </div>
      </div>
    </div>
  );
};