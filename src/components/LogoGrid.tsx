import React from 'react';
import { LogoCard } from './LogoCard';
import { Logo } from '../types';

interface LogoGridProps {
  logos: Logo[];
  isLoading?: boolean;
}

export const LogoGrid: React.FC<LogoGridProps> = ({ logos, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="aspect-square bg-gray-100 animate-pulse"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse mb-3 w-3/4"></div>
              <div className="flex justify-between">
                <div className="h-3 bg-gray-200 rounded animate-pulse w-1/3"></div>
                <div className="h-3 bg-gray-200 rounded animate-pulse w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (logos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-gray-400 text-2xl">🔍</span>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No logos found</h3>
        <p className="text-gray-600">Try adjusting your search terms or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {logos.map((logo) => (
        <LogoCard key={logo.id} logo={logo} />
      ))}
    </div>
  );
};