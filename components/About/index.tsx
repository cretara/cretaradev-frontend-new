import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="border-b border-gray-200 pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <div className="mx-auto flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-white">
                  <div className="text-center text-black dark:text-white">
                    <svg
                      className="mx-auto mb-4 h-20 w-20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <h3 className="text-xl font-bold">
                      Senior Developer and Architect
                    </h3>
                    <p className="text-sm opacity-90">18+ Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Full-Stack and Architecture Engineering Excellence
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                    With over 18 years of experience in software development, I
                    specialize in creating scalable web and mobile applications
                    for public administrations and enterprise clients.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Architecture & Innovation
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                    I design robust system architectures and implement
                    cutting-edge technologies to solve complex business
                    challenges while maintaining high code quality and
                    performance standards, respecting users' expectation and
                    requests.
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Open Source Advocate
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                    Passionate contributor to the open-source ecosystem,
                    believing in the power of collaborative development and
                    knowledge sharing to advance the technology community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
