import React from 'react'
import { Shield, Eye, Lock, Users, Mail, Globe } from 'lucide-react'

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        {
          subtitle: "Information You Provide",
          details: "When you subscribe to our newsletter, contact us, or interact with our site, we may collect your name, email address, and any messages you send us."
        },
        {
          subtitle: "Automatic Information",
          details: "We collect standard web analytics data including your IP address, browser type, device information, and how you interact with our website."
        },
        {
          subtitle: "Cookies and Tracking",
          details: "We use cookies to improve your experience, remember your preferences, and analyze site usage. You can control cookie settings in your browser."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      content: [
        {
          subtitle: "Newsletter Delivery",
          details: "Your email address is used solely to send you our China tech newsletter and important updates about our service."
        },
        {
          subtitle: "Site Improvement",
          details: "Analytics data helps us understand how visitors use our site so we can improve content and user experience."
        },
        {
          subtitle: "Communication",
          details: "We may use your contact information to respond to your inquiries or provide customer support."
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: Lock,
      content: [
        {
          subtitle: "We Don't Sell Your Data",
          details: "Tech Talk China will never sell, rent, or trade your personal information to third parties. Period."
        },
        {
          subtitle: "Service Providers",
          details: "We may share data with trusted service providers (like email delivery services) who help us operate our site, but only under strict confidentiality agreements."
        },
        {
          subtitle: "Legal Requirements",
          details: "We may disclose information if required by law or to protect our rights, safety, or the rights of others."
        }
      ]
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <Shield className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your privacy matters to us. Here's how we collect, use, and protect your information—explained in plain English.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Quick Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">TL;DR</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <div className="font-medium text-gray-900">We collect minimal data</div>
              <div className="text-sm text-gray-600">Only what's needed to deliver our newsletter and improve our service</div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <div className="font-medium text-gray-900">We don't sell your data</div>
              <div className="text-sm text-gray-600">Your information stays with us, not with advertisers or data brokers</div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <div className="font-medium text-gray-900">You control your data</div>
              <div className="text-sm text-gray-600">Unsubscribe anytime, request deletion, or ask what we have on file</div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <div className="font-medium text-gray-900">We're transparent</div>
              <div className="text-sm text-gray-600">If our practices change, we'll let you know clearly and honestly</div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="space-y-12">
        {sections.map((section, index) => {
          const Icon = section.icon
          return (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-gray-100 rounded-lg p-3 mr-4">
                  <Icon className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              
              <div className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.subtitle}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Additional Sections */}
      <div className="space-y-8 mt-12">
        {/* Data Security */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Lock className="w-6 h-6 mr-3 text-gray-600" />
            Data Security
          </h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction. This includes:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Encrypted data transmission (HTTPS)</li>
            <li>Secure hosting with reputable providers</li>
            <li>Regular security assessments</li>
            <li>Limited access to personal data on a need-to-know basis</li>
          </ul>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Users className="w-6 h-6 mr-3 text-gray-600" />
            Your Rights
          </h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
            <li><strong>Correct:</strong> Update or correct inaccurate information</li>
            <li><strong>Delete:</strong> Request deletion of your personal information</li>
            <li><strong>Unsubscribe:</strong> Opt out of our newsletter at any time</li>
            <li><strong>Portability:</strong> Request your data in a machine-readable format</li>
          </ul>
          <p className="text-gray-600 mt-4">
            To exercise any of these rights, simply contact us at{' '}
            <a href="mailto:privacy@techtalkchina.com" className="text-blue-600 hover:text-blue-700">
              privacy@techtalkchina.com
            </a>
          </p>
        </div>

        {/* International Users */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Globe className="w-6 h-6 mr-3 text-gray-600" />
            International Users
          </h2>
          <p className="text-gray-600">
            Tech Talk China is operated from the United States. If you're accessing our service from outside the US, 
            please be aware that your information may be transferred to, stored, and processed in the United States. 
            We take appropriate safeguards to ensure your privacy rights are protected regardless of where your data is processed.
          </p>
        </div>

        {/* Changes to Policy */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons. 
            When we make significant changes, we'll notify you by email (if you're subscribed) or by posting a notice on our website. 
            The "Last updated" date at the top of this page will always reflect the most recent version.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-2xl p-8 text-white text-center">
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
          <p className="mb-6">
            We're committed to transparency. If you have any questions about this policy or how we handle your data, 
            don't hesitate to reach out.
          </p>
          <a 
            href="mailto:privacy@techtalkchina.com"
            className="bg-white text-red-500 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Privacy Team
          </a>
        </div>
      </div>
    </div>
  )
}