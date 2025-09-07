import React, { createContext, useContext, useMemo, useState } from 'react'
import initialArticles from '../data/mockArticles'

const ArticlesCtx = createContext(null)

export function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState(initialArticles)
  const [searchTerm, setSearchTerm] = useState('')
  const [ui, setUi] = useState({ isMobileMenuOpen: false })
  const [newsletter, setNewsletter] = useState({
    email: '',
    isSubscribed: false,
    isSubscribing: false,
    message: ''
  })

  const subscribeNewsletter = async (email) => {
    setNewsletter(prev => ({ ...prev, isSubscribing: true, message: '' }))
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setNewsletter(prev => ({
        ...prev,
        isSubscribed: true,
        isSubscribing: false,
        message: 'Successfully subscribed!'
      }))
    } catch (error) {
      setNewsletter(prev => ({
        ...prev,
        isSubscribing: false,
        message: 'Subscription failed. Please try again.'
      }))
    }
  }

  const getFilteredArticles = () => {
    return articles.filter(a => 
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      a.summary.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  const getFeaturedArticles = () => {
    return articles.filter(a => a.featured)
  }

  const getArticlesByCategory = (category) => {
    return articles.filter(a => a.category === category)
  }

  const value = useMemo(() => ({
    articles,
    setArticles,
    searchTerm,
    setSearchTerm,
    ui,
    setUi,
    newsletter,
    setNewsletter,
    subscribeNewsletter,
    getFilteredArticles,
    getFeaturedArticles,
    getArticlesByCategory,
    stats: {
      totalArticles: articles.length
    },
    handleVote: (id) => setArticles(prev => prev.map(a => a.id === id ? { ...a, votes: a.votes + 1 } : a))
  }), [articles, searchTerm, ui, newsletter])

  return <ArticlesCtx.Provider value={value}>{children}</ArticlesCtx.Provider>
}

export function useArticles() {
  const ctx = useContext(ArticlesCtx)
  if (!ctx) throw new Error('useArticles must be used within ArticlesProvider')
  return ctx
}