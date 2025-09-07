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


return (
<>
<div className="mb-8">
<div className="flex items-center justify-between flex-wrap gap-4">
<div>
<h1 className="text-3xl font-bold text-gray-900 mb-2">
{name === 'AI' && 'AI & Technology'}
{name === 'EVs' && 'Electric Vehicles'}
{name === 'Energy' && 'Energy & Sustainability'}
{name !== 'AI' && name !== 'EVs' && name !== 'Energy' && name}
</h1>
<p className="text-gray-600">Latest news and developments in {name.toUpperCase()}</p>
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