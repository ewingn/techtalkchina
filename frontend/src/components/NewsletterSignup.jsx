// src/components/NewsletterSignup.jsx
import React from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { useArticles } from '../context/ArticlesContext'

export default function NewsletterSignup() {
  const { newsletter, setNewsletter, subscribeNewsletter } = useArticles()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newsletter.email.trim()) {
      subscribeNewsletter(newsletter.email)
    }
  }

  if (newsletter.isSubscribed) {
    return (
      <div id="newsletter-signup" className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 mb-12 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Welcome Aboard! 🎉</h2>
          <p className="text-green-100 mb-6">
            You're now subscribed to Tech Talk China's daily brief. Check your email to confirm and get your first digest tomorrow morning!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div id="newsletter-signup" className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-2xl p-8 mb-12 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">The Daily Brief</h2>
        <p className="text-red-100 mb-6">
          Join 25,000+ professionals getting China's top tech stories in their inbox every morning. 
          Curated insights, zero fluff, delivered like Morning Brew.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1">
            <input
              type="email"
              value={newsletter.email}
              onChange={(e) => setNewsletter(prev => ({ ...prev, email: e.target.value }))}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
              disabled={newsletter.isSubscribing}
              required
            />
          </div>
          <button
            type="submit"
            disabled={newsletter.isSubscribing || !newsletter.email.trim()}
            className="bg-white text-red-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {newsletter.isSubscribing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-500 mr-2"></div>
                Subscribing...
              </>
            ) : (
              'Subscribe Free'
            )}
          </button>
        </form>

        {newsletter.message && (
          <div className={`mt-4 p-3 rounded-lg flex items-center justify-center ${
            newsletter.isSubscribed 
              ? 'bg-green-500/20 text-green-100' 
              : 'bg-red-700/20 text-red-100'
          }`}>
            {newsletter.isSubscribed ? (
              <CheckCircle className="w-4 h-4 mr-2" />
            ) : (
              <AlertCircle className="w-4 h-4 mr-2" />
            )}
            {newsletter.message}
          </div>
        )}
        
        <p className="text-red-200 text-sm mt-4">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </div>
  )
}

// src/components/LoadingSpinner.jsx
import React from 'react'

export default function LoadingSpinner({ message = 'Loading latest China tech news...', size = 'large' }) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  }

  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-gray-200 border-t-red-500 mx-auto mb-4`}></div>
        <p className="text-gray-600 text-lg">{message}</p>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
}

// src/components/EnhancedArticleCard.jsx - Enhanced version with more details
import React from 'react'
import { ThumbsUp, MessageCircle, Eye, Clock, ExternalLink } from 'lucide-react'
import { useArticles } from '../context/ArticlesContext'
import { formatTimeAgo } from '../utils/time'

export default function EnhancedArticleCard({ article, showFullDetails = false }) {
  const { handleVote } = useArticles()

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-3 left-3">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            {article.category}
          </span>
        </div>
        {article.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <span className="font-medium text-red-600">{article.source}</span>
          <span className="mx-2">•</span>
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <Clock className="w-3 h-3 mr-1" />
          <span>{formatTimeAgo(article.publishedAt)}</span>
          {article.readTime && (
            <>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </>
          )}
        </div>
        
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {article.summary}
        </p>

        {/* Key Points Preview */}
        {showFullDetails && article.keyPoints && article.keyPoints.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-medium text-gray-700 mb-1">Key Takeaways:</p>
            <ul className="text-xs text-gray-600 space-y-1">
              {article.keyPoints.slice(0, 2).map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        {showFullDetails && article.tags && article.tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1">
            {article.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => handleVote(article.id)} 
              className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
            >
              <ThumbsUp className="w-3 h-3" />
              <span>{article.votes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
              <MessageCircle className="w-3 h-3" />
              <span>{article.comments}</span>
            </button>
            {article.views && (
              <div className="flex items-center space-x-1 text-gray-500">
                <Eye className="w-3 h-3" />
                <span>{article.views}</span>
              </div>
            )}
          </div>
          
          {article.originalUrl && (
            <a
              href={article.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-red-500 hover:text-red-600 font-medium"
            >
              <span>Read</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}