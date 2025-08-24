import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { MagnifyingGlassIcon, HeartIcon, FolderIcon } from '../components/IconComponents';
import { Button, Input, Card, Badge } from '../components/ui';

interface Brand {
  id: number;
  name: string;
  domain: string;
  logoUrl: string;
  category: string;
}

interface SearchPageProps {
  // Empty interface for future props
}

const SearchPage: React.FC<SearchPageProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Mock data for demonstration
  const mockBrands: Brand[] = [
    { id: 1, name: 'Apple', domain: 'apple.com', logoUrl: '', category: 'Technology' },
    { id: 2, name: 'Google', domain: 'google.com', logoUrl: '', category: 'Technology' },
    { id: 3, name: 'Microsoft', domain: 'microsoft.com', logoUrl: '', category: 'Technology' },
    { id: 4, name: 'Meta', domain: 'meta.com', logoUrl: '', category: 'Social Media' },
    { id: 5, name: 'Netflix', domain: 'netflix.com', logoUrl: '', category: 'Entertainment' },
    { id: 6, name: 'Spotify', domain: 'spotify.com', logoUrl: '', category: 'Music' },
    { id: 7, name: 'Tesla', domain: 'tesla.com', logoUrl: '', category: 'Automotive' },
    { id: 8, name: 'Amazon', domain: 'amazon.com', logoUrl: '', category: 'E-commerce' },
    { id: 9, name: 'Nike', domain: 'nike.com', logoUrl: '', category: 'Sports' },
    { id: 10, name: 'Coca-Cola', domain: 'coca-cola.com', logoUrl: '', category: 'Beverage' },
    { id: 11, name: 'McDonald\'s', domain: 'mcdonalds.com', logoUrl: '', category: 'Food' },
    { id: 12, name: 'Samsung', domain: 'samsung.com', logoUrl: '', category: 'Technology' },
  ];

  const [searchResults, setSearchResults] = useState<Brand[]>(mockBrands);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    // Mock search functionality
    setTimeout(() => {
      const filtered = mockBrands.filter(brand =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
      setIsSearching(false);
    }, 800);
  };

  const getBrandInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase();
  };

  const getBrandColor = (name: string) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-purple-500 to-purple-600',
      'from-green-500 to-green-600',
      'from-red-500 to-red-600',
      'from-yellow-500 to-yellow-600',
      'from-pink-500 to-pink-600',
      'from-indigo-500 to-indigo-600',
      'from-teal-500 to-teal-600',
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rechercher une marque
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Trouvez instantanément les logos, couleurs et informations de n'importe quelle entreprise avec synapBiz
          </p>

          {/* Large Search Bar */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Entrez un nom de marque, domaine ou catégorie..."
                  size="lg"
                  className="text-lg"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-6">
                  {isSearching ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
                  ) : (
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSearching}
                loading={isSearching}
                className="px-8 py-4 text-lg font-semibold"
              >
                {isSearching ? 'Recherche...' : 'Rechercher'}
              </Button>
            </div>
          </form>
        </div>

        {/* Search Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              Résultats de recherche
            </h2>
            <span className="text-gray-400">
              {searchResults.length} marque{searchResults.length > 1 ? 's' : ''} trouvée{searchResults.length > 1 ? 's' : ''}
            </span>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {searchResults.map((brand) => (
              <div
                key={brand.id}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-all duration-200 cursor-pointer group hover:scale-105"
              >
                {/* Logo Placeholder */}
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getBrandColor(brand.name)} rounded-lg flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">
                      {getBrandInitials(brand.name)}
                    </span>
                  </div>
                </div>

                {/* Brand Info */}
                <div className="text-center">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {brand.domain}
                  </p>
                  <span className="inline-block px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    {brand.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors">
                    Voir détails
                  </button>
                  <button 
                    className="px-3 py-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white text-sm rounded-md transition-colors"
                    title="Ajouter aux favoris"
                    aria-label="Ajouter aux favoris"
                  >
                    <HeartIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {searchResults.length === 0 && !isSearching && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
                <FolderIcon className="w-12 h-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Aucun résultat trouvé</h3>
              <p className="text-gray-400">Essayez avec d'autres mots-clés ou vérifiez l'orthographe.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
