'use client'

import { motion } from 'framer-motion'
import { Calendar, Copy } from 'lucide-react'
import VerticalMarquee from '../components/VerticalMarquee'

const toolsData = [
  { name: 'HTML5', icon: '/html5.svg' },
  { name: 'CSS3', icon: '/css3.svg' },
  { name: 'JavaScript', icon: '/javascript.svg' },
  { name: 'React', icon: '/react.svg' },
  { name: 'Bootstrap', icon: '/bootstrap.svg' },
  { name: 'Tailwind', icon: '/tailwind.svg' },
  { name: 'Git', icon: '/git.svg' },
  { name: 'WordPress', icon: '/wordpress.svg' },
  { name: 'Figma', icon: '/figma.svg' },
  { name: 'After Effects', icon: '/ae.svg' },
  { name: 'Photoshop', icon: '/ps.svg' },
  { name: 'Illustrator', icon: '/ai.svg' },
  { name: 'Blender', icon: '/blender.svg' },
  { name: 'Framer', icon: '/framer.svg' },
]

const servicesData = [
  { title: 'UX/UI Design', logo: '/ux-ui.svg' },
  { title: 'Software Development', logo: '/software.svg' },
  { title: 'Web Development', logo: '/web.svg' },
  { title: 'Graphic Design', logo: '/graphic.svg' },
  { title: 'Mobile App Development', logo: '/mobile.svg' },
  { title: 'Brand Identity Design', logo: '/brand.svg' },
  { title: 'Frontend Development', logo: '/frontend.svg' },
  { title: 'Backend Development', logo: '/backend.svg' },
]

const experienceData = [
  {
    company: 'Tech Innovators Inc.',
    role: 'Senior UX/UI Designer & Front-end Developer',
    period: '2022-2025',
    logo: '/company1.svg',
  },
  {
    company: 'Digital Solutions Co.',
    role: 'Lead Frontend Developer',
    period: '2020-2022',
    logo: '/company2.svg',
  },
  {
    company: 'Creative Agency XYZ',
    role: 'UI/UX Designer',
    period: '2019-2020',
    logo: '/company3.svg',
  },
  {
    company: 'Startup Hub',
    role: 'Frontend Developer',
    period: '2018-2019',
    logo: '/company4.svg',
  },
  {
    company: 'Web Solutions Ltd',
    role: 'Junior Developer',
    period: '2017-2018',
    logo: '/company5.svg',
  },
]

const blogPosts = [
  'The Future of Web Development in 2024',
  'Mastering React: Advanced Patterns and Best Practices',
  'UI/UX Design Trends to Watch',
  'Building Scalable Applications with Modern Architecture',
  'The Impact of AI on Web Development',
  'Responsive Design: Beyond Media Queries',
  'Performance Optimization Techniques for Web Apps',
  'Creating Engaging User Experiences',
]

export default function Home() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mail@pabluxdev.com')
      alert('Email copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {/* Hero Section */}
      <motion.div
        variants={itemVariants}
        className="bg-card text-card-foreground rounded-2xl p-6 shadow-sm md:col-span-2 lg:col-span-1"
      >
        <div className="aspect-square w-full max-w-[300px] mx-auto mb-6 rounded-2xl overflow-hidden">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">
          Hi, Pablo here 👋
        </h2>
        <p className="text-muted-foreground mb-6">
          I'm a Passionate Designer & Engineer with 10+ years of experience and a vast skills set.
        </p>
        <div className="flex gap-4">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            <Calendar className="w-5 h-5" />
            Book a call
          </button>
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            <Copy className="w-5 h-5" />
            Copy Email
          </button>
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        variants={itemVariants}
        className="bg-card text-card-foreground rounded-2xl p-6 shadow-sm h-[400px]"
      >
        <h2 className="text-xl font-bold mb-4">
          Experience
        </h2>
        <VerticalMarquee className="h-[320px]">
          <div className="space-y-4">
            {experienceData.map((exp, index) => (
              <div 
                key={index} 
                className="p-4 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-background rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-xs">Logo</span>
                </div>
                <h3 className="font-medium">
                  {exp.company}
                </h3>
                <p className="text-sm text-muted-foreground">{exp.role}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
            ))}
          </div>
        </VerticalMarquee>
      </motion.div>

      {/* Tools Section */}
      <motion.div
        variants={itemVariants}
        className="bg-card text-card-foreground rounded-2xl p-6 shadow-sm"
      >
        <h2 className="text-xl font-bold mb-4">
          Tools I use
        </h2>
        <div className="grid grid-cols-5 gap-3">
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className="aspect-square bg-secondary hover:bg-secondary/80 rounded-lg p-2 flex items-center justify-center transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 bg-background rounded-md flex items-center justify-center">
                <span className="text-xs">Icon</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        variants={itemVariants}
        className="bg-card text-card-foreground rounded-2xl p-6 shadow-sm h-[400px]"
      >
        <h2 className="text-xl font-bold mb-4">
          My Services
        </h2>
        <VerticalMarquee className="h-[320px]">
          <div className="space-y-3">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center">
                  <span className="text-xs">Logo</span>
                </div>
                <span className="font-medium">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </VerticalMarquee>
      </motion.div>

      {/* Blog Section */}
      <motion.div
        variants={itemVariants}
        className="bg-card text-card-foreground rounded-2xl p-6 shadow-sm md:col-span-2 h-[400px]"
      >
        <h2 className="text-xl font-bold mb-4">
          New on the blog
        </h2>
        <VerticalMarquee className="h-[280px]">
          <div className="space-y-3">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="p-4 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors cursor-pointer"
              >
                {post}
              </div>
            ))}
          </div>
        </VerticalMarquee>
        <button className="w-full mt-4 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg transition-colors">
          View all Entries →
        </button>
      </motion.div>
    </motion.div>
  )
}


