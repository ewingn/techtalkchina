import React from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { useArticles } from '../context/ArticlesContext'

export default function NewsletterSignup() {
  const { newsletter, setNewsletter, subscribeNewsletter } = useArticles()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newsletter.email.trim()) {
      subscribeNewsletter(newsletter.email)
    }
  }

  if (newsletter.isSubscribed) {
    return (
      <div id="newsletter-signup" className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 mb-12 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Welcome Aboard! 🎉</h2>
          <p className="text-green-100 mb-6">
            You're now subscribed to Tech Talk China's daily brief. Check your email to confirm and get your first digest tomorrow morning!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div id="newsletter-signup" className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-2xl p-8 mb-12 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">The Daily Brief</h2>
        <p className="text-red-100 mb-6">
          Join 25,000+ professionals getting China's top tech stories in their inbox every morning. 
          Curated insights, zero fluff, delivered like Morning Brew.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1">
            <input
              type="email"
              value={newsletter.email}
              onChange={(e) => setNewsletter(prev => ({ ...prev, email: e.target.value }))}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
              disabled={newsletter.isSubscribing}
              required
            />
          </div>
          <button
            type="submit"
            disabled={newsletter.isSubscribing || !newsletter.email.trim()}
            className="bg-white text-red-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {newsletter.isSubscribing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-500 mr-2"></div>
                Subscribing...
              </>
            ) : (
              'Subscribe Free'
            )}
          </button>
        </form>

        {newsletter.message && (
          <div className={`mt-4 p-3 rounded-lg flex items-center justify-center ${
            newsletter.isSubscribed 
              ? 'bg-green-500/20 text-green-100' 
              : 'bg-red-700/20 text-red-100'
          }`}>
            {newsletter.isSubscribed ? (
              <CheckCircle className="w-4 h-4 mr-2" />
            ) : (
              <AlertCircle className="w-4 h-4 mr-2" />
            )}
            {newsletter.message}
          </div>
        )}
        
        <p className="text-red-200 text-sm mt-4">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </div>
  )
}