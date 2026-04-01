import { Exp } from "@/types/exp";

const Experience = () => {
  const experiences: Exp[] = [
    {
      year: "Sept 2024 - Present",
      title: "Senior Full-Stack Developer and Cloud Solution Architect",
      company: "DXC Technology",
      description:
        "As a Full Stack Developer and Architect within BMW's New Car Evaluation (NCE) division, I have a critical role in designing, developing, testing, and maintaining end-to-end web applications in the AWS cloud environment that facilitate the assessment and evaluation of autonomous driving systems. This role combines technical expertise in both frontend and backend development with architectural leadership to deliver scalable, high-performance solutions. I'm working directly impacting BMW's ability to innovate and lead in the autonomous driving space, ensuring the delivery of safe, reliable, and cutting-edge vehicle technologies.",
      technologies: ["Angular", "React", "AWS", "Kubernetes", "Docker", "Java", "Spring Boot", "Python", "PostgreSQL", "GitHub", "GitHub Actions", "MongoDB", "DynamoDB", "AWS S3", "AWS EKS", "AWS ECR", "AWS Glue", "AWS Athena", "AWS SNS", "AWS SQS", "AWS Lambda", "AWS API Gateway", "AWS CloudFormation", "AWS CloudWatch", "AWS CloudTrail", "Keycloak"],
    },
    {
      year: "Jun 2023 - Aug 2024",
      title: "Senior Full-Stack Developer and Cloud Solution Architect",
      company: "SCAI Tecno",
      description: "Senior full stack engineer and architect in IT consulting services for medium-big enterprises in banking and vacancy management. I have been involved in the design and development of scalable web and mobile applications, cloud solutions, and microservices architectures, leveraging technologies such as Java, Spring Boot, Angular, React, SQL Server, Google Cloud Platform, Kubernetes, and Docker.",
      technologies: ["Java", "Spring Boot", "Angular", "React", "C#", ".Net", "Ionic", "SQL Server", "Javascript", "Typescript", "Bootstrap", "Tailwind", "Google Cloud Platform", "Kubernetes", "Docker"],
    },
    {
      year: "Jun 2019 - Jun 2023",
      title: "Team Lead - Senior Full-Stack Developer and Cloud Solution Architect",
      company: "LVIIIER - Frame S.r.l.",
      description: "Team leader developer and technical department and responsible for design, analysis, implementation, and maintenance of the different applications related to the projects Pediatotem https://pediatotem.it/, GoMed https://gomed.it/ and Keymed https://pediatotem.it/home/keymed/",
      technologies: ["Java", "Spring Boot", "Angular", "Ionic", "Java Android", "C#", "MySQL", "PostgreSQL", "Vaadin", "PHP", "Google Cloud Platform", "Kubernetes", "Docker"],
    },
    {
      year: "Oct 2016 - Jun 2023",
      title: "Team Lead - Senior Full-Stack Developer and Cloud Solution Architect",
      company: "Engineering Ingegneria Informatica S.p.A.",
      description: "Design and development of J2EE, Javascript and PHP medium-large business applications as a consultant for Engineering Ingegneria Informatica S.p.A., Marghera - Venice office (consultant on HT Servizi S.r.l.), on behalf of the Veneto Region",
      technologies: ["Java", "Selenium", "TestLink", "Spring Boot", "Javascript", "JQuery UI", "Liferay", "C#", "Oracle DBMS", "PostgreSQL", "PHP", "Docker", "Keycloak"],
    },
    {
      year: "May 2016 - Dec 2016",
      title: "Team Lead - Senior Full-Stack Developer and Cloud Solution Architect",
      company: "ADSU Teramo",
      description: "Day-to-day management of infrastructure and applications, uploading content, updates and news to be published on the company’s official website http://www.adsuteramo.it, and technical support for the company’s social media channels. In particular:Technical support and management of the “Bike2Study” project, approved by Board Resolution No. 33 of 19 July 2016. Creation, activation, and management of the ADSU Teramo Facebook profile, and management of the company’s official website http://www.adsuteramo.it. Development of a web design project for the company website by a webmaster/web designer specialising in digital communication, to be submitted to the company for approval",
      technologies: ["Wordpress", "PHP", "MySQL", "Bootstrap", "jQuery"],
    },
    {
      year: "Jul 2008 - Oct 2016",
      title: "Junior to Senior Full stack developer",
      company: "ARIT - Regione Abruzzo",
      description: "Design, development, and monitoring of information systems for public administrations in the Abruzzo Region. My work covered the sectors of healthcare, e-government, agriculture, transport, the digitisation of administrative processes and documents, the Digital Administration Code, administrative transparency, and online service portals for citizens and businesses. My responsibilities included the design and implementation of information systems (covering the application, processing, and communication infrastructure required to support them), installation and commissioning, user training, and first- and second-level maintenance and support.",
      technologies: ["Java", "Liferay", "JBoss", "Tomcat", "MySQL", "PostgreSQL", "Oracle", "PHP", "Symfony", "Joomla", "Drupal", "Wordpress", "Alfresco", "Javascript", "jQuery", "Bootstrap", "Networking admin", "Linux admin"],
    },
    {
      year: "Oct 2007 - Dec 2007",
      title: "Junior to Senior Full stack developer consultant",
      company: "BIC Western",
      description: "Designer and developer of portlets for the Italian localization of the e-democracy portal developed as part of the WDCNET project (Digital Citizenship Developed on Wireless Networks in Geographically Isolated Areas, funded by the P.I.C. INTERREG III B programme - Code A.1.204)",
      technologies: ["Java", "Java enterprise", "Liferay", "Javascript", "Bootstrap", "MySQL"],
    },
    {
      year: "Jun 2007 - Jul 2007",
      title: "External commissioneer state exam A.S. 2006/2007",
      company: "Istituto Professionale “A. Pagliaccetti”, Giulianova (Italia)",
      description: "External member of the A-level examination board for the subjects of Electronics and Electrical Engineering",
      technologies: [],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-127.5 text-center lg:mb-20">
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
                      <h4
                        className="mb-4 text-lg font-semibold bg-primary/10 text-primary rounded px-2 py-1 dark:bg-primary/30 dark:text-primary-200"
                        style={{
                          boxShadow: '0 1px 6px 0 rgba(0,0,0,0.07)',
                          display: 'inline-block',
                        }}
                      >
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
