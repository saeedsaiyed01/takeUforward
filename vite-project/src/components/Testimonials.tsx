import { Quote, Star } from 'lucide-react';
import React from 'react';
import Xlogo from '../icons/Xlogo';

const testimonials = [
  {
    name: 'Hariprasath S',
    handle: '@hprasatholi',
    avatar: '👨‍💻',
    content: "@takeUforward It's Just Amazing!!! Thank you striver and their team.",
    type: 'twitter',
    logo : <Xlogo/>
  },
  {
    name: 'Piyush Kumar Singh',
    handle: '@piyushK1302',
    avatar: '👨‍💻',
    content: "the new ui is cool 🔥🔥🔥 @striver_79 @takeUforward waiting for the V3 contents",
    type: 'twitter',
    logo : <Xlogo/>
  },
  {
    name: 'Gaurav raj',
    handle: '@raj',
    avatar: '🧑‍💼',
    content: "I'm on break because of my mid-sem exams, but visited the platform today and loved the V3 update mentioning what's new in TUF+ V3 😍",
    type: 'linkedin'
  },
  {
    name: 'Shivani',
    handle: '@Shivani78280334',
    avatar: '👩‍💻',
    content: "A big shoutout to TUF+ platform! 🚀 Premium UI with a structured learning content. The best part is it",
    type: 'twitter',
    logo : <Xlogo/>
  },
  {
    name: 'Aryan Shrivastava',
    handle: '@heyy_aryann',
    avatar: '🧑‍💻',
    content: "Great work 🙌 this looks impressive 🔥 @striver_79 @takeUforward",
    type: 'twitter',
    logo : <Xlogo/>
  },
  {
    name: 'Rahul Sharma',
    handle: '@rahul_codes',
    avatar: '👨‍💻',
    content: "TUF+ has been a game-changer for my interview prep. The structured approach and quality content is unmatched!",
    type: 'custom'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 "style={{ fontFamily: 'Geist, Geist Fallback, sans-serif' }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What users have to say about the <span className="text-orange-400">V3 launch of TUF+</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#181c1f] rounded-2xl p-6 shadow-xl border border-gray-700 hover:scale-105 transition-transform duration-200 flex flex-col min-h-[260px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FF6F61] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.handle}</p>
                </div>
                <div className="ml-auto">
                  <Quote className="w-5 h-5 text-[#FF6F61]" />
                </div>
              </div>
              <p className="text-gray-100 text-lg leading-relaxed mb-4 flex-1">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-1 mt-auto w-full">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                {testimonial.type === 'twitter' && (
                  <span className="ml-auto flex items-center"><span className="ml-2"><Xlogo /></span></span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;