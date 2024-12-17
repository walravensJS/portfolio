import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function MyCard() {
  useEffect(() => {
    // Animate the shine effect using GSAP
    gsap.to(".shine", {
      backgroundPosition: "200% 0",
      duration: 2, // duration of the animation
      repeat: -1, // repeat the animation indefinitely
      ease: "linear", // linear easing for smooth animation
      stagger: 0.5, // optional stagger for multiple elements if needed
    });
  }, []);

  return (
    <div className='flex justify-center w-1/2'>
        <div className="relative bg-gradient-to-b from-purple-200 to-purple-500 w-80 h-[500px] rounded-xl border-4 border-gray-200 shadow-2xl p-4 flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-20 animate-shine shine"></div>
      <div className="flex justify-between items-center z-10">
        <h3 className="text-gray-800 font-bold">Belgian / Native American</h3>
        <span className="text-gray-600 font-semibold">HP 100</span>
      </div>

      <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden shadow-inner flex items-center justify-center z-10">
        <img
          src="https://via.placeholder.com/150"
          alt="Character"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-4 text-gray-700 z-10">
        <p className="font-medium text-sm">
          Known for its rich heritage and versatile skills. A unique blend of cultures ready for any challenge.
        </p>
      </div>

      <div className="mt-4 z-10">
        <p className="font-bold text-gray-800">Abilities:</p>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>Adaptive Knowledge</li>
          <li>Cultural Resilience</li>
          <li>Strategic Thinking</li>
        </ul>
      </div>

      <div className="flex justify-between items-center mt-4 z-10">
        <span className="text-gray-600 font-semibold text-sm">#001</span>
        <span className="text-gray-600 font-semibold text-sm">Rare</span>
      </div>
    </div>
    </div>
  );
}
