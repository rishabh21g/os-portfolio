import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Snowflake, 
  Wind, 
  Droplets, 
  Eye, 
  Thermometer,
  MapPin,
  RefreshCw
} from 'lucide-react';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  uvIndex: number;
  pressure: number;
  feelsLike: number;
  forecast: ForecastDay[];
}

interface ForecastDay {
  day: string;
  icon: string;
  high: number;
  low: number;
  condition: string;
}

// Mock weather data (in a real app, this would come from an API)
const mockWeatherData: WeatherData = {
  location: 'Saket, New Delhi',
  temperature: 28,
  condition: 'Partly Cloudy',
  humidity: 65,
  windSpeed: 12,
  visibility: 8,
  uvIndex: 6,
  pressure: 1013,
  feelsLike: 32,
  forecast: [
    { day: 'Today', icon: 'partly-cloudy', high: 30, low: 22, condition: 'Partly Cloudy' },
    { day: 'Tomorrow', icon: 'sunny', high: 32, low: 24, condition: 'Sunny' },
    { day: 'Wed', icon: 'cloudy', high: 26, low: 20, condition: 'Cloudy' },
    { day: 'Thu', icon: 'rainy', high: 24, low: 18, condition: 'Rainy' },
    { day: 'Fri', icon: 'partly-cloudy', high: 28, low: 21, condition: 'Partly Cloudy' },
  ]
};

export const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData>(mockWeatherData);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="w-16 h-16 text-yellow-500" />;
      case 'partly-cloudy':
        return <Cloud className="w-16 h-16 text-gray-400" />;
      case 'cloudy':
        return <Cloud className="w-16 h-16 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-16 h-16 text-blue-500" />;
      case 'snowy':
        return <Snowflake className="w-16 h-16 text-blue-200" />;
      default:
        return <Sun className="w-16 h-16 text-yellow-500" />;
    }
  };

  const getConditionGradient = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return 'from-yellow-400 to-orange-500';
      case 'partly-cloudy':
        return 'from-blue-400 to-gray-500';
      case 'cloudy':
        return 'from-gray-400 to-gray-600';
      case 'rainy':
        return 'from-blue-500 to-blue-700';
      case 'snowy':
        return 'from-blue-200 to-gray-400';
      default:
        return 'from-blue-400 to-purple-500';
    }
  };

  const refreshWeather = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLastUpdated(new Date());
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 overflow-auto">
      {/* Header */}
      <div className={`bg-gradient-to-r ${getConditionGradient(weather.condition)} text-white p-6`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">{weather.location}</span>
          </div>
          
          <button
            onClick={refreshWeather}
            disabled={loading}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <motion.div
              animate={{ rotate: loading ? 360 : 0 }}
              transition={{ duration: 1, repeat: loading ? Infinity : 0 }}
            >
              <RefreshCw className="w-5 h-5" />
            </motion.div>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-bold mb-2"
            >
              {weather.temperature}°C
            </motion.div>
            <div className="text-lg opacity-90">{weather.condition}</div>
            <div className="text-sm opacity-75">
              Feels like {weather.feelsLike}°C
            </div>
          </div>
          
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {getWeatherIcon(weather.condition)}
          </motion.div>
        </div>
      </div>

      {/* Weather Details */}
      <div className="p-6 space-y-6">
        {/* Current Conditions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Droplets, label: 'Humidity', value: `${weather.humidity}%`, color: 'text-blue-500' },
            { icon: Wind, label: 'Wind Speed', value: `${weather.windSpeed} km/h`, color: 'text-green-500' },
            { icon: Eye, label: 'Visibility', value: `${weather.visibility} km`, color: 'text-purple-500' },
            { icon: Thermometer, label: 'Pressure', value: `${weather.pressure} hPa`, color: 'text-red-500' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <item.icon className={`w-6 h-6 ${item.color}`} />
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
                  <div className="font-semibold">{item.value}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 5-Day Forecast */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">5-Day Forecast</h3>
          
          <div className="space-y-3">
            {weather.forecast.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8">
                    {getWeatherIcon(day.icon)}
                  </div>
                  <div>
                    <div className="font-semibold">{day.day}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{day.condition}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-semibold">{day.high}°</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{day.low}°</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* UV Index & Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h4 className="font-bold mb-3">UV Index</h4>
            <div className="flex items-center space-x-3">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-red-500 rounded-full"></div>
                <div className="absolute inset-1 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">{weather.uvIndex}</span>
                </div>
              </div>
              <div>
                <div className="font-semibold">Moderate</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Wear sunscreen when outside
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h4 className="font-bold mb-3">Last Updated</h4>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {lastUpdated.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {lastUpdated.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric'
              })}
            </div>
          </div>
        </div>

        {/* App Info */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
          Weather data simulated for RishabhOS • Real implementation would use OpenWeatherMap API
        </div>
      </div>
    </div>
  );
};