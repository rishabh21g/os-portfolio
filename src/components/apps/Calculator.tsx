import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForValue, setWaitingForValue] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForValue) {
      setDisplay(num);
      setWaitingForValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForValue(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForValue(false);
  };

  const clearEntry = () => {
    setDisplay('0');
  };

  const inputDot = () => {
    if (waitingForValue) {
      setDisplay('0.');
      setWaitingForValue(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const buttons = [
    { label: 'C', type: 'function', action: clear, color: 'bg-red-500 hover:bg-red-600 text-white' },
    { label: 'CE', type: 'function', action: clearEntry, color: 'bg-orange-500 hover:bg-orange-600 text-white' },
    { label: '⌫', type: 'function', action: () => setDisplay(display.slice(0, -1) || '0'), color: 'bg-gray-500 hover:bg-gray-600 text-white' },
    { label: '÷', type: 'operation', action: () => inputOperation('÷'), color: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '7', type: 'number', action: () => inputNumber('7'), color: 'bg-gray-200 hover:bg-gray-300 text-gray-800' },
    { label: '8', type: 'number', action: () => inputNumber('8'), color: 'bg-gray-200 hover:bg-gray-300 text-gray-800' },
    { label: '9', type: 'number', action: () => inputNumber('9'), color: 'bg-gray-200 hover:bg-gray-300 text-gray-800' },
    { label: '×', type: 'operation', action: () => inputOperation('×'), color: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '4', type: 'number', action: () => inputNumber('4'), color: 'bg-gray-200 hover:bg-gray-300 text-gray-800' },
    { label: '5', type: 'number', action: () => inputNumber('5'), color: 'bg-gray-200 hover:bg-gray-300 text-gray-800' },
    { label: '6', type: 'number', action: () => inputNumber('6'), color: 'bg-gray-200 hover:bg-gray-300 text-gray-800' },
    { label: '-', type: 'operation', action: () => inputOperation('-'), color: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '1', type: 'number', action: () => inputNumber('1'), color: 'bg-gray-200 hover:bg-gray-300 text-gray-800' },
    { label: '2', type: 'number', action: () => inputNumber('2'), color: 'bg-gray-200 hover:bg-gray-300 text-gray-800' },
    { label: '3', type: 'number', action: () => inputNumber('3'), color: 'bg-gray-200 hover:bg-gray-300 text-gray-800' },
    { label: '+', type: 'operation', action: () => inputOperation('+'), color: 'bg-blue-500 hover:bg-blue-600 text-white' },
    
    { label: '0', type: 'number', action: () => inputNumber('0'), color: 'bg-gray-200 hover:bg-gray-300 text-gray-800', span: 'col-span-2' },
    { label: '.', type: 'number', action: inputDot, color: 'bg-gray-200 hover:bg-gray-300 text-gray-800' },
    { label: '=', type: 'operation', action: performCalculation, color: 'bg-green-500 hover:bg-green-600 text-white' },
  ];

  return (
    <div className="h-full bg-gray-100 dark:bg-gray-800 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-sm mx-auto">
        {/* Display */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="text-right">
            <div className="text-gray-500 dark:text-gray-400 text-sm h-6">
              {previousValue !== null && operation ? `${previousValue} ${operation}` : ''}
            </div>
            <motion.div
              key={display}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.1 }}
              className="text-3xl font-mono font-bold text-gray-800 dark:text-gray-100"
            >
              {display}
            </motion.div>
          </div>
        </div>

        {/* Buttons */}
        <div className="p-4">
          <div className="grid grid-cols-4 gap-2">
            {buttons.map((button, index) => (
              <motion.button
                key={button.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={button.action}
                className={`
                  ${button.color}
                  ${button.span || ''}
                  h-12 rounded-lg font-semibold text-lg
                  transition-colors duration-150
                  shadow-md hover:shadow-lg
                  active:shadow-sm
                `}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
              >
                {button.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center text-xs text-gray-500 dark:text-gray-400">
            RishabhOS Calculator v1.0
          </div>
        </div>
      </div>
    </div>
  );
};