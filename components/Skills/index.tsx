import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Angular", level: 80 },
        { name: "Tailwind CSS", level: 92 },
        { name: "SASS/SCSS", level: 88 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 88 },
        { name: "Java", level: 85 },
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 87 },
        { name: "Redis", level: 82 },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 85 },
        { name: "CI/CD", level: 92 },
        { name: "Terraform", level: 80 },
        { name: "Monitoring", level: 85 },
      ],
    },
    {
      title: "Mobile & Other",
      skills: [
        { name: "React Native", level: 88 },
        { name: "Flutter", level: 75 },
        { name: "GraphQL", level: 90 },
        { name: "Microservices", level: 92 },
        { name: "System Design", level: 95 },
        { name: "Agile/Scrum", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Technical Expertise
              </span>
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[40px]">
                Skills & Technologies
              </h2>
              <p className="text-base font-medium leading-relaxed text-body-color">
                A comprehensive overview of the technologies and methodologies I've mastered throughout my career.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div
                className="wow fadeInUp mb-10 rounded-md bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8"
                data-wow-delay=".1s"
              >
                <h3 className="mb-8 text-xl font-bold text-black dark:text-white">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="mb-2 flex justify-between">
                        <span className="text-base font-medium text-dark dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-body-color">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2.5 rounded-full bg-primary transition-all duration-500 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
