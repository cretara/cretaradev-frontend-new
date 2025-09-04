import React from "react";
import Image from "next/image";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Enterprise Management System",
      description: "A comprehensive ERP solution for medium to large businesses with real-time analytics, inventory management, and automated reporting capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      category: "Web Application",
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Public Administration Portal",
      description: "Digital transformation platform for government services with citizen portal, document management, and workflow automation.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Docker"],
      category: "Government",
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Mobile Banking Application",
      description: "Secure mobile banking solution with biometric authentication, real-time transactions, and advanced security features.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      technologies: ["React Native", "Java", "Redis", "Kubernetes"],
      category: "Mobile App",
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Scalable e-commerce solution with microservices architecture, payment integration, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["Vue.js", "Python", "GraphQL", "AWS"],
      category: "E-commerce",
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Healthcare Management System",
      description: "HIPAA-compliant healthcare platform with patient records, appointment scheduling, and telemedicine capabilities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker"],
      category: "Healthcare",
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "IoT Dashboard",
      description: "Real-time IoT monitoring dashboard with data visualization, alerts, and predictive analytics for industrial applications.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "InfluxDB", "Grafana"],
      category: "IoT",
      link: "#",
      github: "#",
    },
  ];

  const categories = ["All", "Web Application", "Mobile App", "Government", "E-commerce", "Healthcare", "IoT"];

  return (
    <section
      id="portfolio"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                My Work
              </span>
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[40px]">
                Featured Projects
              </h2>
              <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300">
                A showcase of innovative solutions I've developed for various industries and client needs.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className="mb-3 mr-3 rounded-md bg-gray-100 px-4 py-2 text-base font-medium text-gray-700 shadow-one duration-300 hover:bg-primary hover:text-white dark:bg-dark dark:text-white dark:shadow-three dark:hover:bg-primary border border-gray-200 dark:border-gray-600"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="-mx-4 flex flex-wrap">
          {projects.map((project) => (
            <div key={project.id} className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div
                className="wow fadeInUp relative mb-10 overflow-hidden rounded-md bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark"
                data-wow-delay=".1s"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="h-[250px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="flex h-full items-center justify-center space-x-4">
                      <a
                        href={project.link}
                        className="rounded-full bg-primary p-3 text-white transition-transform hover:scale-110"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a
                        href={project.github}
                        className="rounded-full bg-primary p-3 text-white transition-transform hover:scale-110"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="mb-2 inline-block rounded bg-primary px-3 py-1 text-xs font-medium text-white">
                    {project.category}
                  </span>
                  <h3 className="mb-4 text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-base font-medium text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
