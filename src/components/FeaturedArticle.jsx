import React from 'react'
import { TrendingUp, ThumbsUp, MessageCircle, Share2, ExternalLink } from 'lucide-react'
import { useArticles } from '../context/ArticlesContext'
import { formatTimeAgo } from '../utils/time'


export default function FeaturedArticle({ article }) {
const { handleVote } = useArticles()
if (!article) return null


return (
<div className="mb-8">
<h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
<TrendingUp className="w-6 h-6 mr-2 text-red-500" />
Featured Story
</h2>
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<div className="md:flex">
<div className="md:w-1/3">
<img src={article.image} alt={article.title} className="w-full h-48 md:h-full object-cover" />
</div>
<div className="p-6 md:w-2/3">
<div className="flex items-center mb-2">
<span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">{article.category}</span>
<span className="text-gray-500 text-sm ml-2">{article.source}</span>
<span className="text-gray-400 text-sm ml-2">•</span>
<span className="text-gray-500 text-sm ml-2">{formatTimeAgo(article.publishedAt)}</span>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
<p className="text-gray-600 mb-4">{article.summary}</p>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<button onClick={() => handleVote(article.id)} className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
<ThumbsUp className="w-4 h-4" />
<span className="text-sm">{article.votes}</span>
</button>
<button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
<MessageCircle className="w-4 h-4" />
<span className="text-sm">{article.comments}</span>
</button>
<button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
<Share2 className="w-4 h-4" />
<span className="text-sm">Share</span>
</button>
</div>
<button className="flex items-center space-x-1 text-red-500 hover:text-red-600">
<span className="text-sm font-medium">Read More</span>
<ExternalLink className="w-4 h-4" />
</button>
</div>
</div>
</div>
</div>
</div>
)
}