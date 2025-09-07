import React, { createContext, useContext, useMemo, useState } from 'react'
import initialArticles from '../data/mockArticles'


const ArticlesCtx = createContext(null)


export function ArticlesProvider({ children }) {
const [articles, setArticles] = useState(initialArticles)
const [searchTerm, setSearchTerm] = useState('')
const [ui, setUi] = useState({ isMobileMenuOpen: false })


const value = useMemo(() => ({
articles,
setArticles,
searchTerm,
setSearchTerm,
ui,
setUi,
handleVote: (id) => setArticles(prev => prev.map(a => a.id === id ? { ...a, votes: a.votes + 1 } : a))
}), [articles, searchTerm, ui])


return <ArticlesCtx.Provider value={value}>{children}</ArticlesCtx.Provider>
}


export function useArticles() {
const ctx = useContext(ArticlesCtx)
if (!ctx) throw new Error('useArticles must be used within ArticlesProvider')
return ctx
}