import React from 'react';


const features = [
  {
    name: 'DSA (Basics to Advanced)',
    tuf: 'Yes (Curated list of beginners with practice set)',
    other: 'Yes',
  },
  {
    name: 'Live Content',
    tuf: 'No (Too crowded and chaotic)',
    other: 'Yes',
  },
  {
    name: 'Recorded Content',
    tuf: 'Yes (Broken down to smaller parts to save time)',
    other: 'Yes',
  },
  {
    name: 'DSA (Pattern Wise)',
    tuf: 'Yes',
    other: 'No',
  },
  {
    name: '1000+ Practice Problems',
    tuf: 'Yes',
    other: 'No (Apart from very few)',
  },
  {
    name: 'Customised Roadmap',
    tuf: 'Yes',
    other: 'No',
  },
  {
    name: 'Course + Platform',
    tuf: 'Yes',
    other: 'No (Apart from few dead ones)',
  },
  {
    name: 'Notes Downloader to Google Docs',
    tuf: 'Yes',
    other: 'No',
  },
];

const ComparisonTable = () => (
  <div className="bg-[#181c1f] rounded-2xl p-4 md:p-8 max-w-6xl mx-auto mt-10 mb-10  shadow-xl border border-gray-800" style={{ fontFamily: 'Geist, Geist Fallback, sans-serif' }}>
    <table className="w-full text-left text-gray-100">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="py-4 px-2 text-xl font-bold">Features</th>
          <th className="py-4 px-2 text-center">
            <img src={'./logo.png'} alt="TUF" className="h-8 mx-auto" />
          </th>
          <th className="py-4 px-2 text-xl font-bold text-right md:text-center">Other Platforms</th>
        </tr>
      </thead>
      <tbody>
        {features.map((row, idx) => (
          <tr key={row.name} className={idx % 2 === 0 ? 'bg-[#181c1f]' : 'bg-[#20242a]'}>
            <td className="py-4 px-2 font-medium text-base md:text-lg w-1/3">{row.name}</td>
            <td className="py-4 px-2 text-center w-1/3">{row.tuf}</td>
            <td className="py-4 px-2 text-right md:text-center w-1/3">{row.other}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ComparisonTable; 