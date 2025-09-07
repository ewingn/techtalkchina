import React from 'react'


export default function ActiveIndicator({ label }) {
return (
<div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
<div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
<span className="text-red-700 font-medium text-sm">{label}</span>
</div>
)
}