import React, { useState } from 'react';
import { MagnifyingGlassIcon, CheckIcon } from './IconComponents';
import { Button, Input } from './ui';


const HeroSection: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock search for now - will be implemented later
    console.log('Searching for:', searchValue);
  };

  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
                  <div className="inline-flex items-center space-x-2 bg-blue-900/20 border border-blue-700/50 rounded-full px-6 py-3 mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-blue-300 text-sm font-medium">Nouveau : synapBiz API v2.0 disponible</span>
          </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Toutes les ressources de marque,{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            via une simple API
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Récupérez instantanément les logos, couleurs et informations de n'importe quelle entreprise. 
          Une API puissante pour accélérer votre développement et améliorer votre UX.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <div className="flex items-center bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-2 shadow-2xl">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Recherchez une marque (ex: Apple, Google, Microsoft)..."
                  className="bg-transparent text-white placeholder-gray-400 text-lg font-medium border-0 p-0 focus:ring-0 focus:border-0"
                />
                              <div className="absolute inset-y-0 right-0 flex items-center pr-6">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
              </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="px-8 py-4 text-lg font-semibold"
              >
                Commencer
              </Button>
            </div>
          </div>
          
          {/* Search Suggestions */}
          <div className="mt-4 flex items-center justify-center space-x-6 text-sm text-gray-400">
            <span className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4 text-green-400" />
              <span>100+ millions de logos</span>
            </span>
            <span className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4 text-green-400" />
              <span>Mise à jour en temps réel</span>
            </span>
          </div>
        </form>

        {/* Additional Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-400" />
            <span>API gratuite jusqu'à 100 appels/mois</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5 h-5 text-green-400" />
            <span>Aucune carte de crédit requise</span>
          </div>
        </div>

        {/* Popular Brands Preview */}
        <div className="mt-20">
          <p className="text-gray-500 text-sm mb-8 uppercase tracking-wider font-medium">Marques populaires</p>
          <div className="flex items-center justify-center gap-8">
            {[
              { name: 'Apple', color: 'from-gray-800 to-gray-700' },
              { name: 'Google', color: 'from-blue-800 to-blue-700' },
              { name: 'Microsoft', color: 'from-green-800 to-green-700' },
              { name: 'Meta', color: 'from-blue-800 to-purple-700' },
              { name: 'Netflix', color: 'from-red-800 to-red-700' }
            ].map((brand) => (
              <div
                key={brand.name}
                className="group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${brand.color} rounded-2xl flex items-center justify-center border border-gray-600 group-hover:border-gray-500 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl`}>
                  <span className="text-white text-sm font-bold">{brand.name.slice(0, 2)}</span>
                </div>
                <p className="text-gray-400 text-xs text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
