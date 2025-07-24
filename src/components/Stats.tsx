import React from 'react';
import { Download, Star, Github, Users } from 'lucide-react';

interface StatsProps {
  totalLogos: number;
  totalDownloads?: number;
}

export const Stats: React.FC<StatsProps> = ({ totalLogos, totalDownloads = 0 }) => {
  const stats = [
    {
      label: 'Total Logos',
      value: totalLogos,
      icon: Star,
      color: 'text-green-600'
    },
    {
      label: 'Download Formats',
      value: 2,
      icon: Download,
      color: 'text-blue-600',
      suffix: 'PNG & SVG'
    },
    {
      label: 'Open Source',
      value: '100%',
      icon: Github,
      color: 'text-purple-600'
    },
    {
      label: 'Free to Use',
      value: '∞',
      icon: Users,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-sm mb-3 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.suffix || stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};