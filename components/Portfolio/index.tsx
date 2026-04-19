
import { Project } from "@/types/project";
import Image from "next/image";

const Portfolio = () => {
  const projects: Project[] = [];

  const categories: string[] = ["Government", "Automotive", "Healthcare", "IoT", "Enterprise applications", "Web Application", "Mobile App"];

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
          {categories.map((category) => (
            <button
              key={category}
              className="mb-3 mr-3 rounded-md bg-gray-100 px-4 py-2 text-base font-medium text-gray-700 shadow-one duration-300 hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-white dark:shadow-three dark:hover:bg-primary border border-gray-200 dark:border-gray-600"
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
                className="wow fadeInUp relative mb-10 overflow-hidden rounded-md bg-white shadow-one duration-300 hover:shadow-two dark:bg-gray-800 dark:shadow-three dark:hover:shadow-gray-dark"
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
                      {project.link && (
                        <a
                          href={project.link}
                          className="rounded-full bg-primary p-3 text-white transition-transform hover:scale-110"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
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
                  {project.technologies.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
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
    </section >
  );
};

export default Portfolio;
