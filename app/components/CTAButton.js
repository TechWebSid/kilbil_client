'use client';

export default function CTAButton() {
  const handleClick = () => {
    // Add any client-side functionality here
    console.log('CTA button clicked');
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg flex items-center justify-center"
    >
      <span>Start Learning Journey</span>
      <span className="ml-2">🚀</span>
    </button>
  );
} 