import React from 'react'

export default function LoadingSpinner({ message = 'Loading latest China tech news...', size = 'large' }) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  }

  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-gray-200 border-t-red-500 mx-auto mb-4`}></div>
        <p className="text-gray-600 text-lg">{message}</p>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
}