import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Search as SearchIcon } from 'lucide-react'
import categories from '../data/categories'
import { useArticles } from '../context/ArticlesContext'
import SearchBar from './SearchBar'


export default function MobileMenu() {
const { ui, setUi } = useArticles()


const close = () => setUi({ ...ui, isMobileMenuOpen: false })


return (
<div className="md:hidden border-b bg-white">
<div className="px-2 pt-2 pb-3 sm:px-3">
<div className="px-3 py-2">
<div className="relative">
<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
<SearchBar autoFocus placeholder="Search China tech news..." onEnter={close} />
</div>
</div>


<NavLink to="/latest" onClick={close}
className={({ isActive }) => `w-full block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 ${isActive ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
>
<Home className="w-5 h-5" />
<span>Home</span>
</NavLink>


{categories.map(({ name, icon: Icon, path }) => (
<NavLink key={name} to={path} onClick={close}
className={({ isActive }) => `w-full block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 ${isActive ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
>
<Icon className="w-5 h-5" />
<span>{name}</span>
</NavLink>
))}
</div>
</div>
)
}