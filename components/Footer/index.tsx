import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div id={"main"}>
      <footer
        className="wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-16 md:pt-20 lg:pt-20"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mb-12 lg:mb-16">
                <div className="mt-8 flex items-center justify-center gap-4">
                  <Link
                    href="https://github.com/cretara"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary dark:border-slate-300 dark:bg-white"
                  >
                    <Image
                      src="/images/social/github.svg"
                      alt="GitHub"
                      width={22}
                      height={22}
                      className="rounded-full"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/pier-daniele-cretara"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary dark:border-slate-700 dark:bg-slate-900"
                  >
                    <Image
                      src="/images/social/linkedin.svg"
                      alt="LinkedIn"
                      width={22}
                      height={22}
                      className="rounded-full"
                    />
                  </Link>
                  <Link
                    href="https://x.com/cretaradev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X profile"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary dark:border-slate-700 dark:bg-slate-900"
                  >
                    <Image
                      src="/images/social/x.svg"
                      alt="X"
                      width={22}
                      height={22}
                      className="rounded-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
