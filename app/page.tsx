import {Inter} from "@next/font/google";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export default async function IndexCretara() {
    return (
        <div id="main">
            <div
                className="flex items-center w-full h-full bg-cover bg-center"
                style={{backgroundImage: "url(/main-bg.webp)"}}
            >
                <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
                    <h1 className="text-[50px] text-white font-semibold">
                        <div>
                            <span
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                          Full-stack
                        </span>
                        </div>
                        <div>
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Software Engineer
                    </span>
                        </div>
                    </h1>
                    <p className="text-gray-200 hidden md:block">
                        I'm delighted to welcome you to my portfolio, where you can explore my 17 years of experience as
                        a full-stack developer specializing in web and mobile applications for public administrations
                        and medium to large-sized businesses. Throughout my career, I've worked on challenging projects
                        that have tested my creativity and problem-solving abilities. This portfolio is a window into my
                        passion for technology and innovation, as well as a showcase of the results I've achieved.

                        I have a deep admiration for the technologies, frameworks, and open-source platforms that have
                        powered many of my creations. The open-source ecosystem represents a global community of
                        brilliant minds collaborating to make the digital world a better place. My work has been
                        profoundly influenced by this philosophy of sharing and cooperation, and I continually seek to
                        give back to this community through my personal contributions.
                    </p>
                    <div className="flex-col md:flex-row hidden md:flex gap-5">
                        {/*                        <Link
                            href="/my-skills"
                            className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
                        >
                            Learn more
                        </Link>
                        <Link
                            href="/my-projects"
                            className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
                        >
                            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
                            My projects
                        </Link>*/}
                        <Link
                            href="/resume"
                            className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
                        >
                            <div
                                className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20"/>
                            Resume
                        </Link>
                        {/*                        <Link
                            href="/contact-me"
                            className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
                        >
                            <div
                                className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20"/>
                            Contact me
                        </Link>*/}
                    </div>
                </div>
            </div>

        </div>
    );
}
