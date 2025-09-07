import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import DesktopNav from './DesktopNav'
import SearchBar from './SearchBar'
import { useArticles } from '../context/ArticlesContext'


export default function Header() {
const { ui, setUi } = useArticles()
const location = useLocation()
const onHome = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/latest'


return (
<header className="bg-white shadow-sm border-b sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
{/* Logo */}
<div className="flex items-center">
<Link to="/latest" className="flex items-center space-x-2">
<div className="w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
<span className="text-white font-bold text-sm">TTC</span>
</div>
<span className="font-bold text-xl text-gray-900 hidden sm:block">Tech Talk China</span>
</Link>
</div>


{/* Search - md+ */}
<div className="hidden md:flex flex-1 max-w-lg mx-8">
<SearchBar placeholder="Search China tech news..." />
</div>


{/* Mobile menu button */}
<button
onClick={() => setUi({ ...ui, isMobileMenuOpen: !ui.isMobileMenuOpen })}
className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
aria-label="Toggle menu"
>
<Menu className="w-6 h-6" />
</button>


{/* Desktop nav */}
<nav className="hidden md:flex">
<DesktopNav />
</nav>
</div>
</div>
</header>
)
}