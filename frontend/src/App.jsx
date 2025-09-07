import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ArticlesProvider } from './context/ArticlesContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Latest from './pages/Latest'
import Category from './pages/Category'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <ArticlesProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/latest" element={<Latest />} />
              <Route path="/ai" element={<Category name="AI" />} />
              <Route path="/evs" element={<Category name="EVs" />} />
              <Route path="/energy" element={<Category name="Energy" />} />
              <Route path="*" element={<Navigate to="/latest" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ArticlesProvider>
    </ErrorBoundary>
  )
}

export default App