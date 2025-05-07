import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import {NavbarDos} from "./NavbarDos"
import {FooterDos} from "./FooterDos"

export const ECommerce = () => {
  const categories = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Full-stack web applications and interactive experiences",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80",
      count: 6,
    },
    {
      id: "mobile-apps",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile applications",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
      count: 4,
    },
    {
      id: "interactive-3d",
      title: "Interactive 3D",
      description: "Three.js powered 3D web experiences and visualizations",
      image:
        "https://images.unsplash.com/photo-1633899306328-c5e70574aff5?w=800&auto=format&fit=crop&q=80",
      count: 3,
    },
    {
      id: "ai-projects",
      title: "AI & Machine Learning",
      description:
        "Projects leveraging artificial intelligence and machine learning",
      image:
        "https://images.unsplash.com/photo-1677442135136-760c813030c6?w=800&auto=format&fit=crop&q=80",
      count: 5,
    },
  ];
  return (
    <>
      <NavbarDos />
      <main className="!pt-20 !w-full bg-black">
        {/* Hero Section */}
        <section className="!py-20 !bg-zinc-900 !border-b !border-zinc-800">
          <div className="!container !mx-auto !px-6">
            <div className="!max-w-3xl">
              <h1 className="!text-4xl !md:text-6xl !font-bold !mb-6 text-white">
                E-Commerce
              </h1>
              <p className="!text-gray-400 !text-xl">
                Explore my collection of projects across different domains and
                technologies, showcasing innovative solutions and technical
                expertise.
              </p>
            </div>
          </div>
        </section>
        {/* Categories Grid */}
        <section className="!py-20 bg-black">
          <div className="!container !mx-auto !px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/projects/${category.id}`}
                  className="group relative overflow-hidden rounded-lg border border-zinc-800 hover:border-white/30 transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t !from-black/90 !via-black/60 to-transparent">
                    <div className="absolute bottom-0 p-6 w-full">
                      <div className="flex justify-between items-end">
                        <div>
                          <h2 className="text-2xl font-bold mb-2">
                            {category.title}
                          </h2>
                          <p className="text-gray-400 mb-4">
                            {category.description}
                          </p>
                          <div className="text-sm text-gray-500">
                            {category.count} Projects
                          </div>
                        </div>
                        <ArrowRightIcon
                          size={24}
                          className="text-white opacity-50 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterDos />
    </>
  );
};
