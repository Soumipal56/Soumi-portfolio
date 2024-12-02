import React from 'react';
import { Calendar, Book } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Learning React',
    company: 'Self-Learning',
    period: 'Present',
    description: 'Currently learning React.js to build modern web applications',
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-8"
            >
              {index !== experiences.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute left-[11px] top-8 w-0.5 bg-gray-200"
                />
              )}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute left-0 top-2 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center"
              >
                <Book size={14} className="text-white" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-blue-600 mb-2">{exp.company}</p>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;