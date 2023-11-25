import {Inter} from "@next/font/google";
import Link from "next/link";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionary";

const inter = Inter({subsets: ["latin"]});

export default async function IndexCretara({
        params: {lang},
    }: Readonly<{
        params: { lang: Locale };
    }>) {
    const dictionary = await getDictionary(lang);
    return (
        <div id="main">
            <div
                className="flex items-center w-full h-full bg-cover bg-center"
                style={{backgroundImage: "url(/public/main-bg.webp)"}}
            >
                <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
                    <h1 className="text-[50px] text-white font-semibold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Full-stack Software Engineer
            </span>
                    </h1>
                    <p className="text-gray-200 hidden md:block">
                        {dictionary.bio.welcome}
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
