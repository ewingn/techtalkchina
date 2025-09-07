import React, { useState } from 'react'
import { Mail, MessageCircle, Send, Globe, Linkedin, ExternalLink } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center bg-green-50 rounded-2xl p-12">
          <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Send className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Message Sent! 🚀</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thanks for reaching out. I'll get back to you within 24 hours—probably sooner if you're asking about Chinese EVs.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Let's Talk China Tech
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Got insights to share? Questions about China's tech landscape? Or just want to say 你好? 
          Drop me a line—I actually read every message.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              >
                <option value="">Choose a topic</option>
                <option value="general">General Inquiry</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="story-tip">Story Tip</option>
                <option value="feedback">Feedback</option>
                <option value="media">Media Request</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                placeholder="Tell me what's on your mind..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info & Social */}
        <div className="space-y-8">
          {/* Quick Contact */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Other Ways to Connect</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-red-100 rounded-lg p-3 mr-4">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <a href="mailto:hello@techtalkchina.com" className="text-red-600 hover:text-red-700">
                    hello@techtalkchina.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 rounded-lg p-3 mr-4">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">LinkedIn</div>
                  <a 
                    href="https://www.linkedin.com/in/nathanew/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center"
                  >
                    Connect with Nathan <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 rounded-lg p-3 mr-4">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Personal Website</div>
                  <a 
                    href="https://newing21.github.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 flex items-center"
                  >
                    newing21.github.io <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">📧 How often do you publish?</h4>
                <p className="text-gray-600 text-sm">Currently building toward a daily newsletter. For now, expect 2-3 high-quality posts per week.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">🤝 Do you take guest contributions?</h4>
                <p className="text-gray-600 text-sm">Absolutely! If you have real China tech insights to share, let's talk.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">💼 Partnership opportunities?</h4>
                <p className="text-gray-600 text-sm">Open to partnerships that align with our mission of bringing clarity to China's tech landscape.</p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">🚀 Story tips?</h4>
                <p className="text-gray-600 text-sm">Got a tip about China tech developments? Send it over—I investigate every credible lead.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}