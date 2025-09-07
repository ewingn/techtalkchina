import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import Home from './pages/Home'
import Category from './pages/Category'
import { ArticlesProvider, useArticles } from './context/ArticlesContext'


function AppShell() {
const { ui } = useArticles()
return (
<div className="min-h-screen bg-gray-50">
<Header />
{ui.isMobileMenuOpen && <MobileMenu />}


<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<Routes>
<Route path="/" element={<Navigate to="/latest" replace />} />
<Route path="/home" element={<Home />} />
<Route path="/latest" element={<Home />} />
<Route path="/ai" element={<Category name="AI" />} />
<Route path="/evs" element={<Category name="EVs" />} />
<Route path="/energy" element={<Category name="Energy" />} />
<Route path="*" element={<Navigate to="/latest" replace />} />
</Routes>
</main>


<footer className="bg-white border-t mt-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="flex items-center space-x-2 mb-4 md:mb-0">
<div className="w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
<span className="text-white font-bold text-sm">TTC</span>
</div>
<span className="font-bold text-xl text-gray-900">Tech Talk China</span>
</div>
<p className="text-gray-500 text-sm text-center md:text-right">
© 2025 Tech Talk China. Bridging the gap between China's tech innovations and the world.
</p>
</div>
</div>
</footer>
</div>
)
}


export default function App() {
return (
<ArticlesProvider>
<AppShell />
</ArticlesProvider>
)
}