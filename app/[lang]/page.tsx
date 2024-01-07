import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default async function IndexCretara() {
  return (
    <div id="main">
      <main className={inter.className}>
        <h1>
          <Link href={"en/bio"}>
            This is Cretara.dev site, go to bio section
          </Link>
        </h1>
      </main>
    </div>
  );
}
