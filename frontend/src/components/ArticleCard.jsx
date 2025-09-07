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