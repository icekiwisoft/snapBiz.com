import React, { useState } from 'react';
import { 
  ChartBarIcon,
  CheckIcon,
  XCircleIcon,
  ClockIcon 
} from '../components/IconComponents';

interface DashboardStatsPageProps {
  // Empty interface for future props
}

interface StatsData {
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  averageResponseTime: number;
  topBrands: Array<{
    name: string;
    requests: number;
    percentage: number;
  }>;
  requestsOverTime: Array<{
    date: string;
    requests: number;
  }>;
}

const DashboardStatsPage: React.FC<DashboardStatsPageProps> = () => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  // Mock data for statistics
  const statsData: StatsData = {
    totalRequests: 1247,
    successfulRequests: 1189,
    failedRequests: 58,
    averageResponseTime: 245,
    topBrands: [
      { name: 'Apple', requests: 156, percentage: 12.5 },
      { name: 'Google', requests: 124, percentage: 10.0 },
      { name: 'Microsoft', requests: 98, percentage: 7.9 },
      { name: 'Meta', requests: 87, percentage: 7.0 },
      { name: 'Netflix', requests: 76, percentage: 6.1 },
      { name: 'Amazon', requests: 65, percentage: 5.2 },
      { name: 'Tesla', requests: 54, percentage: 4.3 },
      { name: 'Spotify', requests: 43, percentage: 3.4 }
    ],
    requestsOverTime: [
      { date: '2024-01-01', requests: 45 },
      { date: '2024-01-02', requests: 52 },
      { date: '2024-01-03', requests: 38 },
      { date: '2024-01-04', requests: 65 },
      { date: '2024-01-05', requests: 58 },
      { date: '2024-01-06', requests: 72 },
      { date: '2024-01-07', requests: 43 },
      { date: '2024-01-08', requests: 67 },
      { date: '2024-01-09', requests: 54 },
      { date: '2024-01-10', requests: 76 },
      { date: '2024-01-11', requests: 68 },
      { date: '2024-01-12', requests: 82 },
      { date: '2024-01-13', requests: 59 },
      { date: '2024-01-14', requests: 73 }
    ]
  };

  const successRate = ((statsData.successfulRequests / statsData.totalRequests) * 100).toFixed(1);
  const maxRequests = Math.max(...statsData.requestsOverTime.map(d => d.requests));

  const getTimeRangeText = (range: string) => {
    switch (range) {
      case '7d':
        return '7 derniers jours';
      case '30d':
        return '30 derniers jours';
      case '90d':
        return '90 derniers jours';
      default:
        return '30 derniers jours';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Statistiques</h1>
                  <p className="text-gray-400">
          Analysez l'utilisation de votre synapBiz API et optimisez vos intégrations
        </p>
        </div>
        
        {/* Time Range Selector */}
        <div className="flex bg-gray-800 rounded-lg p-1">
          {['7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range as '7d' | '30d' | '90d')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                timeRange === range
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              {getTimeRangeText(range)}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ChartBarIcon className="w-8 h-8 text-blue-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Total des requêtes</p>
              <p className="text-2xl font-bold text-white">{statsData.totalRequests.toLocaleString()}</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-400 text-sm font-medium">+12.5%</span>
            <span className="text-gray-400 text-sm ml-1">vs période précédente</span>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CheckIcon className="w-8 h-8 text-green-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Taux de succès</p>
              <p className="text-2xl font-bold text-white">{successRate}%</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-400 text-sm font-medium">+2.1%</span>
            <span className="text-gray-400 text-sm ml-1">vs période précédente</span>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <XCircleIcon className="w-8 h-8 text-red-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Requêtes échouées</p>
              <p className="text-2xl font-bold text-white">{statsData.failedRequests}</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-red-400 text-sm font-medium">-8.3%</span>
            <span className="text-gray-400 text-sm ml-1">vs période précédente</span>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ClockIcon className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Temps de réponse moyen</p>
              <p className="text-2xl font-bold text-white">{statsData.averageResponseTime}ms</p>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-400 text-sm font-medium">-15ms</span>
            <span className="text-gray-400 text-sm ml-1">vs période précédente</span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Requests Over Time Chart */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Évolution des requêtes</h3>
          <div className="space-y-4">
            {/* Simple Bar Chart */}
            <div className="flex items-end space-x-2 h-48">
              {statsData.requestsOverTime.slice(-14).map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm min-h-1"
                    style={{ height: `${(data.requests / maxRequests) * 100}%` }}
                  />
                  <span className="text-xs text-gray-400 mt-2 transform -rotate-45 origin-top-left">
                    {new Date(data.date).getDate()}/{new Date(data.date).getMonth() + 1}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>0</span>
              <span>{maxRequests} requêtes</span>
            </div>
          </div>
        </div>

        {/* Top Brands */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Marques les plus recherchées</h3>
          <div className="space-y-4">
            {statsData.topBrands.map((brand, index) => (
              <div key={brand.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-white font-medium">{brand.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      style={{ width: `${(brand.percentage / 15) * 100}%` }}
                    />
                  </div>
                  <span className="text-gray-300 text-sm font-medium w-12 text-right">
                    {brand.requests}
                  </span>
                  <span className="text-gray-400 text-sm w-12 text-right">
                    {brand.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Request Types Breakdown */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Types de requêtes</h3>
          <div className="space-y-4">
            {[
              { type: 'Logo Search', count: 756, percentage: 60.6, color: 'from-blue-500 to-blue-600' },
              { type: 'Brand Info', count: 312, percentage: 25.0, color: 'from-purple-500 to-purple-600' },
              { type: 'Color Palette', count: 124, percentage: 9.9, color: 'from-green-500 to-green-600' },
              { type: 'Font Info', count: 55, percentage: 4.4, color: 'from-yellow-500 to-yellow-600' }
            ].map((item) => (
              <div key={item.type} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`} />
                  <span className="text-white font-medium">{item.type}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${item.color} h-2 rounded-full`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-gray-300 text-sm font-medium w-12 text-right">
                    {item.count}
                  </span>
                  <span className="text-gray-400 text-sm w-12 text-right">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Times */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Temps de réponse par endpoint</h3>
          <div className="space-y-4">
            {[
              { endpoint: '/api/v1/logo', responseTime: 142, status: 'excellent' },
              { endpoint: '/api/v1/brand', responseTime: 198, status: 'good' },
              { endpoint: '/api/v1/colors', responseTime: 276, status: 'average' },
              { endpoint: '/api/v1/search', responseTime: 324, status: 'slow' }
            ].map((item) => (
              <div key={item.endpoint} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    item.status === 'excellent' ? 'bg-green-500' :
                    item.status === 'good' ? 'bg-blue-500' :
                    item.status === 'average' ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <span className="text-white font-mono text-sm">{item.endpoint}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-300 text-sm font-medium">
                    {item.responseTime}ms
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.status === 'excellent' ? 'bg-green-900 text-green-300' :
                    item.status === 'good' ? 'bg-blue-900 text-blue-300' :
                    item.status === 'average' ? 'bg-yellow-900 text-yellow-300' : 'bg-red-900 text-red-300'
                  }`}>
                    {item.status === 'excellent' ? 'Excellent' :
                     item.status === 'good' ? 'Bon' :
                     item.status === 'average' ? 'Moyen' : 'Lent'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Activité récente</h3>
        <div className="space-y-4">
          {[
            { time: 'Il y a 2 minutes', action: 'Logo search pour "Apple"', method: 'GET', status: 200, responseTime: '142ms' },
            { time: 'Il y a 5 minutes', action: 'Brand info pour "Google"', method: 'GET', status: 200, responseTime: '198ms' },
            { time: 'Il y a 8 minutes', action: 'Color palette pour "Microsoft"', method: 'GET', status: 200, responseTime: '276ms' },
            { time: 'Il y a 12 minutes', action: 'Logo search pour "Meta"', method: 'GET', status: 404, responseTime: '89ms' },
            { time: 'Il y a 15 minutes', action: 'Brand search pour "Netflix"', method: 'GET', status: 200, responseTime: '201ms' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
              <div className="flex items-center space-x-4">
                <div className={`w-2 h-2 rounded-full ${activity.status === 200 ? 'bg-green-500' : 'bg-red-500'}`} />
                <div>
                  <p className="text-white font-medium">{activity.action}</p>
                  <p className="text-gray-400 text-sm">{activity.time}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-300 font-mono bg-gray-700 px-2 py-1 rounded">
                  {activity.method}
                </span>
                <span className={`px-2 py-1 rounded ${
                  activity.status === 200 ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                }`}>
                  {activity.status}
                </span>
                <span className="text-gray-400">{activity.responseTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardStatsPage;
