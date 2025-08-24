import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
    period: string;
  };
  className?: string;
  onClick?: () => void;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  description,
  icon,
  trend,
  className = '',
  onClick
}) => {
  return (
    <div
      className={`bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        {icon && (
          <div className="flex-shrink-0">
            {icon}
          </div>
        )}
        {trend && (
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
            trend.isPositive 
              ? 'bg-green-900/30 text-green-400 border border-green-700/50' 
              : 'bg-red-900/30 text-red-400 border border-red-700/50'
          }`}>
            <svg 
              className={`w-3 h-3 ${trend.isPositive ? 'text-green-400' : 'text-red-400'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {trend.isPositive ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              )}
            </svg>
            <span>{Math.abs(trend.value)}%</span>
          </div>
        )}
      </div>

      <div className="mb-2">
        <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
        <div className="text-2xl font-bold text-white">
          {value}
        </div>
      </div>

      {description && (
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      )}

      {trend && (
        <div className="mt-4 text-xs text-gray-500">
          vs {trend.period}
        </div>
      )}
    </div>
  );
};

export default StatsCard;
