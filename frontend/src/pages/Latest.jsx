import React from 'react'
import { useArticles } from '../context/ArticlesContext'
import FeaturedArticle from '../components/FeaturedArticle'
import ArticleCard from '../components/ArticleCard'
import CategoryPills from '../components/CategoryPills'
import ActiveIndicator from '../components/ActiveIndicator'

export default function Latest() {
  const { articles, searchTerm } = useArticles()

  const filtered = articles.filter(a => 
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    a.summary.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const featured = filtered.find(a => a.featured)
  const rest = filtered.filter(a => !a.featured)

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Latest News</h1>
            <p className="text-gray-600">Stay updated with the latest technological developments from China</p>
          </div>
          <ActiveIndicator label="All Categories" />
        </div>
        <div className="mt-6 md:hidden">
          <CategoryPills />
        </div>
      </div>

      {featured && <FeaturedArticle article={featured} />}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No articles found matching your search.</p>
        </div>
      )}
    </>
  )
}