import React from 'react'
import { NavLink } from 'react-router-dom'
import categories from '../data/categories'
import { Home } from 'lucide-react'


const base = 'flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium'


export default function DesktopNav() {
return (
<div className="space-x-8">
<NavLink
to="/latest"
className={({ isActive }) => `${base} ${isActive ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:text-gray-700'}`}
>
<Home className="w-4 h-4" />
<span>Home</span>
</NavLink>


{categories.map(({ name, icon: Icon, path }) => (
<NavLink key={name} to={path}
className={({ isActive }) => `${base} ${isActive ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:text-gray-700'}`}
>
<Icon className="w-4 h-4" />
<span>{name}</span>
</NavLink>
))}
</div>
)
}