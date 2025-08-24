import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckIcon } from '../components/IconComponents';



interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: string;
  requests: number;
  features: string[];
  isPopular?: boolean;
  isEnterprise?: boolean;
  cta: string;
  ctaVariant: 'primary' | 'secondary' | 'outline';
}

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans: Plan[] = [
    {
      id: 'free',
      name: 'Gratuit',
      description: 'Parfait pour tester et développer',
      price: 0,
      currency: '€',
      interval: 'mois',
      requests: 100,
      features: [
        '100 requêtes API par mois',
        'Accès aux logos de base',
        'Support communautaire',
        'Documentation complète',
        'Pas de carte de crédit requise',
        'Accès aux informations de marque essentielles'
      ],
      cta: 'Commencer gratuitement',
      ctaVariant: 'outline'
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Idéal pour les startups et développeurs',
      price: billingCycle === 'monthly' ? 29 : 290,
      currency: '€',
      interval: billingCycle === 'monthly' ? 'mois' : 'an',
      requests: 10000,
      features: [
        '10 000 requêtes API par mois',
        'Accès à tous les logos haute qualité',
        'Informations de marque complètes',
        'Support par email prioritaire',
        'Historique des requêtes',
        'API sans filigrane',
        'Webhooks et intégrations',
        'Analytics avancées'
      ],
      isPopular: true,
      cta: 'Commencer l\'essai gratuit',
      ctaVariant: 'primary'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Pour les grandes entreprises',
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
        'Facturation personnalisée',
        'Formation et onboarding',
        'API dédiée si nécessaire'
      ],
      isEnterprise: true,
      cta: 'Contacter les ventes',
      ctaVariant: 'secondary'
    }
  ];

  const getCtaButtonClasses = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105';
      case 'secondary':
        return 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500';
      case 'outline':
        return 'border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white bg-transparent';
      default:
        return 'bg-gray-700 hover:bg-gray-600 text-white';
    }
  };

  const savings = billingCycle === 'yearly' ? 'Économisez 2 mois par an' : '';

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Breadcrumb */}
      {/* <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb className="mb-8" />
        </div>
      </div> */}
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Tarifs simples et{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              transparents
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Choisissez le plan qui correspond à vos besoins. Tous nos plans incluent un essai gratuit de 14 jours avec synapBiz.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Mensuel
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-12 w-20 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-8 w-8 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-10' : 'translate-x-1'
                }`}
              />
            </button>
            <div className="flex items-center space-x-2">
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Annuel
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  -17%
                </span>
              )}
            </div>
          </div>
          
          {billingCycle === 'yearly' && (
            <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4 mb-8 inline-block">
              <p className="text-green-300 font-medium">
                 {savings} - Facturation annuelle
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border-2 p-8 ${
                  plan.isPopular
                    ? 'border-blue-500 bg-blue-900/10 shadow-2xl shadow-blue-500/20'
                    : plan.isEnterprise
                    ? 'border-gray-600 bg-gray-800/50'
                    : 'border-gray-700 bg-gray-800'
                } transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 text-sm font-semibold rounded-full shadow-lg text-nowrap">
                      Plan le plus populaire
                    </span>
                  </div>
                )}
                
                {plan.isEnterprise && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-2 text-sm font-semibold rounded-full shadow-lg">
                      Enterprise
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}{plan.currency}</span>
                      <span className="text-gray-400 text-xl ml-2">/{plan.interval}</span>
                    </div>
                    <p className="text-gray-300 text-lg mt-2">
                      {plan.requests.toLocaleString()} requêtes par mois
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${getCtaButtonClasses(plan.ctaVariant)}`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Questions fréquentes
          </h2>
          
          <div className="space-y-8">
            {[
              {
                question: 'Puis-je changer de plan à tout moment ?',
                answer: 'Oui, vous pouvez mettre à jour ou rétrograder votre plan à tout moment. Les changements prennent effet immédiatement.'
              },
              {
                question: 'Que se passe-t-il si je dépasse ma limite de requêtes ?',
                answer: 'Nous vous enverrons des notifications avant d\'atteindre votre limite. Si vous la dépassez, vous pouvez soit mettre à jour votre plan, soit attendre le renouvellement mensuel.'
              },
              {
                question: 'L\'essai gratuit inclut-il toutes les fonctionnalités ?',
                answer: 'Oui, l\'essai gratuit de 14 jours vous donne accès à toutes les fonctionnalités du plan Pro, sans engagement.'
              },
              {
                question: 'Proposez-vous des tarifs personnalisés ?',
                answer: 'Oui, pour les entreprises avec des besoins spécifiques, nous proposons des tarifs personnalisés. Contactez notre équipe commerciale.'
              },
              {
                question: 'Puis-je annuler à tout moment ?',
                answer: 'Absolument ! Vous pouvez annuler votre abonnement à tout moment sans frais supplémentaires.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez des milliers de développeurs qui utilisent déjà synapBiz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Commencer l'essai gratuit
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-xl font-semibold text-lg transition-all duration-200">
              Contacter les ventes
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
