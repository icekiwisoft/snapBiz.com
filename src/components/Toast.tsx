import React, { useEffect, useState } from 'react';
import { 
  CheckIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon 
} from './IconComponents';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose: () => void;
  isVisible: boolean;
}

const Toast: React.FC<ToastProps> = ({ 
  message, 
  type, 
  duration = 5000, 
  onClose, 
  isVisible 
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(onClose, 300); // Wait for animation to complete
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-900/90 border-green-700 text-green-100';
      case 'error':
        return 'bg-red-900/90 border-red-700 text-red-100';
      case 'warning':
        return 'bg-yellow-900/90 border-yellow-700 text-yellow-100';
      case 'info':
        return 'bg-blue-900/90 border-blue-700 text-blue-100';
      default:
        return 'bg-gray-900/90 border-gray-700 text-gray-100';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
                  <CheckIcon className="w-5 h-5 text-green-400" />
        );
      case 'error':
        return (
                  <XCircleIcon className="w-5 h-5 text-red-400" />
        );
      case 'warning':
        return (
                  <ExclamationTriangleIcon className="w-5 h-5 text-yellow-400" />
        );
      case 'info':
        return (
                  <InformationCircleIcon className="w-5 h-5 text-blue-400" />
        );
      default:
        return null;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`${getToastStyles()} border rounded-xl px-6 py-4 shadow-2xl backdrop-blur-sm transition-all duration-300 ${
          isAnimating 
            ? 'translate-x-0 opacity-100 scale-100' 
            : 'translate-x-full opacity-0 scale-95'
        }`}
      >
        <div className="flex items-center space-x-3">
          {getIcon()}
          <span className="font-medium">{message}</span>
          <button
            onClick={() => {
              setIsAnimating(false);
              setTimeout(onClose, 300);
            }}
            className="ml-4 text-gray-400 hover:text-white transition-colors"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
