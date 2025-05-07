import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { NavbarDos } from "./NavbarDos";
import { FooterDos } from "./FooterDos";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

export const StaticWebsites = () => {
  const categories = [
    {
      id: "web-development",
      title: "Teresa Hernandez Psicología",
      description: "Full-stack web applications and interactive experiences",
      image: "",
      liveUrl: "https://teresahernandezpsicologia.es",
    },
    {
      id: "mobile-apps",
      title: "Caravaning Gan",
      description: "Native and cross-platform mobile applications",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
      liveUrl: "https://caravaning-gan.es",
    },
    {
      id: "interactive-3d",
      title: "Caravaning Check",
      description: "Three.js powered 3D web experiences and visualizations",
      image:
        "https://images.unsplash.com/photo-1633899306328-c5e70574aff5?w=800&auto=format&fit=crop&q=80",
      liveUrl: "https://caravaningcheck.es",
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
                Static Websites
              </h1>
              <p className="!text-gray-400 !text-xl">
                This section showcases a selection of static websites I’ve
                built. These projects are optimized for performance, clean
                design, and fast loading — perfect for portfolios, informational
                pages, or small businesses. Each site highlights attention to
                detail, semantic structure, and responsive design to ensure a
                smooth user experience across all devices.
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
                  to={category.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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
                          <div className="flex gap-3">
                            <span>
                              <ExternalLinkIcon size={16} /> Live
                            </span>
                          </div>
                        </div>
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
