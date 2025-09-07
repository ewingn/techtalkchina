// src/pages/Home.jsx - Enhanced with newsletter signup and stats
import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Users, Calendar, BarChart3, TrendingUp, ArrowRight } from 'lucide-react'
import { useArticles } from '../context/ArticlesContext'
import FeaturedArticle from '../components/FeaturedArticle'
import CategoryPills from '../components/CategoryPills'
import ActiveIndicator from '../components/ActiveIndicator'
import ArticleCard from '../components/ArticleCard'
import NewsletterSignup from '../components/NewsletterSignup'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Home() {
  const { 
    getFilteredArticles, 
    getFeaturedArticles, 
    loading, 
    error, 
    stats,
    getArticlesByCategory 
  } = useArticles()

  if (loading) return <LoadingSpinner />
  
  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-lg mb-4">Error loading articles: {error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Retry
        </button>
      </div>
    )
  }

  const filtered = getFilteredArticles()
  const featured = getFeaturedArticles()[0] // Get first featured article
  const rest = filtered.filter(a => !a.featured).slice(0, 6) // Show 6 non-featured
  
  // Get category previews
  const aiArticles = getArticlesByCategory('AI').slice(0, 3)
  const evArticles = getArticlesByCategory('EVs').slice(0, 3)
  const energyArticles = getArticlesByCategory('Energy').slice(0, 3)
  const medTechArticles = getArticlesByCategory('MedTech').slice(0, 3)

  const displayStats = [
    { label: 'Daily Readers', value: '25K+', icon: Users },
    { label: 'Articles This Week', value: stats.totalArticles.toString(), icon: Calendar },
    { label: 'Growth Rate', value: '+23%', icon: BarChart3 },
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          China Tech News,{' '}
          <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            Simplified
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Get the latest developments in Chinese technology - from AI breakthroughs to EV innovations. 
          Curated daily, summarized clearly, delivered like Morning Brew.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
          {displayStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-red-50 rounded-lg p-3 mb-2">
                  <Icon className="w-6 h-6 text-red-500 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest China Tech News</h2>
            <p className="text-gray-600">Stay updated with the latest technological developments from China</p>
          </div>
          <ActiveIndicator label="All Categories" />
        </div>
        <div className="mt-6 md:hidden">
          <CategoryPills />
        </div>
      </div>

      {/* Featured Article */}
      {featured && <FeaturedArticle article={featured} />}

      {/* Latest News Grid */}
      {rest.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latest Updates</h2>
            <Link
              to="/latest"
              className="flex items-center text-red-500 hover:text-red-600 font-medium"
            >
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      )}

      {/* Category Sections */}
      <div className="space-y-12">
        {/* AI Section */}
        {aiArticles.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">AI & Technology</h2>
              <Link
                to="/ai"
                className="flex items-center text-red-500 hover:text-red-600 font-medium"
              >
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aiArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {/* EVs Section */}
        {evArticles.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Electric Vehicles</h2>
              <Link
                to="/evs"
                className="flex items-center text-red-500 hover:text-red-600 font-medium"
              >
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {evArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {/* Energy Section */}
        {energyArticles.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Energy & Sustainability</h2>
              <Link
                to="/energy"
                className="flex items-center text-red-500 hover:text-red-600 font-medium"
              >
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {energyArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {/* MedTech Section */}
        {medTechArticles.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Medical Technology</h2>
              <Link
                to="/medtech"
                className="flex items-center text-red-500 hover:text-red-600 font-medium"
              >
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {medTechArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-gray-100 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Stay Ahead of China's Tech Revolution
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          From AI breakthroughs to EV innovations, get the insights that matter for your business and investments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/latest"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Explore Latest News
          </Link>
          <button 
            onClick={() => document.getElementById('newsletter-signup')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-medium border-2 border-gray-200 transition-colors"
          >
            Subscribe to Updates
          </button>
        </div>
      </div>

      {/* No results state */}
      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No articles found matching your search.</p>
        </div>
      )}
    </>
  )
}