import React from 'react'
import { ThumbsUp, MessageCircle } from 'lucide-react'
import { useArticles } from '../context/ArticlesContext'
import { formatTimeAgo } from '../utils/time'


export default function ArticleCard({ article }) {
const { handleVote } = useArticles()
return (
<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
<img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
<div className="p-4">
<div className="flex items-center mb-2">
<span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">{article.category}</span>
<span className="text-gray-500 text-xs ml-2">{formatTimeAgo(article.publishedAt)}</span>
</div>
<h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
<p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.summary}</p>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-500">{article.source}</span>
<div className="flex items-center space-x-3">
<button onClick={() => handleVote(article.id)} className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
<ThumbsUp className="w-3 h-3" />
<span>{article.votes}</span>
</button>
<button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
<MessageCircle className="w-3 h-3" />
<span>{article.comments}</span>
</button>
</div>
</div>
</div>
</div>
)
}