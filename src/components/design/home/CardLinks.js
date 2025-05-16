import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "./../../../routes/routes";
import ButtonLink from "../../functional/ButtonLink";

export default function CardLinks() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: "projects",
      title: "Projects",
      image: "/img/tools/macbook.png",
      route: ROUTES.project.path,
      buttonText: "View Projects",
      description: "Explore my portfolio of design and development work"
    },
    {
      id: "about",
      title: "About Me",
      image: "/img/mylogo.svg",
      route: ROUTES.about.path, // Using same path as in your original code
      buttonText: "About Me",
      description: "Learn more about my background and skills"
    }
  ];

  return (
    <div className="w-[95%] mx-auto mt-12 mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Explore More</h2>
      
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {cards.map((card) => (
          <Link
            to={card.route}
            key={`${card.id}-${card.route}`}
            className="w-full md:w-1/2 group"
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative bg-gray-100 aspect-[4/3] rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl transform group-hover:-translate-y-1">
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Dark overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-6 text-white z-20 transform transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                
                
                <div className="transform transition-all duration-300">
                  <ButtonLink href={card.route}>{card.buttonText}</ButtonLink>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}