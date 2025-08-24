import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  MagnifyingGlassIcon,
  BuildingOfficeIcon,
  SwatchIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  ChartBarIcon,
  CheckIcon
} from '../components/IconComponents';


const FeaturesPage: React.FC = () => {
  const features = [
    {
      title: 'Recherche de Logos',
      description: 'Trouvez instantanément les logos de n\'importe quelle marque avec notre API de recherche intelligente.',
      icon: (
        <MagnifyingGlassIcon className="w-8 h-8 text-blue-500" />
      ),
      benefits: ['Recherche par nom de marque', 'Recherche par domaine', 'Suggestions intelligentes', 'Résultats en temps réel']
    },
    {
      title: 'Informations de Marque',
      description: 'Accédez à des données complètes sur les entreprises : description, industrie, localisation, et plus encore.',
      icon: (
        <BuildingOfficeIcon className="w-8 h-8 text-purple-500" />
      ),
      benefits: ['Profils d\'entreprise détaillés', 'Informations financières', 'Historique et fondation', 'Données de contact']
    },
    {
      title: 'Palettes de Couleurs',
      description: 'Récupérez les couleurs officielles des marques pour maintenir la cohérence visuelle.',
      icon: (
        <SwatchIcon className="w-8 h-8 text-green-500" />
      ),
      benefits: ['Couleurs principales', 'Couleurs secondaires', 'Codes hexadécimaux', 'Palettes complètes']
    },
    {
      title: 'Typographie',
      description: 'Découvrez les polices utilisées par les marques pour vos projets de design.',
      icon: (
        <DocumentTextIcon className="w-8 h-8 text-yellow-500" />
      ),
      benefits: ['Polices principales', 'Polices alternatives', 'Informations de licence', 'Exemples d\'utilisation']
    },
    {
      title: 'API RESTful',
      description: 'Interface simple et intuitive pour intégrer nos données dans vos applications.',
      icon: (
        <CodeBracketIcon className="w-8 h-8 text-red-500" />
      ),
      benefits: ['Documentation complète', 'SDKs disponibles', 'Webhooks', 'Rate limiting intelligent']
    },
    {
      title: 'Analytics Avancées',
      description: 'Surveillez l\'utilisation de votre API et optimisez vos intégrations.',
      icon: (
        <ChartBarIcon className="w-8 h-8 text-indigo-500" />
      ),
      benefits: ['Tableaux de bord en temps réel', 'Rapports détaillés', 'Métriques de performance', 'Alertes personnalisées']
    }
  ];

  const useCases = [
    {
      title: 'Applications Web',
      description: 'Intégrez des logos et informations de marque dans vos sites web et applications.',
      examples: ['E-commerce', 'SaaS', 'Portails d\'entreprise', 'Sites de comparaison']
    },
    {
      title: 'Applications Mobiles',
      description: 'Enrichissez vos apps mobiles avec des données de marque en temps réel.',
      examples: ['Apps de shopping', 'Applications B2B', 'Outils de productivité', 'Jeux']
    },
    {
      title: 'Design & Marketing',
      description: 'Accédez aux ressources de marque pour vos projets créatifs.',
      examples: ['Agences de design', 'Marketing digital', 'Branding', 'Présentations']
    },
    {
      title: 'Intelligence Artificielle',
      description: 'Alimentez vos modèles IA avec des données de marque structurées.',
      examples: ['Chatbots', 'Recommandations', 'Analyse de sentiment', 'Automatisation']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Toutes les{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              fonctionnalités
            </span>{' '}
            dont vous avez besoin
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            synapBiz vous donne accès à une vaste collection de ressources de marque pour enrichir vos applications et projets.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2">
                      <CheckIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cas d'usage populaires
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez comment les développeurs et entreprises utilisent notre API
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <span
                      key={exampleIndex}
                      className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Intégrez synapBiz en quelques minutes et enrichissez vos applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Commencer l'essai gratuit
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-xl font-semibold text-lg transition-all duration-200">
              Voir la documentation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
