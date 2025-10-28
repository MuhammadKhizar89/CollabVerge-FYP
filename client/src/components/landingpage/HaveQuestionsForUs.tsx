"use client"
import React, { useState } from 'react';

const HaveQuestionsForUs = () => {
  const [activeTab, setActiveTab] = useState('brands');
const [openQuestion, setOpenQuestion] = useState<string | null>("citizenship")

  const faqData = {
    brands: [
      {
        id: 'citizenship',
        question: 'What is Citizenship by Investment?',
        answer: 'Citizenship by Investment (CBI) is a process where individuals can gain citizenship by investing in a country. The process involves applying to a government-approved program, undergoing a background check, and, if approved, making an economic contribution and receiving citizenship. The specifics of CBI programs vary by country.'
      },
      {
        id: 'passport',
        question: 'Can I get a new passport and keep my current one?',
        answer: 'This depends on the citizenship laws of your current country and the country you\'re applying to. Many countries allow dual citizenship, but some do not.'
      },
      {
        id: 'countries',
        question: 'What countries are supported by Baseflow?',
        answer: 'Baseflow supports various citizenship by investment programs across multiple countries. Contact us for specific country availability.'
      },
      {
        id: 'investment',
        question: 'What are the minimum investment requirements?',
        answer: 'Minimum investment requirements vary by country and program, typically ranging from $100,000 to several million dollars.'
      },
      {
        id: 'timeline',
        question: 'How fast is the process of getting a new passport?',
        answer: 'The timeline varies by program but typically ranges from 3-6 months for faster programs to 1-2 years for others.'
      }
    ],
    creators: [
      {
        id: 'creator1',
        question: 'How do I collaborate with brands?',
        answer: 'You can find collaboration opportunities through our platform by clicking the "Find collaborations" button.'
      }
    ]
  };

  const currentFaqs = activeTab === 'brands' ? faqData.brands : faqData.creators;

  return (
    <div className="min-h-screen px-6 py-16">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h1 className="text-6xl font-light italic mb-6">
              Have questions<br />for us?
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Here are the most frequently asked questions<br />
              from brands, influencers, and creators.
            </p>
            <button className="primaryButton text-white px-8 py-4 rounded-full text-lg font-medium">
              Find collaborations
            </button>
          </div>

          {/* Right Section - FAQ */}
          <div>
            {/* Tab Buttons */}
            <div className="flex gap-4 mb-8 border border-gray-300 w-fit p-1 rounded-full">
              <button
                onClick={() => setActiveTab('brands')}
                className={`px-6 py-1 rounded-full text-base font-medium transition-colors ${
                  activeTab === 'brands'
                    ? 'bg-black text-white'
                    : ''
                }`}
              >
                Brands & Businesses
              </button>
              <button
                onClick={() => setActiveTab('creators')}
                className={`px-6 py-1 rounded-full text-base font-medium transition-colors ${
                  activeTab === 'creators'
                    ? 'bg-black text-white'
                    : ''
                }`}
              >
                Creators & Influencers
              </button>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4 ">
              {currentFaqs.map((faq, index) => (
                <div
               key={faq.id}
      className={`rounded-2xl overflow-hidden transition-all duration-300 ease-in-out border border-gray-300 ${
        openQuestion === faq.id ? 'bg-gray-100 shadow-md' : 'bg-white hover:shadow-md'
      }`}
      style={{
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
      }}
                >
                  <button
                    onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <span className="text-2xl text-gray-600 flex-shrink-0 transition-transform duration-300 ease-in-out" style={{ transform: openQuestion === faq.id ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      +
                    </span>
                  </button>
                  
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden  ${
                      openQuestion === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 ">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaveQuestionsForUs;