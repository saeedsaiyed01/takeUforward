import React, { useState } from 'react';


const features = [
  {
    title: 'DSA (Basics to Advanced)',
    desc: '1000+ problems to practice DSA with structured difficulty.',
    image: './bg.png',
    video: './dsa1.mp4',
  },
  {
    title: 'Core Subjects',
    desc: 'Master DBMS, OS, and CN from scratch with video + problems.',
    image: './bg.png',
    video: './coresubject.mp4',
  },
  {
    title: 'OOPs Module',
    desc: 'Videos, quizzes, and end-to-end problems for OOP.',
    image: './bg.png',
    video: './OOPs.mp4',
  },
  {
    title: 'LifeTime Validity',
    desc: 'Access the portal forever.',
    image: './bg.png',
    video:'./live-time-validity.mp4',
  },
  {
    title: 'Personalised Roadmap',
    desc: 'Get a time-based custom roadmap to crack placements.',
    image: './bg.png',
    video: './roadmap.mp4',
  },
];

export default function CourseFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#0f0f0f] font-sans text-white py-10 px-6  mb-0 md:px-20 min-h-screen"style={{ fontFamily: 'Geist, Geist Fallback, sans-serif' }}>
      <h2 className="text-3xl  font-bold text-orange-400 mb-10 text-center">Everything You Need to Crack Interviews 💪</h2>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Feature Cards */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {features.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-left px-5 py-4 border rounded-2xl  transition-all ${
                activeIndex === index
                  ? 'bg-orange-400 text-black border-orange-400'
                  : 'border-white'
              }`}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm mt-1 opacity-80">{item.desc}</p>
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <div className="w-full md:w-2/3 flex">   
          <div className="rounded-lg overflow-hidden border-2 w-full p-0 flex justify-center items-center" style={{ boxShadow: '0 0 16px 2px #ff9100, 0 0 0 2px #ff9100 inset' }}>
            <video
              src={features[activeIndex].video}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: '10px', display: 'block' }}
              controls={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
