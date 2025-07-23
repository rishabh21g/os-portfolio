import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, MapPin, Clock, Users } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  location?: string;
  type: 'achievement' | 'education' | 'work' | 'personal';
  description?: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'CompassionateThon Finals',
    date: new Date(2025, 5, 15), // June 15, 2025
    time: '10:00 AM',
    location: 'IIT Madras, Chennai',
    type: 'achievement',
    description: 'Finalist in CompassionateThon - Top 15 out of 7,000+ participants'
  },
  {
    id: '2', 
    title: 'Chess Tournament - Paradox\'25',
    date: new Date(2025, 5, 20), // June 20, 2025
    time: '2:00 PM',
    location: 'IIT Madras, Chennai',
    type: 'achievement',
    description: '3rd Place in inter-college chess competition'
  },
  {
    id: '3',
    title: 'Software Developer Intern - Start Date',
    date: new Date(2025, 6, 1), // July 1, 2025
    time: '9:00 AM',
    location: 'Logicknots (Remote)',
    type: 'work',
    description: 'Started internship working on canvas interaction tools'
  },
  {
    id: '4',
    title: 'Data Science Course - Semester 1',
    date: new Date(2025, 1, 1), // February 1, 2025
    time: '8:00 AM',
    location: 'IIT Madras',
    type: 'education',
    description: 'Bachelor in Data Science with AI and ML'
  }
];

export const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');

  const today = new Date();
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + (direction === 'next' ? 1 : -1)));
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const getEventTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'achievement':
        return 'bg-yellow-500 text-yellow-900';
      case 'education':
        return 'bg-blue-500 text-blue-900';
      case 'work':
        return 'bg-green-500 text-green-900';
      case 'personal':
        return 'bg-purple-500 text-purple-900';
      default:
        return 'bg-gray-500 text-gray-900';
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    const currentDateObj = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      const date = new Date(currentDateObj);
      const isCurrentMonth = date.getMonth() === currentDate.getMonth();
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      const dayEvents = getEventsForDate(date);

      days.push(
        <motion.div
          key={date.toISOString()}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.01 }}
          className={`
            min-h-24 p-2 border border-gray-200 dark:border-gray-700 cursor-pointer
            transition-colors duration-200 relative
            ${isCurrentMonth ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900 text-gray-400'}
            ${isToday ? 'ring-2 ring-primary' : ''}
            ${isSelected ? 'bg-primary/10' : ''}
            hover:bg-gray-50 dark:hover:bg-gray-700
          `}
          onClick={() => setSelectedDate(date)}
        >
          <div className={`
            text-sm font-semibold mb-1
            ${isToday ? 'text-primary' : ''}
          `}>
            {date.getDate()}
          </div>
          
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className={`
                  text-xs px-1 py-0.5 rounded truncate
                  ${getEventTypeColor(event.type)}
                `}
                title={event.title}
              >
                {event.title}
              </motion.div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-500">
                +{dayEvents.length - 2} more
              </div>
            )}
          </div>
        </motion.div>
      );

      currentDateObj.setDate(currentDateObj.getDate() + 1);
    }

    return days;
  };

  return (
    <div className="h-full bg-background flex">
      {/* Main Calendar */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-border bg-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h1>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentDate(new Date())}
                className="px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded-lg transition-colors"
              >
                Today
              </button>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 flex flex-col">
          {/* Day Headers */}
          <div className="grid grid-cols-7 border-b border-border bg-muted/50">
            {dayNames.map((day) => (
              <div key={day} className="p-3 text-center text-sm font-semibold text-muted-foreground">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="flex-1 grid grid-cols-7">
            {renderCalendarDays()}
          </div>
        </div>
      </div>

      {/* Sidebar - Event Details */}
      <AnimatePresence>
        {selectedDate && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 320, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-l border-border bg-card overflow-hidden"
          >
            <div className="p-4 h-full overflow-auto">
              <h3 className="font-bold text-lg mb-4">
                {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h3>

              <div className="space-y-4">
                {getEventsForDate(selectedDate).map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 border border-border rounded-lg"
                  >
                    <div className={`inline-block px-2 py-1 text-xs rounded mb-2 ${getEventTypeColor(event.type)}`}>
                      {event.type.toUpperCase()}
                    </div>
                    
                    <h4 className="font-semibold mb-2">{event.title}</h4>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      
                      {event.location && (
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                    
                    {event.description && (
                      <p className="text-sm text-foreground mt-3">{event.description}</p>
                    )}
                  </motion.div>
                ))}

                {getEventsForDate(selectedDate).length === 0 && (
                  <div className="text-center text-muted-foreground py-8">
                    <div className="text-4xl mb-2">📅</div>
                    <p>No events scheduled for this day</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};