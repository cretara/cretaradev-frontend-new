import { Exp } from "@/types/exp";

const Experience = () => {
  const experiences: Exp[] = [
    {
      year: "2020 - Present",
      title: "Senior Software Architect",
      company: "Tech Solutions Inc.",
      description:
        "Leading the design and implementation of scalable web applications for enterprise clients. Collaborating with cross-functional teams to define architecture and ensure best practices.",
      technologies: ["Node.js", "React", "AWS", "Docker"],
    },
    {
      year: "2015 - 2020",
      title: "Full-Stack Developer",
      company: "Innovatech Ltd.",
      description:    "Developed and maintained web applications for public administration clients. Worked closely with stakeholders to gather requirements and deliver high-quality solutions.",   technologies: ["Java", "Angular", "MySQL", "Azure"],  },
  ];
  return (
    <section id="experience" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-127.5 text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Career Journey
              </span>
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[40px]">
                Professional Experience
              </h2>
              <p className="text-base font-medium leading-relaxed text-body-color">
                Over 17 years of progressive experience in software development,
                from junior developer to senior architect.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-primary md:left-1/2 md:-translate-x-0.5"></div>

              {experiences?.map((singleExperience, index) => (
                <div
                  key={singleExperience.year}
                  className={`wow fadeInUp relative mb-12 flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  data-wow-delay=".1s"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary md:left-1/2 md:-translate-x-1/2">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full pl-12 md:w-1/2 md:pl-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                  >
                    <div className="rounded-md bg-white p-6 shadow-two dark:bg-gray-800 dark:shadow-three">
                      <span className="mb-2 inline-block rounded bg-primary px-3 py-1 text-sm font-medium text-white">
                        {singleExperience.year}
                      </span>
                      <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                        {singleExperience.title}
                      </h3>
                      <h4 className="mb-4 text-lg font-semibold text-primary">
                        {singleExperience.company}
                      </h4>
                      <p className="mb-4 text-base font-medium leading-relaxed text-body-color">
                        {singleExperience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {singleExperience.technologies.map(
                          (singleTechnology) => (
                            <span
                              key={singleTechnology}
                              className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                            >
                              {singleTechnology}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
