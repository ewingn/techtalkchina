import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, 
  Clock, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  ExternalLink,
  TrendingUp,
  User,
  Calendar,
  Eye,
  BookOpen
} from 'lucide-react'
import { useArticles } from '../context/ArticlesContext'
import { formatTimeAgo } from '../utils/time'
import ArticleCard from '../components/ArticleCard'

export default function ArticleDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { articles, handleVote } = useArticles()
  
  const article = articles.find(a => a.id === parseInt(id))
  const relatedArticles = articles
    .filter(a => a.id !== parseInt(id) && a.category === article?.category)
    .slice(0, 3)

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
        <Link 
          to="/latest" 
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Back to Latest News
        </Link>
      </div>
    )
  }

  // Mock full article content - in real app this would come from the database
  const fullContent = article.fullContent || {
    keyTakeaways: [
      "Revolutionary battery technology promises 1000km range for electric vehicles",
      "New Blade Battery 2.0 maintains industry-leading safety standards",
      "BYD's innovation could accelerate global EV adoption timeline",
      "Technology expected to reduce battery costs by 15-20% within two years"
    ],
    sections: [
      {
        heading: "The Breakthrough",
        content: `BYD has unveiled its next-generation Blade Battery 2.0, a lithium iron phosphate (LiFePO4) battery technology that promises to deliver up to 1000km of range in electric vehicles. This represents a significant leap forward from the company's original Blade Battery, which already set industry standards for safety and efficiency.

The new battery technology uses an innovative cell-to-pack design that eliminates traditional modules, increasing energy density by up to 50% while maintaining the structural integrity that made the original Blade Battery famous for its safety record.`
      },
      {
        heading: "What Makes It Different",
        content: `Unlike traditional battery packs that use cylindrical or pouch cells, BYD's Blade Battery uses long, thin cells that resemble knife blades—hence the name. The 2.0 version incorporates several key improvements:

**Enhanced Chemistry**: The new formulation improves energy density while maintaining thermal stability.
**Structural Integration**: The battery pack itself becomes part of the vehicle's structure, reducing weight and improving rigidity.
**Faster Charging**: Capable of 10-80% charging in under 30 minutes with compatible fast-charging infrastructure.`
      },
      {
        heading: "Market Impact",
        content: `Industry analysts expect BYD's Blade Battery 2.0 to accelerate EV adoption globally. The 1000km range addresses one of the primary concerns consumers have about electric vehicles—range anxiety.

"This is a game-changer for the industry," says Dr. Li Wei, automotive technology analyst at Shanghai Tech Research. "When you can drive from Beijing to Shanghai on a single charge, EVs become practical for virtually every use case."

The technology is expected to debut in BYD's premium Han EV sedan in Q2 2025, with plans to license the technology to other automakers beginning in 2026.`
      }
    ],
    bottomLine: "BYD's Blade Battery 2.0 could be the breakthrough that makes EVs truly mainstream. With 1000km range and proven safety, it addresses the two biggest barriers to EV adoption. The real test will be production scale and cost—but if BYD can deliver on both, this could accelerate the transition to electric vehicles by years, not decades."
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>

      {/* Article Header */}
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        {/* Hero Image */}
        <div className="relative h-96">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          {article.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Article Content */}
        <div className="p-8">
          {/* Metadata */}
          <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span className="font-medium text-red-600">{article.source}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{formatTimeAgo(article.publishedAt)}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                <span>{article.readTime || '4 min read'}</span>
              </div>
              {article.views && (
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  <span>{article.views} views</span>
                </div>
              )}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {article.summary}
          </p>

          {/* Engagement Stats */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => handleVote(article.id)}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
              >
                <ThumbsUp className="w-5 h-5" />
                <span className="font-medium">{article.votes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">{article.comments}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="font-medium">Share</span>
              </button>
            </div>
            
            {article.originalUrl && (
              <a
                href={article.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-red-500 hover:text-red-600 font-medium"
              >
                <span>Read Original</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Key Takeaways - Morning Brew Style */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-red-500" />
              Key Takeaways
            </h2>
            <ul className="space-y-3">
              {fullContent.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">▸</span>
                  <span className="text-gray-700 leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Sections */}
          <div className="prose max-w-none mb-8">
            {fullContent.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Line - Morning Brew Style */}
          <div className="bg-gray-100 border-l-4 border-gray-500 p-6 mb-8 rounded-r-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Bottom line</h3>
            <p className="text-gray-700 leading-relaxed italic">
              {fullContent.bottomLine}
            </p>
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">More in {article.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map(relatedArticle => (
              <ArticleCard key={relatedArticle.id} article={relatedArticle} />
            ))}
          </div>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Don't Miss the Next Big Story</h2>
        <p className="text-red-100 mb-6">
          Get China's top tech stories delivered to your inbox every morning. 
          Join 25,000+ professionals staying ahead of the curve.
        </p>
        <Link
          to="/#newsletter-signup"
          className="bg-white text-red-500 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
        >
          Subscribe Free
        </Link>
      </div>
    </div>
  )
}