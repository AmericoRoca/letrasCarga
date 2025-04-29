import React from 'react'
import { BriefcaseIcon, GraduationCapIcon, AwardIcon } from 'lucide-react'
export const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-900 w-full">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6 text-lg">
              I'm a passionate developer with a strong focus on creating
              immersive digital experiences that combine aesthetic design with
              technical excellence. With expertise in both frontend and backend
              technologies, I enjoy building complete solutions that solve
              real-world problems.
            </p>
            <p className="text-gray-400 mb-8">
              My journey in software development began over 5 years ago, and
              since then I've worked on a diverse range of projects from
              interactive web applications to complex enterprise systems. I'm
              constantly exploring new technologies and approaches to enhance my
              skills and deliver better results.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-black rounded-md">
                  <BriefcaseIcon size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Professional Experience
                  </h3>
                  <p className="text-gray-400">
                    5+ years building web applications and digital solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-black rounded-md">
                  <GraduationCapIcon size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Education</h3>
                  <p className="text-gray-400">
                    Bachelor's in Computer Science, Advanced Web Development
                    Certification
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-black rounded-md">
                  <AwardIcon size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Achievements</h3>
                  <p className="text-gray-400">
                    Open Source Contributor, Hackathon Winner, Tech Community
                    Speaker
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-zinc-800 to-black rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80"
                alt="Developer Portrait"
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black p-4 rounded-lg border border-zinc-800 w-48">
              <div className="text-sm text-gray-400 mb-1">
                Currently working with
              </div>
              <div className="font-semibold">
                React, Three.js, Node.js & GraphQL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
