import React, { useState } from 'react';
import { 
  KeyIcon,
  DocumentIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  CheckIcon,
  ClockIcon,
  InformationCircleIcon
} from '../components/IconComponents';



const DashboardApiPage: React.FC = () => {
  const [apiKey] = useState('bf_1d7PRbrybq7VU1Gsdf_12345678901234567890');
  const [isKeyVisible, setIsKeyVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Mock usage data
  const usage = {
    current: 42,
    limit: 100,
    percentage: 42,
    period: 'Ce mois-ci',
    resetDate: '31 janvier 2024'
  };

  const handleCopyApiKey = async () => {
    try {
      await navigator.clipboard.writeText(apiKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  const toggleKeyVisibility = () => {
    setIsKeyVisible(!isKeyVisible);
  };

  const maskedApiKey = apiKey.replace(/(.{8})(.*)(.{8})/, '$1' + '•'.repeat(32) + '$3');

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">API Dashboard</h1>
        <p className="text-gray-400">
          Gérez votre clé synapBiz API et surveillez votre consommation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Key Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
              <KeyIcon className="w-6 h-6 text-blue-500" />
              <span>Votre Clé API</span>
            </h2>
            <span className="px-3 py-1 bg-green-900 text-green-300 text-sm rounded-full">
              Active
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Clé API
              </label>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 font-mono text-sm">
                  <span className={`text-gray-300 ${!isKeyVisible ? 'select-none' : ''}`}>
                    {isKeyVisible ? apiKey : maskedApiKey}
                  </span>
                </div>
                <button
                  onClick={toggleKeyVisibility}
                  className="px-3 py-3 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg transition-colors"
                  title={isKeyVisible ? 'Masquer' : 'Afficher'}
                >
                  {isKeyVisible ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={handleCopyApiKey}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    copied
                      ? 'bg-green-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {copied ? (
                    <div className="flex items-center space-x-2">
                                      <CheckIcon className="w-4 h-4" />
                      <span>Copié!</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                                      <DocumentIcon className="w-4 h-4" />
                      <span>Copier</span>
                    </div>
                  )}
                </button>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <InformationCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                              <p className="text-blue-300 text-sm font-medium mb-1">Sécurité importante</p>
            <p className="text-blue-200 text-sm">
              Gardez votre clé synapBiz API secrète. Ne la partagez jamais publiquement ou dans votre code frontend.
            </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
              <ChartBarIcon className="w-6 h-6 text-purple-500" />
              <span>Consommation</span>
            </h2>
            <span className="text-gray-400 text-sm">{usage.period}</span>
          </div>

          <div className="space-y-6">
            {/* Usage Stats */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 font-medium">Appels API utilisés</span>
                <span className="text-white font-bold text-2xl">
                  {usage.current}/{usage.limit}
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                              <div
                className={`h-3 rounded-full transition-all duration-300 ${
                  usage.percentage > 80
                    ? 'bg-gradient-to-r from-red-500 to-red-600'
                    : usage.percentage > 60
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600'
                }`}
                style={{ width: `${usage.percentage}%` }}
              />
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">
                  {usage.percentage}% utilisé
                </span>
                <span className="text-gray-400">
                  Renouvellement: {usage.resetDate}
                </span>
              </div>
            </div>

            {/* Usage Breakdown */}
            <div className="border-t border-gray-700 pt-4">
              <h3 className="text-gray-300 font-medium mb-3">Détails d'utilisation</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Recherche de logos</span>
                  <span className="text-white font-medium">28 appels</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Informations de marque</span>
                  <span className="text-white font-medium">14 appels</span>
                </div>
              </div>
            </div>

            {/* Upgrade Notice */}
            {usage.percentage > 80 && (
              <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <ExclamationTriangleIcon className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-yellow-300 text-sm font-medium mb-1">Limite bientôt atteinte</p>
                    <p className="text-yellow-200 text-sm">
                      Pensez à passer à un plan supérieur pour éviter les interruptions.
                    </p>
                    <button className="mt-2 px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white text-sm rounded transition-colors">
                      Voir les plans
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
          <ClockIcon className="w-6 h-6 text-green-500" />
          <span>Activité récente</span>
        </h2>

        <div className="space-y-3">
          {[
            { time: 'Il y a 2 minutes', action: 'Recherche logo pour "Apple"', status: 'success' },
            { time: 'Il y a 15 minutes', action: 'Informations de marque "Google"', status: 'success' },
            { time: 'Il y a 1 heure', action: 'Recherche logo pour "Microsoft"', status: 'success' },
            { time: 'Il y a 2 heures', action: 'Tentative d\'accès non autorisé', status: 'error' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`} />
                <span className="text-gray-300">{activity.action}</span>
              </div>
              <span className="text-gray-500 text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardApiPage;
