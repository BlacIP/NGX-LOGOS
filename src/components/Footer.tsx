import React from 'react';
import { Github, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NG</span>
              </div>
              <span className="text-xl font-bold">Nigerian Logos</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A curated collection of 150+ Nigerian company logos, made available as an open-source 
              resource for designers, developers, and researchers.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Browse All Logos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Download Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contribute
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Report Issues
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/yourusername/nigerian-logos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Made with love for Nigeria</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Nigerian Logos. Open source project licensed under MIT.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">
            All logos are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};