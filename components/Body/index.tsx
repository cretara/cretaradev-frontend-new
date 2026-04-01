import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Body = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div id={"bodyMainSection"}>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight light:text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Full-Stack Engineer & Architect
                </h1>
                <p className="mb-12 text-base font-medium leading-relaxed! text-gray-600 dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  Welcome to my portfolio. I'm a passionate full-stack engineer
                  with over 19 years of experience creating scalable web and
                  mobile applications for public administrations and enterprise
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Experience />
    </>
  );
};

export default Body;
