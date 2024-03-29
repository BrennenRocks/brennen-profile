import { GithubIcon, XIcon } from "@/components/icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className="flex space-x-6 w-full max-w-4xl">
        <div>
          <Image
            src="/me.jpg"
            alt="me"
            height={128}
            width={128}
            className="fixed z-10 rounded-3xl"
          />
          <div className="bg-violet-400 opacity-30 -translate-y-1 -translate-x-1 h-[128px] w-[136px] rounded-3xl"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="font-bold text-6xl">Brennen Davis</h1>
          <div className="flex space-x-12">
            <a
              className="text-gray-300 pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 hover:text-gray-50"
              href="https://github.com/BrennenRocks"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
              <div>Github</div>
            </a>
            <a
              className="text-gray-300 pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 hover:text-gray-50"
              href="https://twitter.com/Elevated_SW"
              target="_blank"
              rel="noreferrer"
            >
              <XIcon />
              <div>X (Twitter)</div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
