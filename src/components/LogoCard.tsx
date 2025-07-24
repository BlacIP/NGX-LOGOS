import React, { useState } from 'react';
import { Download, ExternalLink, Tag } from 'lucide-react';
import { Logo } from '../types';

interface LogoCardProps {
  logo: Logo;
}

export const LogoCard: React.FC<LogoCardProps> = ({ logo }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to direct link
      window.open(url, '_blank');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-square bg-gray-50 relative overflow-hidden">
        {!imageError ? (
          <img
            src={logo.pngUrl}
            alt={logo.name}
            className={`w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setImageError(true);
              setIsLoading(false);
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-400 font-bold text-lg">
                  {logo.name.charAt(0)}
                </span>
              </div>
              <p className="text-sm text-gray-500">Logo not available</p>
            </div>
          </div>
        )}
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <button
              onClick={() => handleDownload(logo.pngUrl, `${logo.name.toLowerCase().replace(/\s+/g, '-')}.png`)}
              className="bg-white text-gray-900 px-3 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-1"
            >
              <Download className="w-4 h-4" />
              <span>PNG</span>
            </button>
            <button
              onClick={() => handleDownload(logo.svgUrl, `${logo.name.toLowerCase().replace(/\s+/g, '-')}.svg`)}
              className="bg-green-600 text-white px-3 py-2 rounded-lg font-medium text-sm hover:bg-green-700 transition-colors duration-200 flex items-center space-x-1"
            >
              <Download className="w-4 h-4" />
              <span>SVG</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">{logo.name}</h3>
          {logo.featured && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-gray-600 text-xs mb-3 line-clamp-2">{logo.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            {logo.category}
          </span>
          
          <div className="flex items-center space-x-1">
            <Tag className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-500">
              {logo.tags.length} tags
            </span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100 flex space-x-2">
          <button
            onClick={() => handleDownload(logo.pngUrl, `${logo.name.toLowerCase().replace(/\s+/g, '-')}.png`)}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-1"
          >
            <Download className="w-3 h-3" />
            <span>PNG</span>
          </button>
          <button
            onClick={() => handleDownload(logo.svgUrl, `${logo.name.toLowerCase().replace(/\s+/g, '-')}.svg`)}
            className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg text-xs font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-1"
          >
            <Download className="w-3 h-3" />
            <span>SVG</span>
          </button>
        </div>
      </div>
    </div>
  );
};