import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Tech Innovators Inc.',
    role: 'Senior UX/UI Designer & Front-end Developer',
    period: '2022-2025',
    description: 'Led the design and development of multiple high-profile web applications, improving user engagement by 40%.',
    achievements: [
      'Implemented a new design system, reducing development time by 30%',
      'Mentored junior designers and developers, improving team productivity',
      'Contributed to open-source projects, enhancing company reputation',
    ],
    logo: '/placeholder.svg?height=80&width=80',
  },
  {
    company: 'Creative Solutions LLC',
    role: 'UX/UI Designer & Front-end Developer',
    period: '2019-2022',
    description: 'Designed and developed responsive websites and mobile applications for various clients across different industries.',
    achievements: [
      'Increased client satisfaction rate from 85% to 95%',
      'Optimized website performance, improving load times by 50%',
      'Introduced A/B testing, leading to a 25% increase in conversion rates',
    ],
    logo: '/placeholder.svg?height=80&width=80',
  },
  {
    company: 'Digital Dynamics Co.',
    role: 'Junior Web Developer',
    period: '2017-2019',
    description: 'Assisted in the development and maintenance of company websites and internal tools.',
    achievements: [
      'Developed a custom CMS, streamlining content updates',
      'Implemented responsive design, improving mobile user experience',
      'Contributed to the company blog, sharing insights on web development trends',
    ],
    logo: '/placeholder.svg?height=80&width=80',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Experience() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.h1
        variants={itemVariants}
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        Professional Experience
      </motion.h1>
      <motion.div variants={containerVariants} className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.company}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{exp.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.period}
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {exp.description}
            </p>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Key Achievements:
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}


