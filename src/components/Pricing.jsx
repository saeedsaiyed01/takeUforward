import React from 'react';
import GreenTick from '../icons/greentick';
import Redtick from '../icons/Redtick';

const plans = [
  {
    name: 'Sprint',
    icon: '🏃‍♂️',
    accent: 'from-green-400 to-green-600',
    bg: 'bg-[#181c1f]',
    price: 6599,
    offer: 4619.3,
    coupon: 'OFFER30',
    validity: '12 Months',
    features: [
      'All features',
      'Only DSA, Core & Aptitude',
      'AI Doubt Support (not included)',
      'Biweekly Sessions (not included)',
      'Code Review (not included)',
    ],
    cta: 'Buy Now',
  },
  {
    name: 'Pinnacle',
    icon: '🚀',
    accent: 'from-orange-400 to-pink-500',
    bg: 'bg-[#19171c]',
    price: 9120,
    offer: 6384,
    coupon: 'OFFER30',
    validity: 'Lifetime',
    features: [
      'All features',
      'DSA, Core, Design & Aptitude',
      'AI Doubt Support',
      'Biweekly Sessions',
      'Code Review',
    ],
    cta: 'Buy Now',
  },
  {
    name: 'Enterprise',
    icon: '🏢',
    accent: 'from-blue-400 to-purple-600',
    bg: 'bg-[#181c1f]',
    price: 'Custom',
    offer: null,
    coupon: null,
    validity: 'Custom',
    features: [
      'All Pinnacle features',
      'Performance Dashboard',
      'Centralized Billing',
      'Custom Curriculum',
      'Exclusive Webinars',
      'Batch Enrollment',
    ],
    cta: 'Contact Us',
  },
];

export default function Pricing() {
  return (
    <div className="bg-[#0f0f0f] min-h-screen py-4 px-4   mt-0 md:px-20 font-sans" style={{ fontFamily: 'Geist, Geist Fallback, sans-serif' }}>
      <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-orange-500">Affordable Plans for Everyone</h2>
      <p className="text-center text-gray-400 mb-12">Choose the plan that fits your journey. Unique benefits, transparent pricing.</p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`relative flex-1 rounded-3xl shadow-xl ${plan.bg} p-8 flex flex-col border-2 border-transparent hover:border-orange-400 transition-all`}
            style={{ minWidth: 280, maxWidth: 370 }}
          >
            {plan.name === 'Pinnacle' && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                <span className="px-4 py-3 rounded-full text-sm font-bold text-black bg-orange-400 shadow-lg border-2 border-white">Most Popular</span>
              </div>
            )}
            <div className="mt-2 mb-2 text-2xl font-bold text-white text-center">{plan.name} Plan</div>
            <div className="text-center text-gray-400 mb-4" style={{ minHeight: 40 }}>
              {plan.name === 'Sprint' && 'Perfect for beginners starting their coding journey.'}
              {plan.name === 'Pinnacle' && 'Go all in — with expert support & lifetime access.'}
              {plan.name === 'Enterprise' && 'For teams/groups seeking advanced features & support.'}
            </div>
            <div className="flex flex-col items-center mb-4 w-full">
              {plan.price !== 'Custom' && (
                <>
                  <span className="text-gray-500 line-through text-sm">₹ {plan.name === 'Sprint' ? '9999' : plan.name === 'Pinnacle' ? '11999' : ''}</span>
                  {plan.offer && (
                    <div className={`w-full rounded-xl mt-2 mb-1 px-4 py-3 flex flex-col items-start ${plan.name === 'Pinnacle' ? 'bg-green-800' : 'bg-gray-800'}`}>
                      <span className="text-white text-base font-semibold mb-1">Offer Price:</span>
                      <span className="text-2xl md:text-3xl font-bold text-green-300">₹ {plan.offer}</span>
                      {plan.coupon && (
                        <span className="mt-1 text-xs text-green-100">Coupon:<span className="font-mono ml-1 bg-gray-800 px-2 py-0.5 rounded">{plan.coupon}</span></span>
                      )}
                    </div>
                  )}
                </>
              )}
              {plan.price === 'Custom' && (
                <span className="text-2xl font-bold text-blue-400">Custom Pricing</span>
              )}
            </div>
            <div className="text-center text-sm text-gray-400 mb-2">Validity: <span className="text-white font-semibold">{plan.validity}</span></div>
            <ul className="mb-6 mt-2 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-white/90">
                  <span className="inline-block w-4 h-4 text-lg">
                    {feature.includes('not included') ? <Redtick/> : <GreenTick/>}
                  </span>
                  <span className={feature.includes('not included') ? 'opacity-50 line-through' : ''}>{feature.replace(' (not included)', '')}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-auto w-full py-3 rounded-xl font-bold text-lg transition-all ${plan.name === 'Enterprise' ? 'bg-white text-black border border-gray-200 hover:bg-gray-100' : 'bg-orange-400 text-white hover:bg-orange-500'}`}
            >
              {plan.cta} {plan.offer ? `@ ₹${plan.offer}` : ''}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 