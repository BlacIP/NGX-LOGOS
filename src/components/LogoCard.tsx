import React, { useState } from 'react';
import { Download, ExternalLink, Tag, Share2, Copy, Check } from 'lucide-react';
import { Logo } from '../types';

interface LogoCardProps {
  logo: Logo;
}

export const LogoCard: React.FC<LogoCardProps> = ({ logo }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleDownload = async (url: string, filename: string) => {
    try {
      // For local files, create a direct download link
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      window.open(url, '_blank');
    }
  };

  const handleCopyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  const getLogoUrl = (format: 'png' | 'svg', size?: string) => {
    const baseUrl = window.location.origin;
    if (format === 'svg') {
      return `${baseUrl}${logo.downloadUrls.svg}`;
    }
    switch (size) {
      case '250':
        return `${baseUrl}${logo.downloadUrls.png250}`;
      case '500':
        return `${baseUrl}${logo.downloadUrls.png500}`;
      case '1000':
        return `${baseUrl}${logo.downloadUrls.png1000}`;
      default:
        return `${baseUrl}${logo.downloadUrls.png500}`;
    }
  };

  const generateEmbedCode = (format: 'png' | 'svg', size?: string) => {
    const url = getLogoUrl(format, size);
    return `<img src="${url}" alt="${logo.name}" width="${size || '500'}" height="${size || '500'}" />`;
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
              onClick={() => handleDownload(logo.downloadUrls.png500, `${logo.name.toLowerCase().replace(/\s+/g, '-')}-500px.png`)}
              className="bg-white text-gray-900 px-2 py-1 rounded-md font-medium text-xs hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-1"
            >
              <Download className="w-3 h-3" />
              <span>PNG</span>
            </button>
            <button
              onClick={() => handleDownload(logo.downloadUrls.svg, `${logo.name.toLowerCase().replace(/\s+/g, '-')}.svg`)}
              className="bg-green-600 text-white px-2 py-1 rounded-md font-medium text-xs hover:bg-green-700 transition-colors duration-200 flex items-center space-x-1"
            >
              <Download className="w-3 h-3" />
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
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Tag className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-500">
                {logo.tags.length} tags
              </span>
            </div>
            
            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                title="Share logo"
              >
                <Share2 className="w-3 h-3" />
              </button>
              
              {showShareMenu && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 w-64">
                  <div className="p-3">
                    <h4 className="text-xs font-semibold text-gray-900 mb-2">Share Logo</h4>
                    
                    <div className="space-y-2">
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">Direct Link (PNG 500px)</label>
                        <div className="flex items-center space-x-1">
                          <input
                            type="text"
                            value={getLogoUrl('png', '500')}
                            readOnly
                            className="flex-1 text-xs px-2 py-1 border border-gray-200 rounded bg-gray-50"
                          />
                          <button
                            onClick={() => handleCopyToClipboard(getLogoUrl('png', '500'), 'png-link')}
                            className="p-1 text-gray-400 hover:text-gray-600"
                            title="Copy link"
                          >
                            {copiedItem === 'png-link' ? (
                              <Check className="w-3 h-3 text-green-600" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">SVG Link</label>
                        <div className="flex items-center space-x-1">
                          <input
                            type="text"
                            value={getLogoUrl('svg')}
                            readOnly
                            className="flex-1 text-xs px-2 py-1 border border-gray-200 rounded bg-gray-50"
                          />
                          <button
                            onClick={() => handleCopyToClipboard(getLogoUrl('svg'), 'svg-link')}
                            className="p-1 text-gray-400 hover:text-gray-600"
                            title="Copy link"
                          >
                            {copiedItem === 'svg-link' ? (
                              <Check className="w-3 h-3 text-green-600" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-xs text-gray-600 block mb-1">HTML Embed Code</label>
                        <div className="flex items-center space-x-1">
                          <textarea
                            value={generateEmbedCode('png', '500')}
                            readOnly
                            rows={2}
                            className="flex-1 text-xs px-2 py-1 border border-gray-200 rounded bg-gray-50 resize-none"
                          />
                          <button
                            onClick={() => handleCopyToClipboard(generateEmbedCode('png', '500'), 'embed-code')}
                            className="p-1 text-gray-400 hover:text-gray-600"
                            title="Copy embed code"
                          >
                            {copiedItem === 'embed-code' ? (
                              <Check className="w-3 h-3 text-green-600" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100 flex space-x-2">
          <div className="flex-1">
            <div className="relative group/dropdown">
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-1">
                <Download className="w-3 h-3" />
                <span>PNG</span>
              </button>
              <div className="absolute bottom-full left-0 right-0 mb-1 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 z-10">
                <button
                  onClick={() => handleDownload(logo.downloadUrls.png250, `${logo.name.toLowerCase().replace(/\s+/g, '-')}-250px.png`)}
                  className="w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 rounded-t-lg"
                >
                  250px
                </button>
                <button
                  onClick={() => handleDownload(logo.downloadUrls.png500, `${logo.name.toLowerCase().replace(/\s+/g, '-')}-500px.png`)}
                  className="w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-50"
                >
                  500px
                </button>
                <button
                  onClick={() => handleDownload(logo.downloadUrls.png1000, `${logo.name.toLowerCase().replace(/\s+/g, '-')}-1000px.png`)}
                  className="w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 rounded-b-lg"
                >
                  1000px
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => handleDownload(logo.downloadUrls.svg, `${logo.name.toLowerCase().replace(/\s+/g, '-')}.svg`)}
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