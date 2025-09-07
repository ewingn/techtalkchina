import React from 'react'
import { Globe, TrendingUp, Users, Zap, Target, CheckCircle } from 'lucide-react'

export default function About() {
  const stats = [
    { number: "1.4B", label: "People in China's tech ecosystem", icon: Users },
    { number: "500M+", label: "Chinese internet users driving innovation", icon: Globe },
    { number: "零", label: "Fluff in our reporting (that's 'zero' in Chinese)", icon: Target },
    { number: "Daily", label: "Digestible insights, delivered consistently", icon: Zap }
  ]

  const principles = [
    {
      title: "No Shortcuts",
      description: "We don't rely on Google Translate or surface-level reporting. Real China tech insights require real China experience."
    },
    {
      title: "Context Matters", 
      description: "A new EV model isn't just specs—it's policy, culture, and market dynamics. We connect the dots others miss."
    },
    {
      title: "Bridge Builder",
      description: "We speak both languages (literally and figuratively) to help global professionals understand China's tech revolution."
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Statement */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          Tech Talk China is the most <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">trusted source</span> for China tech insights.
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          While others struggle with language barriers and cultural context, we deliver the China tech news that matters—
          <strong> smart reporting, sharp insights, and a voice that speaks to professionals like, well, professionals.</strong>
        </p>
      </div>

      {/* What We Mean Section */}
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What Do We Mean?</h2>
        <div className="prose prose-xl max-w-none text-gray-600">
          <p className="mb-6">
            Understanding China's tech landscape is hard. Getting reliable, context-rich insights without the noise is even harder. 
            But at Tech Talk China, we do both. Every day.
          </p>
          <p className="mb-6">
            We've built a platform that delivers China tech content people actually want—no machine translations, 
            no surface-level analysis, and no agenda-driven reporting. Our readers come for the substance and stay for the clarity.
          </p>
          <p className="mb-6">
            Our audience doesn't just scroll through headlines. They seek out our insights, digest our analysis, and apply our 
            intel to real business decisions. That's because we've earned the trust of professionals who need to understand 
            China's tech ecosystem—and you can't build that kind of relationship by taking shortcuts.
          </p>
          <p>
            From EV innovations to AI breakthroughs, from policy shifts to market dynamics, our coverage is focused and our 
            impact is real. Following us means positioning yourself ahead of trends, not chasing them.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="text-center">
              <div className="bg-red-50 rounded-xl p-4 mb-4">
                <Icon className="w-8 h-8 text-red-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          )
        })}
      </div>

      {/* Who Am I Section */}
      <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-2xl p-8 md:p-12 text-white mb-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Who's Behind This?</h2>
          <div className="text-lg space-y-4">
            <p>
              <strong>Hi, I'm Nathan Ewing.</strong> Product manager by day, China tech analyst by passion, 
              and the person tired of seeing "China's new EV startup" headlines that tell you nothing useful.
            </p>
            <p>
              I've lived, worked, and studied in China. I speak Chinese (你好!). I've launched products for Fortune 500 companies 
              and built digital experiences that span cultures. But most importantly, I understand what it's like to be on the 
              outside looking in at China's tech revolution.
            </p>
            <p>
              <strong>The problem?</strong> Most China tech coverage is either too superficial, too biased, or buried in 
              industry jargon. I built Tech Talk China because I needed it to exist—and if you're reading this, 
              chances are you do too.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{principle.title}</h3>
              </div>
              <p className="text-gray-600">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">The Vision</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          China is home to some of the world's most innovative companies, breakthrough technologies, and forward-thinking policies. 
          Yet most of this innovation remains mysterious to international audiences.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          <strong>Tech Talk China exists to change that.</strong> We're building the bridge between China's tech ecosystem 
          and the global professionals who need to understand it. One insight at a time.
        </p>
      </div>
    </div>
  )
}