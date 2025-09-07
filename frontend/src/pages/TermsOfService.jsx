import React from 'react'
import { FileText, AlertTriangle, Shield, Scale, Globe, Users } from 'lucide-react'

export default function TermsOfService() {
  const quickRules = [
    "Be respectful in comments and communications",
    "Don't republish our content without permission", 
    "Use our service for legitimate purposes only",
    "Respect intellectual property rights",
    "Don't spam or abuse our contact forms"
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <FileText className="w-8 h-8 text-purple-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The ground rules for using Tech Talk China. We've tried to make this as readable as possible—
          because nobody likes legal jargon.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Quick Rules */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Quick Version</h2>
        <p className="text-gray-600 mb-6">
          Using Tech Talk China is pretty straightforward. Here are the key rules:
        </p>
        <ul className="space-y-3">
          {quickRules.map((rule, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-700">{rule}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Detailed Terms */}
      <div className="space-y-12">
        {/* Acceptance */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-gray-600" />
            Acceptance of Terms
          </h2>
          <p className="text-gray-600 mb-4">
            By accessing or using Tech Talk China (the "Service"), you agree to be bound by these Terms of Service ("Terms"). 
            If you disagree with any part of these terms, then you may not access the Service.
          </p>
          <p className="text-gray-600">
            These Terms apply to all visitors, users, and others who access or use the Service, including newsletter subscribers 
            and website visitors.
          </p>
        </div>

        {/* Use of Service */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Users className="w-6 h-6 mr-3 text-gray-600" />
            Use of the Service
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Permitted Uses</h3>
              <p className="text-gray-600">
                You may use our Service to read, subscribe to, and share our content for personal, educational, or 
                professional purposes. You may quote brief excerpts with proper attribution.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prohibited Uses</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Reproducing, distributing, or republishing substantial portions of our content without permission</li>
                <li>Using our Service for any illegal or unauthorized purpose</li>
                <li>Attempting to gain unauthorized access to our systems or user accounts</li>
                <li>Transmitting viruses, malware, or other harmful code</li>
                <li>Spamming, phishing, or engaging in fraudulent activities</li>
                <li>Impersonating Tech Talk China or Nathan Ewing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content and IP */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-gray-600" />
            Content & Intellectual Property
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Content</h3>
              <p className="text-gray-600">
                All content on Tech Talk China, including articles, newsletters, images, logos, and designs, is owned by 
                Nathan Ewing or licensed to us. This content is protected by copyright, trademark, and other intellectual property laws.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Content</h3>
              <p className="text-gray-600">
                When you submit content to us (like comments, messages, or feedback), you grant us a non-exclusive, 
                royalty-free license to use, modify, and display that content in connection with our Service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fair Use</h3>
              <p className="text-gray-600">
                You may quote brief excerpts of our content for commentary, criticism, news reporting, or educational purposes, 
                provided you include proper attribution and a link back to the original article.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Terms */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Globe className="w-6 h-6 mr-3 text-gray-600" />
            Newsletter Subscription
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              By subscribing to our newsletter, you consent to receive periodic emails containing China tech news, 
              analysis, and updates about our Service.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>You can unsubscribe at any time using the link in any email</li>
              <li>We may occasionally send important service announcements to all subscribers</li>
              <li>Your email address will not be shared with third parties for marketing purposes</li>
              <li>Frequency may vary but we aim for consistent, valuable content delivery</li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-3 text-yellow-600" />
            Disclaimers & Limitations
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Investment Disclaimer</h3>
              <p className="text-gray-600">
                Our content is for informational purposes only and does not constitute investment advice. 
                Always consult with qualified professionals before making financial or business decisions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accuracy</h3>
              <p className="text-gray-600">
                While we strive for accuracy, we cannot guarantee that all information is complete, accurate, or up-to-date. 
                Always verify important information from primary sources.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Third-Party Links</h3>
              <p className="text-gray-600">
                Our Service may contain links to external websites. We are not responsible for the content, 
                privacy practices, or terms of service of these third-party sites.
              </p>
            </div>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Scale className="w-6 h-6 mr-3 text-gray-600" />
            Limitation of Liability
          </h2>
          <p className="text-gray-600 mb-4">
            To the fullest extent permitted by law, Tech Talk China and Nathan Ewing shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, 
            or goodwill, arising out of or in connection with your use of the Service.
          </p>
          <p className="text-gray-600">
            Our total liability to you for any claims arising from these Terms or your use of the Service shall not exceed 
            the amount you paid us (if any) in the twelve months preceding such claim.
          </p>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
          <p className="text-gray-600 mb-4">
            We may terminate or suspend your access immediately, without prior notice or liability, for any reason, 
            including breach of these Terms.
          </p>
          <p className="text-gray-600">
            You may discontinue use of our Service at any time. Newsletter subscriptions can be cancelled using 
            the unsubscribe link in any email.
          </p>
        </div>

        {/* Governing Law */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
          <p className="text-gray-600">
            These Terms shall be governed by and construed in accordance with the laws of Iowa, United States, 
            without regard to conflict of law provisions. Any disputes arising from these Terms or your use of 
            the Service shall be resolved in the courts of Iowa.
          </p>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to modify these Terms at any time. When we make significant changes, we'll notify 
            you by email (if you're subscribed) or by posting a notice on our website. Your continued use of the 
            Service after such modifications constitutes acceptance of the updated Terms.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
          <p className="mb-6">
            We believe in clear communication. If anything in these Terms is confusing or if you have questions, 
            please don't hesitate to reach out.
          </p>
          <a 
            href="mailto:legal@techtalkchina.com"
            className="bg-white text-purple-500 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Legal Team
          </a>
        </div>
      </div>
    </div>
  )
}