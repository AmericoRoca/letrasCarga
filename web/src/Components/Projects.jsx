import React from 'react'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
export const Projects = () => {
  const projects = [
    {
      title: '3D Portfolio Website',
      description:
        'A personal portfolio showcasing my work with interactive 3D elements using Three.js and React.',
      image:
        'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop&q=80',
      tags: ['React', 'Three.js', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'E-commerce Dashboard',
      description:
        'A comprehensive admin dashboard for managing products, orders, and customers with real-time analytics.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AI Content Generator',
      description:
        'A tool that leverages machine learning to generate high-quality content for various purposes.',
      image:
        'https://images.unsplash.com/photo-1677442135136-760c813030c6?w=800&auto=format&fit=crop&q=80',
      tags: ['TypeScript', 'OpenAI API', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]
  return (
    <section id="projects" className="!py-20 bg-black w-full">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and passion for
            creating innovative digital solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-white/30 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="!p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-sm text-white hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLinkIcon size={16} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-sm text-white hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon size={16} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="!px-10 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors inline-flex"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
