import React from 'react';
import { Link } from 'react-router-dom';
import { 
  XMarkIcon, 
  GiftIcon, 
  LinkIcon 
} from '@heroicons/react/24/outline';



const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-white font-semibold text-xl">synapBiz</span>
            </div>
            <p className="text-gray-400 text-sm">
              synapBiz - L'API de référence pour récupérer les ressources de marque instantanément.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produit</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Fonctionnalités</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Tarifs</Link></li>
              <li><Link to="/docs" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Confidentialité</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Confidentialité</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <p className="text-gray-400 text-sm">
              © 2024 synapBiz. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>API v2.0</span>
              <span>•</span>
              <span>99.9% uptime</span>
              <span>•</span>
              <span>Support 24/7</span>
            </div>
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 group">
              <span className="sr-only">Twitter</span>
              <XMarkIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300 group">
              <span className="sr-only">GitHub</span>
              <GiftIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300 group">
              <span className="sr-only">LinkedIn</span>
              <LinkIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
