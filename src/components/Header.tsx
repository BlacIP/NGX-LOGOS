import React from 'react';
import { Github, Download, Star } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NG</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Nigerian Logos</h1>
                <p className="text-xs text-gray-500">NGX Listed Companies</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Download className="w-4 h-4" />
                <span>NGX Listed Companies</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4" />
                <span>Multiple Formats</span>
              </div>
            </div>
            
            <a
              href="https://github.com/BlacIP/NGX-LOGOS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">View on GitHub</span>
              <span className="sm:hidden">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};