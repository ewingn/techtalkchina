import React from 'react'
import { NavLink } from 'react-router-dom'
import categories from '../data/categories'


export default function CategoryPills() {
return (
<div className="flex space-x-2 overflow-x-auto pb-2">
<NavLink to="/latest" className={({ isActive }) => `whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'}`}>All</NavLink>
{categories.map(({ name, path }) => (
<NavLink key={name} to={path}
className={({ isActive }) => `whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'}`}
>
{name}
</NavLink>
))}
</div>
)
}