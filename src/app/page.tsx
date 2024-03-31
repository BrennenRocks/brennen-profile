import { GithubIcon, XIcon } from "@/components/icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-6 lg:py-12 lg:px-0">
      <div className="flex flex-col gap-4 w-full lg:max-w-3xl">
        <div className="flex space-x-2 lg:space-x-6">
          <div className="relative">
            <Image
              src="/me.jpg"
              alt="me"
              height={128}
              width={128}
              className="absolute z-10 rounded-3xl w-auto h-auto"
            />
            <div className="bg-violet-400 opacity-30 -translate-y-1 -translate-x-1 h-[128px] w-[136px] rounded-3xl"></div>
          </div>
          <div className="flex flex-col lg:space-y-4">
            <h1 className="font-bold text-4xl lg:text-6xl">Brennen Davis</h1>
            <div className="flex space-x-3 lg:space-x-12">
              <a
                className="text-gray-300 flex place-items-center gap-1 lg:gap-2 lg:p-0 hover:text-gray-50"
                href="https://github.com/BrennenRocks"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
                <div>Github</div>
              </a>
              <a
                className="text-gray-300 flex place-items-center gap-1 lg:gap-2 lg:p-0 hover:text-gray-50"
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
        <div className="flex flex-col leading-relaxed gap-2 w-10/12 m-auto text-gray-200">
          <p className="text-lg text-gray-50">👋 Hello there Tailwind team!</p>
          <p>
            My name is Brennen and I hope to <em>wow</em> you with some projects
            I&apos;ve worked on and my infectious enthusiasm to get things
            right.
          </p>
          <div className="relative">
            <div className="absolute top-[17px] -left-5 h-2 w-2 bg-violet-400 rotate-45"></div>
            <h3 className="text-xl py-2 text-gray-50">For Starters</h3>
          </div>
          <p>
            My programming fundamentals started in the world of Java as I worked
            on getting my CS Degree and my first programming job. This really
            helped me to get a strong foundation in working with a fully typed
            language and the concepts of OOP. Many people will scoff at the idea
            of someone actually enjoying Java but I had and have no qualms with
            it!
          </p>
          <p>
            My first product was an on premise desktop app with an outdated
            external API. I saw this as an opportunity to learn JavaScript and
            TypeScript and dive into more of the web world with my project to
            build a REST API wrapper around the desktop API.
          </p>
          <a
            className="hover:text-gray-50 underline"
            href="https://github.com/BrennenRocks/fishbowl-js"
            target="_blank"
            rel="noreferrer"
          >
            Fishbowl-js
          </a>
          <p>
            Don&apos;t judge too harshly as I was but a wee Jr Dev. This is
            where I got my open-source chops and a taste for creating tools to
            help other developers. At Fishbowl we also wrote code as a&nbsp;
            <a
              className="hover:text-gray-50 underline"
              href="https://www.agilealliance.org/glossary/mob-programming/"
              target="_blank"
              rel="noreferrer"
            >
              mob
            </a>
            &nbsp;everyday. This solidified my knowledge of the strenghts of
            pair programming. I probably wouldn&apos;t do mobbing every day
            though...
          </p>
          <div className="relative">
            <div className="absolute top-[17px] -left-5 h-2 w-2 bg-violet-400 rotate-45"></div>
            <h3 className="text-xl py-2 text-gray-50">The Journey</h3>
          </div>
          <p>
            I love to learn about new technologies. I follow many Tech
            &quot;Influencers&quot; on YouTube and Twitter just to try to stay
            up to date. This led me to learning about Tailwind CSS v1 and Chakra
            UI. Comparing the two I found that Chakra UI was easier for me at
            the time and this is honestly where I learned most of my CSS
            knowledge. I loved how the CSS properties were props in the React
            Components.
          </p>
          <p className="text-sm pt-2 text-gray-50">Side Note</p>
          <div>
            <em className="text-sm">
              Adam, I did see your tweet about Robin&apos;s application and read
              through it. I must apologize to Robin that I enjoy Chakra UIs
              string-based API. Huge props to&nbsp;
              <a
                className="hover:text-gray-50 underline"
                href="https://github.com/segunadebayo"
                target="_blank"
                rel="noreferrer"
              >
                Segun Adebayo
              </a>
              &nbsp;and team for maintaining string-based APIs
            </em>
            &nbsp;😛
          </div>
          <p>
            I also learned about NextJS and the cool ways to generate static
            HTML pages with data from a database. At this same time Age of
            Empires 4 was coming out. As I was playing early releases of Age of
            Empires 4 I wanted to put my newfound Chakra UI and NextJS to the
            test.
          </p>
          <div>
            <a
              className="hover:text-gray-50 underline"
              href="https://taupe-gingersnap-1b60d9.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              AOE Build Orders
            </a>
            &nbsp;
            <a
              className="hover:text-gray-50 underline"
              href="https://github.com/Elevated-Software/aoe-build-order"
              target="_blank"
              rel="noreferrer"
            >
              (Link to Code)
            </a>
          </div>
          <div className="relative">
            <div className="absolute top-[17px] -left-5 h-2 w-2 bg-violet-400 rotate-45"></div>
            <h3 className="text-xl py-2 text-gray-50">
              Lease End <span className="text-sm">(my current 9-5)</span>
            </h3>
          </div>
          <p>
            The AOE Build Orders project actually was a big help to get a job at
            my current company,&nbsp;
            <a
              className="hover:text-gray-50 underline"
              href="https://www.leaseend.com/"
              target="_blank"
              rel="noreferrer"
            >
              Lease End
            </a>
            . While I&apos;ve been here I have been able to help other
            developers in many ways. I thoroughly enjoy writing TypeScript and
            one of my first refactors that I participated in was updating all of
            our models to actually be typed instead of using the dreaded&nbsp;
            <code className="bg-gray-700 font-mono">
              {"{"} [x: any]: any; {"}"}
            </code>
            &nbsp; to define all fields. I also like to write out my TypeSript
            learnings and hints on X. Here is one example:&nbsp;
            <a
              className="hover:text-gray-50 underline"
              href="https://twitter.com/Elevated_SW/status/1703997894674846153"
              target="_blank"
              rel="noreferrer"
            >
              Generic for Promise.allSettled
            </a>
            . It is a pretty simple use of a generic but it brings some type
            safety to a common Promise function. This does create more memory so
            maybe not the best practice when you are focusing purley on
            performance but I have found this little function to be very helpful
            in our projects with many fresh TypeScript devs.
          </p>
          <p>
            I also find a lot of use for generics in React when creating custom
            Form Components while using a form library. This example uses&nbsp;
            <a
              className="hover:text-gray-50 underline"
              href="https://react-hook-form.com/"
              target="_blank"
              rel="noreferrer"
            >
              react-hook-form
            </a>
            .
          </p>
          <pre className="bg-gray-700 text-white break-all rounded-lg p-4 my-2 whitespace-pre-wrap">
            <div>
              import {"{"} FieldValues, UseControllerProps, useController&nbsp;
              {"}"}
            </div>
            <div> from &apos;react-hook-form&apos;;</div>
            <br />
            <div>export type BaseOption = {"{"}</div>
            <div>&ensp;label: string;</div>
            <div>&ensp;value: string;</div>
            <div>{"}"};</div>
            <br />
            <div>type FormSelectProps{"<"}</div>
            <div>&ensp;FormData extends FieldValues,</div>
            <div>&ensp;Option extends BaseOption,</div>
            <div>
              {">"} = {"{"}
            </div>
            <div>
              &ensp;controllerProps: UseControllerProps{"<"}FormData{">"}
            </div>
            <div>&ensp;options: Option[]</div>
            <div>
              {"}"} &amp; BaseFormProps;{" "}
              <span className="text-gray-400">
                {"/"}
                {"/"} Whatever base props you have
              </span>
            </div>
            <br />
            <div>const FormSelect = {"<"}</div>
            <div>&ensp;FormData extends FieldValues,</div>
            <div>&ensp;Option extends BaseOption,</div>
            <div>
              {">"}({"{"}
            </div>
            <div>&ensp;controllerProps,</div>
            <div>&ensp;options,</div>
            <div>&ensp;...formControllerProps,</div>
            <div>
              {"}"}: FormSelectProps{"<"}FormData, Option{">"}) ={">"} {"{"}
            </div>
            <div>&ensp;const {"{"}</div>
            <div>
              &ensp;&ensp;fieldState: {"{"} error {"}"} =
            </div>
            <div>&ensp;useController(controllerProps);</div>
          </pre>
          <p>
            The controllerProps can then be fed to the&nbsp;
            <code className="bg-gray-700 font-mono">Controller</code>
            &nbsp;base component from react-hook-form and we&apos;ll have type
            safety to auto complete the fields of the form.
          </p>
          <p>
            Not only am I known at Lease End as the TypeScript guy but also the
            &quot;review my PR&quot; guy. Everyone knows if they see that I am
            reviewing their PR they&apos;re going to learn something. When I saw
            &quot;You hold people to a high standard, and inspire them to do
            their best work&quot; on the job description a light sparkled in my
            eyes. As much as I love to help others learn and grow, I love it
            even more when others help me to learn and grow as well.
          </p>
          <div className="relative">
            <div className="absolute top-[17px] -left-5 h-2 w-2 bg-violet-400 rotate-45"></div>
            <h3 className="text-xl py-2 text-gray-50">Rust</h3>
          </div>
          <p>
            In my quest to learn new things, everywhere I looked, Rust was
            staring back at me. I decided to pick it up and do a couple&nbsp;
            <a
              className="hover:text-gray-50 underline"
              href="https://frontendmasters.com/"
              target="_blank"
              rel="noreferrer"
            >
              Front End Masters
            </a>
            &nbsp;courses from none other than&nbsp;
            <a
              className="hover:text-gray-50 underline"
              href="https://twitter.com/ThePrimeagen"
              target="_blank"
              rel="noreferrer"
            >
              ThePrimeagen
            </a>
            &nbsp;(who also got me into VIM... but that&apos;s a story for
            another time) and wrote an internal CLI tool in Rust for us
            developers to speed up the some processes while developing locally.
          </p>
          <h4 className="text-lg py-2 text-gray-50">Current Project</h4>
          <p>
            As the AI hype train is still going strong I decided to hop aboard
            and learn what&nbsp;
            <a
              className="hover:text-gray-50 underline"
              href="https://ollama.com/"
              target="_blank"
              rel="noreferrer"
            >
              Ollama
            </a>
            &nbsp;is all about so I could test AI models locally. I&apos;ve been
            working on an AI Photo Renamer desktop app using&nbsp;
            <a
              className="hover:text-gray-50 underline"
              href="https://tauri.app/"
              target="_blank"
              rel="noreferrer"
            >
              Tauri
            </a>
            &nbsp;with React and&nbsp;
            <a
              className="hover:text-gray-50 underline"
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noreferrer"
            >
              shadcn UI
            </a>
            &nbsp;on the front end with, of course, a Rust backend to hook into
            Ollama. Check that out here!&nbsp;
            <a
              className="hover:text-gray-50 underline"
              href="https://twitter.com/Elevated_SW/status/1772501048067772778"
              target="_blank"
              rel="noreferrer"
            >
              AI Photo Rename
            </a>
            .
          </p>
          <div className="relative">
            <div className="absolute top-[17px] -left-5 h-2 w-2 bg-violet-400 rotate-45"></div>
            <h3 className="text-xl py-2 text-gray-50">The End</h3>
          </div>
          <p>
            Thank you for taking the time to read through all of this! I am
            based in the Mountain Time Zone but am willing to work odd hours to
            make it work. I now use Tailwind CSS for all of my personal projects
            and anything where I want to write CSS fast without thinking too
            hard about it.
          </p>
        </div>
      </div>
    </main>
  );
}
