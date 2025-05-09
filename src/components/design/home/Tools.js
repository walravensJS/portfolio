import React from "react";
import { motion } from "framer-motion";

const tools = [
  { name: "Macbook", imgSrc: "/img/tools/macbook.png" },
  { name: "Mouse", imgSrc: "/img/tools/mouse.png" },
  { name: "VSCode", imgSrc: "/img/tools/vscode.png" },
  { name: "Photoshop", imgSrc: "/img/tools/photoshop.png" },
  { name: "Illustrator", imgSrc: "/img/tools/illustrator.png" },
  { name: "Procreate", imgSrc: "/img/tools/procreate.png" }
];

export default function Tools() {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Tools I Use</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-lg p-6 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col items-center gap-3">
              <img
                src={tool.imgSrc}
                alt={`${tool.name} icon`}
                className="w-16 h-16 object-contain"
              />
              <span className="font-medium text-sm">{tool.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}