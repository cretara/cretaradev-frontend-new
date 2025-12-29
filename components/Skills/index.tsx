"use client";

const skillCategories = [
  {
    title: "Programming Languages & Frameworks",
    skills: [{ name: "Java", level: 95 }],
  },
  {
    title: "Front-end Technologies",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Vue.js", level: 25 },
      { name: "Angular", level: 80 },
      { name: "Tailwind CSS", level: 92 },
      { name: "SASS/SCSS", level: 88 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Spring Boot", level: 95 },
      { name: "Node.js", level: 92 },
      { name: "Python", level: 88 },
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 90 },
      { name: "Redis", level: 90 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "CI/CD", level: 92 },
      { name: "CI/CD", level: 92 },
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
      { name: "Agile/Scrum", level: 95 },
    ],
  },
];

import React, { useCallback, useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>(
    {},
  );
  const rafIds = useRef<Record<string, number>>({});

  const animateSkill = useCallback(
    (id: string, target: number, duration = 1200, startDelay = 0) => {
      const startTime = performance.now() + startDelay;

      const step = (now: number) => {
        const elapsed = now - startTime;
        if (elapsed < 0) {
          rafIds.current[id] = requestAnimationFrame(step);
          return;
        }

        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);

        setAnimatedValues((prev) => {
          if (prev[id] === current) return prev;
          return { ...prev, [id]: current };
        });

        if (progress < 1) {
          rafIds.current[id] = requestAnimationFrame(step);
        } else {
          delete rafIds.current[id];
        }
      };

      rafIds.current[id] = requestAnimationFrame(step);
    },
    [],
  );

  useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === "undefined")
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (sectionRef.current) observer.unobserve(sectionRef.current);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Animate values using requestAnimationFrame for smooth increments
  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!isVisible) return;

    // Kick off animations with a small stagger
    let globalIndex = 0;
    skillCategories.forEach((category) => {
      category.skills.forEach((skill) => {
        const id = `${category.title}-${skill.name}`;
        const delay = globalIndex * 80; // 80ms stagger between bars
        const duration = 800 + Math.round((skill.level / 100) * 700); // 800-1500ms
        animateSkill(id, skill.level, duration, delay);
        globalIndex += 1;
      });
    });

    return () => {
      // cancel any remaining RAFs
      Object.values(rafIds.current).forEach((id) => cancelAnimationFrame(id));
      rafIds.current = {};
    };
  }, [isVisible]);

  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-127.5 text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Technical Expertise
              </span>
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[40px]">
                Skills & Technologies
              </h2>
              <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300">
                A comprehensive overview of the technologies and methodologies
                I&apos;ve mastered throughout my career.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {skillCategories.map((category) => (
            <div key={category.title} className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div
                className="wow fadeInUp mb-10 rounded-md bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-gray-800 dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8"
                data-wow-delay=".1s"
              >
                <h3 className="mb-8 text-xl font-bold text-black dark:text-white">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill) => {
                    const id = `${category.title}-${skill.name}`;
                    const current =
                      animatedValues[id] ?? (isVisible ? skill.level : 0);
                    return (
                      <div key={id}>
                        <div className="mb-2 flex justify-between">
                          <span className="text-base font-medium text-dark dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            {current}%
                          </span>
                        </div>

                        {/* progress bar container with native progress element for accessibility and a decorative animated div for visuals */}
                        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                          <progress
                            className="sr-only"
                            value={Math.round(current)}
                            max={100}
                            aria-label={`${skill.name} skill level`}
                          />
                          <div
                            aria-hidden
                            className="h-2.5 rounded-full bg-primary"
                            style={{
                              width: `${current}%`,
                              transition: "width 200ms linear",
                              willChange: "width",
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
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
