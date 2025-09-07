/ frontend/src/pages/EVs.js
import React from 'react';
import { Car, Battery, Zap, TrendingUp } from 'lucide-react';
import ArticleCard from '../components/Articles/ArticleCard';
import { useArticles } from '../hooks/useArticles';

function EVs() {
  const { getArticlesByCategory, loading } = useArticles();
  const articles = getArticlesByCategory('EVs');

  const stats = [
    { label: 'EV Articles This Week', value: '32', icon: Car },
    { label: 'Avg. Reading Time', value: '3m', icon: Battery },
    { label: 'Market Updates', value: '8', icon: TrendingUp },
  ];

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-80 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full">
            <Car className="w-12 h-12 text-green-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Electric Vehicles
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated on China's electric vehicle revolution, from breakthrough battery technologies 
          to market developments and charging infrastructure innovations.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="text-center">
              <div className="bg-green-50 rounded-lg p-3 mb-2">
                <Icon className="w-6 h-6 text-green-600 mx-auto" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Market Leaders */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 mb-12 text-white">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Zap className="w-6 h-6 mr-2" />
          Leading EV Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['BYD', 'NIO', 'XPeng', 'Li Auto'].map((company, index) => (
            <div key={index} className="bg-white/20 rounded-lg p-3 text-center">
              <div className="font-medium">{company}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest EV News</h2>
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No EV articles available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EVs;