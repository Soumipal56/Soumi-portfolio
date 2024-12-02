
import { Code2, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="about">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 dark:text-white"
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hi, I'm Soumi Pal. I am a front-end developer with experience in HTML, CSS, Javascript and React.
            I'm passionate about creating beautiful and functional web experiences.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Code2 className="w-6 h-6" />,
              title: 'Frontend Development',
              description: 'HTML, CSS, JavaScript, React',
            },
            {
              icon: <Database className="w-6 h-6" />,
              title: 'Web Development',
              description: 'Responsive Design, Modern UI/UX',
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: 'Technologies',
              description: 'Git, npm, Modern Web Tools',
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 * index }}
                className="text-blue-500 mb-4"
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;