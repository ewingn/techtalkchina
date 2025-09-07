import React from 'react'
import { useArticles } from '../context/ArticlesContext'
import CategoryPills from '../components/CategoryPills'
import ActiveIndicator from '../components/ActiveIndicator'
import ArticleCard from '../components/ArticleCard'

export default function Category({ name }) {
  const { articles, searchTerm } = useArticles()

  const filtered = articles
    .filter(a => a.category.toLowerCase() === name.toLowerCase())
    .filter(a => a.title.toLowerCase().includes(searchTerm.toLowerCase()) || a.summary.toLowerCase().includes(searchTerm.toLowerCase()))

  const getCategoryTitle = (categoryName) => {
    switch(categoryName) {
      case 'AI': return 'AI & Technology'
      case 'EVs': return 'Electric Vehicles'
      case 'Energy': return 'Energy & Sustainability'
      case 'MedTech': return 'Medical Technology'
      default: return categoryName
    }
  }

  const getCategoryDescription = (categoryName) => {
    switch(categoryName) {
      case 'AI': return 'Latest news and developments in Artificial Intelligence'
      case 'EVs': return 'Latest news and developments in Electric Vehicles'
      case 'Energy': return 'Latest news and developments in Energy & Sustainability'
      case 'MedTech': return 'Latest news and developments in Medical Technology'
      default: return `Latest news and developments in ${categoryName}`
    }
  }

  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {getCategoryTitle(name)}
            </h1>
            <p className="text-gray-600">{getCategoryDescription(name)}</p>
          </div>
          <ActiveIndicator label={name.toUpperCase()} />
        </div>
        <div className="mt-6 md:hidden">
          <CategoryPills />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map(a => <ArticleCard key={a.id} article={a} />)}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No articles found matching your search.</p>
        </div>
      )}
    </>
  )
}