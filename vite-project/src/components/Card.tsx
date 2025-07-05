import React, { useState } from 'react';
import Box from '../icons/Box';
import Moon from '../icons/moon';
import Plus from '../icons/plus';

interface CardProps {
  title: string;
  stats: { label: string; value: string }[];
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  onButtonClick?: () => void;
}

function Card({ title, stats, description, icon, buttonText, onButtonClick }: CardProps) {
  return (
    <div className="bg-gradient-to-br from-[#10141a] to-[#1a2233] border border-[#23234a]/30 rounded-2xl shadow-lg p-7 w-80 flex flex-col justify-between transition-transform duration-300 hover:scale-105 group">
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold text-white drop-shadow-md">{title}</span>
        <span className="text-3xl text-orange-400">{icon}</span>
      </div>
      <div className="space-y-2 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-2 text-gray-200 text-sm">
            <span className="font-semibold text-orange-400">{stat.value}</span>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-sm mb-6 min-h-[48px]">{description}</p>
      <button
        className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-xl transition-colors duration-200 shadow-md"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

const tabData = [
  {
    label: 'DSA',
    cards: [
      {
        title: 'DSA',
        stats: [
          { value: '19+', label: 'Topics' },
          { value: '16+', label: 'Contests' },
          { value: '473+', label: 'Problems' },
        ],
        description: 'Designed for all levels to master Data Structures & Algorithms.',
        icon: <Box />, buttonText: 'View Syllabus',
      },
      {
        title: 'Concept Revision',
        stats: [
          { value: '40+', label: 'Topics' },
          { value: '199+', label: 'Problems' },
        ],
        description: 'Quickly revise key concepts and boost your confidence.',
        icon: <Moon />, buttonText: 'View Syllabus',
      },
      {
        title: 'Quick Revision',
        stats: [
          { value: '10+', label: 'Topics' },
          { value: '79+', label: 'Problems' },
        ],
        description: 'Perfect for last-minute prep and rapid review.',
        icon: <Plus />, buttonText: 'View Syllabus',
      },
    ],
  },
  {
    label: 'Premium',
    cards: [
      {
        title: 'Premium DSA',
        stats: [
          { value: '25+', label: 'Topics' },
          { value: '20+', label: 'Contests' },
        ],
        description: 'Exclusive premium content for advanced learners.',
        icon: <Box />, buttonText: 'Unlock Premium',
      },
    ],
  },
  {
    label: 'Core Subjects',
    cards: [
      {
        title: 'Operating Systems',
        stats: [
          { value: '15+', label: 'Topics' },
        ],
        description: 'Master OS concepts for interviews.',
        icon: <Moon />, buttonText: 'View Syllabus',
      },
      {
        title: 'DBMS',
        stats: [
          { value: '12+', label: 'Topics' },
        ],
        description: 'Database Management Systems essentials.',
        icon: <Plus />, buttonText: 'View Syllabus',
      },
    ],
  },
  {
    label: 'System Design',
    cards: [
      {
        title: 'System Design Basics',
        stats: [
          { value: '8+', label: 'Modules' },
        ],
        description: 'Learn scalable system design from scratch.',
        icon: <Box />, buttonText: 'View Syllabus',
      },
    ],
  },
  {
    label: 'Aptitude',
    cards: [
      {
        title: 'Aptitude Booster',
        stats: [
          { value: '30+', label: 'Topics' },
        ],
        description: 'Sharpen your aptitude for placement tests.',
        icon: <Plus />, buttonText: 'View Syllabus',
      },
    ],
  },
];

export default function CardSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full max-w-7xl mx-auto mt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        Everything You Need to <span className="text-orange-400">Crack Interviews</span> <span role="img" aria-label="muscle">💪</span>
      </h2>
      <div className="flex gap-4 justify-center mb-10 flex-wrap">
        {tabData.map((tab, idx) => (
          <button
            key={tab.label}
            className={`px-6 py-2 rounded-lg font-semibold text-base transition-all duration-200 border-2 border-transparent focus:outline-none ${
              activeTab === idx
                ? 'bg-[#181824] text-orange-400 border-orange-400 shadow-md'
                : 'bg-[#10141a] text-white hover:text-orange-400 hover:border-orange-400'
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {tab.label}
            {['Premium', 'System Design', 'Aptitude'].includes(tab.label) && (
              <span className="ml-2 bg-orange-400 text-xs text-white px-2 py-0.5 rounded-full align-middle">New</span>
            )}
          </button>
        ))}
      </div>
      <div className="flex gap-8 overflow-x-auto p-6 bg-transparent justify-center">
        {tabData[activeTab].cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}
