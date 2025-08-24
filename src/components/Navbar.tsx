import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from './IconComponents';
import { Button } from './ui';


const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                <span className="text-white font-bold text-xl">B</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-2xl leading-none">synapBiz</span>
                                <span className="text-blue-400 text-xs font-medium tracking-wider">DEVELOPERS</span>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/features"
                            className="relative text-gray-300 hover:text-white transition-colors duration-200 font-medium group"
                        >
                            Fonctionnalités
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            to="/pricing"
                            className="relative text-gray-300 hover:text-white transition-colors duration-200 font-medium group"
                        >
                            Tarifs
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        {/* <Link
                            to="/docs"
                            className="relative text-gray-300 hover:text-white transition-colors duration-200 font-medium group"
                        >
                            Docs
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link> */}
                    </div>

                    {/* Authentication Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="secondary" size="md">
                            <Link to="/login">Connexion</Link>
                        </Button>
                        <Button variant="primary" size="md">
                            <Link to="/register">S'inscrire</Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
                            <Link
                                to="/features"
                                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Fonctionnalités
                            </Link>
                            <Link
                                to="/pricing"
                                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Tarifs
                            </Link>
                            <Link
                                to="/docs"
                                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Docs
                            </Link>
                            <div className="pt-4 space-y-2">
                                <Button variant="secondary" size="sm" fullWidth>
                                    <Link to="/login">Connexion</Link>
                                </Button>
                                <Button variant="primary" size="sm" fullWidth>
                                    <Link to="/register">S'inscrire</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
