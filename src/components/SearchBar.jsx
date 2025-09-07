import React, { useRef, useEffect } from 'react'
import { Search } from 'lucide-react'
import { useArticles } from '../context/ArticlesContext'


export default function SearchBar({ placeholder = 'Search…', autoFocus = false, onEnter }) {
const { searchTerm, setSearchTerm } = useArticles()
const inputRef = useRef(null)


useEffect(() => {
if (autoFocus && inputRef.current) inputRef.current.focus()
}, [autoFocus])


return (
<div className="relative w-full">
<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
<input
ref={inputRef}
type="text"
placeholder={placeholder}
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
onKeyDown={(e) => { if (e.key === 'Enter' && onEnter) onEnter() }}
className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
/>
</div>
)
}