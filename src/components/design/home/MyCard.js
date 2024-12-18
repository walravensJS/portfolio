import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function map(val, minA, maxA, minB, maxB) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

export default function MyCard() {
  const cardRef = useRef(null); // Reference to the card
  const imgRef = useRef(null); // Reference to the image

  useEffect(() => {
    const card = cardRef.current;
    const img = imgRef.current;

    const handleMouseMove = (ev) => {
      const imgRect = card.getBoundingClientRect();
      const width = imgRect.width;
      const height = imgRect.height;

      // Calculate mouse position relative to the card element
      const mouseX = ev.clientX - imgRect.left;
      const mouseY = ev.clientY - imgRect.top;

      const rotateY = map(mouseX, 0, width, -25, 25);
      const rotateX = map(mouseY, 0, height, 25, -25);
      const brightness = map(mouseY, 0, height, 1.5, 0.5);

      // GSAP animation for smooth transition
      gsap.to(img, {
        duration: 0.3, // Smooth transition duration
        rotationX: rotateX,
        rotationY: rotateY,
        filter: `brightness(${brightness})`,
      });
    };

    const handleMouseLeave = () => {
      // Reset the image properties when mouse leaves the card with GSAP
      gsap.to(img, {
        duration: 0.3, // Smooth reset transition
        rotationX: 0,
        rotationY: 0,
        filter: 'brightness(1)',
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup the event listeners when the component is unmounted
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className='flex justify-center w-[40%] m-auto'>
        <a href='/about' className=''>
        <div ref={cardRef} className="" style={{ position: 'relative', display: 'inline-block' }}>
            <img ref={imgRef} src="/img/card.png" alt="Plains" />
        </div>
        </a>
    </div>
  );
}
