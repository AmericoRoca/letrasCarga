import React from 'react'
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react'
export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black w-full">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out and let's create something amazing together.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-md">
                  <MailIcon size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a
                    href="mailto:hello@example.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-md">
                  <PhoneIcon size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-md">
                  <MapPinIcon size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400">San Francisco, California</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {['github', 'linkedin', 'twitter', 'dribbble'].map(
                  (platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="p-3 bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors"
                      aria-label={`Connect on ${platform}`}
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${platform}/ffffff`}
                        alt={platform}
                        className="w-5 h-5"
                      />
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-white text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-white text-white"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-white text-white"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:border-white text-white resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                Send Message <SendIcon size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
