import { Quote, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Testimonials: React.FC = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);

  const testimonials = [
    {
      name: 'Hariprasath S',
      handle: '@hprasatholi',
      avatar: '👤',
      content: "@takeUforward It's Just Amazing!!! Thank you striver and their team.",
      image: true,
      type: 'twitter'
    },
    {
      name: 'Piyush Kumar Singh',
      handle: '@piyushK1302',
      avatar: '👨‍💻',
      content: "the new ui is cool 🔥🔥🔥 @striver_79 @takeUforward waiting for the V3 contents",
      image: true,
      type: 'twitter'
    },
    {
      name: 'Gaurav raj',
      handle: '@raj',
      avatar: '🧑‍💼',
      content: "I'm on break because of my mid-sem exams, but visited the platform today and loved the V3 update mentioning what's new in TUF+ V3 😍",
      image: true,
      type: 'linkedin'
    },
    {
      name: 'Shivani',
      handle: '@Shivani78280334',
      avatar: '👩‍💻',
      content: "A big shoutout to TUF+ platform! 🚀 Premium UI with a structured learning content. The best part is it",
      image: false,
      type: 'twitter'
    },
    {
      name: 'Aryan Shrivastava',
      handle: '@heyy_aryann',
      avatar: '🧑‍💻',
      content: "Great work 🙌 this looks impressive 🔥 @striver_79 @takeUforward",
      image: false,
      type: 'twitter'
    },
    {
      name: 'Rahul Sharma',
      handle: '@rahul_codes',
      avatar: '👨‍💻',
      content: "TUF+ has been a game-changer for my interview prep. The structured approach and quality content is unmatched!",
      image: false,
      type: 'custom'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleTestimonials(prev => {
        const newVisible = [...prev];
        const nextIndex = Math.floor(Math.random() * testimonials.length);
        
        if (!newVisible.includes(nextIndex)) {
          newVisible.push(nextIndex);
        }
        
        // Keep only the last 3 testimonials visible
        if (newVisible.length > 3) {
          newVisible.shift();
        }
        
        return newVisible;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What users have to say about the <span className="text-[#FF6F61]">V3 launch of TUF+</span>
          </h2>
        </div>

        <div className="relative h-96 overflow-hidden">
          {/* Cascading testimonials */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-4xl">
              {testimonials.map((testimonial, index) => {
                const isVisible = visibleTestimonials.includes(index);
                const position = visibleTestimonials.indexOf(index);
                
                return (
                  <div
                    key={index}
                    className={`
                      absolute transition-all duration-1000 ease-in-out
                      ${isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                      }
                    `}
                    style={{
                      left: `${20 + (position * 25)}%`,
                      top: `${position * 10}px`,
                      transform: `rotate(${(position - 1) * 2}deg)`,
                      zIndex: 10 - position
                    }}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200 max-w-sm hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#FF6F61] rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.handle}</p>
                        </div>
                        <div className="ml-auto">
                          <Quote className="w-5 h-5 text-[#FF6F61]" />
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        {testimonial.content}
                      </p>
                      
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, #FF6F61 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, #FF6F61 0%, transparent 50%)`
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;