// frontend/src/pages/Energy.js
import React from 'react';
import { Zap, Sun, Wind, TrendingUp } from 'lucide-react';
import ArticleCard from '../components/Articles/ArticleCard';
import { useArticles } from '../hooks/useArticles';

function Energy() {
  const { getArticlesByCategory, loading } = useArticles();
  const articles = getArticlesByCategory('Energy');

  const stats = [
    { label: 'Energy Articles', value: '28', icon: Zap },
    { label: 'Solar Updates', value: '15', icon: Sun },
    { label: 'Wind Projects', value: '7', icon: Wind },
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
          <div className="bg-yellow-100 p-4 rounded-full">
            <Sun className="w-12 h-12 text-yellow-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Energy & Sustainability
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore China's renewable energy innovations, from solar panel breakthroughs 
          to wind power developments and sustainable technology solutions.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="text-center">
              <div className="bg-yellow-50 rounded-lg p-3 mb-2">
                <Icon className="w-6 h-6 text-yellow-600 mx-auto" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Energy Sources */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl p-8 mb-12 text-white">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2" />
          Renewable Energy Focus
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Solar Power', 'Wind Energy', 'Hydroelectric', 'Energy Storage'].map((source, index) => (
            <div key={index} className="bg-white/20 rounded-lg p-3 text-center">
              <div className="font-medium">{source}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Energy News</h2>
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Sun className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No energy articles available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Energy;