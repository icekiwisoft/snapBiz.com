import React, { useState } from 'react';
import { 
  CheckIcon,
  CreditCardIcon,
  BuildingOfficeIcon 
} from '../components/IconComponents';

interface Plan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: string;
  requests: number;
  features: string[];
  isPopular?: boolean;
  isCurrentPlan?: boolean;
}

interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
  plan: string;
  downloadUrl?: string;
}

const DashboardBillingPage: React.FC = () => {
  const [currentPlan, setCurrentPlan] = useState('free');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans: Plan[] = [
    {
      id: 'free',
      name: 'Gratuit',
      price: 0,
      currency: '€',
      interval: 'mois',
      requests: 100,
      features: [
        '100 requêtes API par mois',
        'Accès aux logos de base',
        'Support communautaire',
        'Documentation complète'
      ],
      isCurrentPlan: currentPlan === 'free'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: billingCycle === 'monthly' ? 29 : 290,
      currency: '€',
      interval: billingCycle === 'monthly' ? 'mois' : 'an',
      requests: 10000,
      features: [
        '10 000 requêtes API par mois',
        'Accès à tous les logos',
        'Informations de marque complètes',
        'Support par email',
        'Historique des requêtes',
        'API sans filigrane'
      ],
      isPopular: true,
      isCurrentPlan: currentPlan === 'pro'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: billingCycle === 'monthly' ? 99 : 990,
      currency: '€',
      interval: billingCycle === 'monthly' ? 'mois' : 'an',
      requests: 100000,
      features: [
        '100 000 requêtes API par mois',
        'Tout de Pro +',
        'Support prioritaire 24/7',
        'SLA garantie 99.9%',
        'Intégration personnalisée',
        'Gestionnaire de compte dédié',
        'Facturation personnalisée'
      ],
      isCurrentPlan: currentPlan === 'enterprise'
    }
  ];

  const mockInvoices: Invoice[] = [
    {
      id: 'INV-2024-001',
      date: '2024-01-01',
      amount: 29.00,
      status: 'paid',
      plan: 'Plan Pro - Janvier 2024',
      downloadUrl: '#'
    },
    {
      id: 'INV-2023-012',
      date: '2023-12-01',
      amount: 29.00,
      status: 'paid',
      plan: 'Plan Pro - Décembre 2023',
      downloadUrl: '#'
    },
    {
      id: 'INV-2023-011',
      date: '2023-11-01',
      amount: 29.00,
      status: 'paid',
      plan: 'Plan Pro - Novembre 2023',
      downloadUrl: '#'
    }
  ];

  const getStatusColor = (status: Invoice['status']) => {
    switch (status) {
      case 'paid':
        return 'bg-green-900 text-green-300';
      case 'pending':
        return 'bg-yellow-900 text-yellow-300';
      case 'failed':
        return 'bg-red-900 text-red-300';
      default:
        return 'bg-gray-900 text-gray-300';
    }
  };

  const getStatusText = (status: Invoice['status']) => {
    switch (status) {
      case 'paid':
        return 'Payé';
      case 'pending':
        return 'En attente';
      case 'failed':
        return 'Échec';
      default:
        return 'Inconnu';
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Facturation</h1>
        <p className="text-gray-400">
          Gérez votre abonnement synapBiz, consultez vos factures et mettez à jour vos informations de paiement
        </p>
      </div>

      {/* Current Plan Status */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Plan actuel</h2>
          <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">
            {plans.find(p => p.isCurrentPlan)?.name || 'Gratuit'}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <CheckIcon className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-gray-400 text-sm">Requêtes mensuelles</p>
                <p className="text-white text-2xl font-bold">
                  {plans.find(p => p.isCurrentPlan)?.requests.toLocaleString() || '100'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <CreditCardIcon className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-gray-400 text-sm">Prix mensuel</p>
                <p className="text-white text-2xl font-bold">
                  {currentPlan === 'free' ? 'Gratuit' : `${plans.find(p => p.isCurrentPlan && billingCycle === 'monthly')?.price || 0}€`}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <BuildingOfficeIcon className="w-8 h-8 text-purple-500" />
              <div>
                <p className="text-gray-400 text-sm">Prochain renouvellement</p>
                <p className="text-white text-lg font-semibold">31 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plans de tarification */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Plans de tarification</h2>
          
          {/* Billing Cycle Toggle */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Cycle de facturation:</span>
            <div className="flex bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'yearly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Annuel
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-gray-900 border rounded-lg p-6 ${
                plan.isCurrentPlan ? 'border-blue-500' : 'border-gray-700'
              } ${plan.isPopular ? 'ring-2 ring-blue-500' : ''}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Populaire
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    {plan.price === 0 ? 'Gratuit' : `${plan.price}${plan.currency}`}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-gray-400">/{plan.interval}</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">{plan.requests.toLocaleString()} requêtes/mois</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300 text-sm">
                    <CheckIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => setCurrentPlan(plan.id)}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.isCurrentPlan
                    ? 'bg-gray-700 text-gray-300 cursor-default'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
                disabled={plan.isCurrentPlan}
              >
                {plan.isCurrentPlan ? 'Plan actuel' : 'Choisir ce plan'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Informations de paiement */}
      

      {/* Historique des factures */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Historique des factures</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Facture</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Date</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Plan</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Montant</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Statut</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-700 hover:bg-gray-750">
                  <td className="py-3 px-4">
                    <span className="text-white font-medium">{invoice.id}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-300">
                      {new Date(invoice.date).toLocaleDateString('fr-FR')}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-300">{invoice.plan}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-white font-medium">{invoice.amount.toFixed(2)}€</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                      {getStatusText(invoice.status)}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                      Télécharger
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardBillingPage;
