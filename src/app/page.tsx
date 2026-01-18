'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-4xl w-full"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Hero Section */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Alex Wilczewski
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full-stack Developer & Creative Designer
          </p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I craft beautiful, functional digital experiences using modern web technologies and creative problem-solving.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={fadeInUp} className="flex gap-4 justify-center mb-16 flex-wrap">
          <Link href="#projects">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              View My Work
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold rounded-lg transition-colors">
              Get In Touch
            </button>
          </Link>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            { title: 'Frontend', skills: 'React, Next.js, TypeScript, Tailwind CSS' },
            { title: 'Backend', skills: 'Node.js, Express, PostgreSQL, MongoDB' },
            { title: 'Tools', skills: 'Git, Docker, Figma, Framer Motion' },
          ].map((category, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-2">{category.title}</h3>
              <p className="text-gray-300">{category.skills}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div variants={fadeInUp} id="projects" className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                name: 'Eclipse Color Sheet', 
                desc: 'Brand identity color palette tool',
                link: 'https://eclipse-color-sheet.alexwil.com'
              },
              { 
                name: 'Your Project', 
                desc: 'Add your amazing projects here',
                link: '#'
              },
            ].map((project, idx) => (
              <motion.a
                key={idx}
                href={project.link}
                variants={fadeInUp}
                className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 hover:scale-105 transition-all cursor-pointer"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-2">{project.name}</h3>
                <p className="text-gray-400">{project.desc}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={fadeInUp} id="contact" className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-400 mb-8">
            Have a project in mind? I'd love to hear about it.
          </p>
          <a href="mailto:your-email@example.com">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Send Me an Email
            </button>
          </a>
        </motion.div>
      </motion.div>
    </main>
  )
}
