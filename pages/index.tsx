import Image from "next/image";
import Head from "next/head";

import { Topbar } from "../components/Topbar";
import { Container } from "../components/Container";
import Link from "next/link";

interface Tech {
  id: string;
  name: string;
}

const techs: Tech[] = [
  {
    id: "typescript",
    name: "TypeScript",
  },
  {
    id: "react",
    name: "React",
  },
  {
    id: "tailwind",
    name: "TailwindCSS",
  },
  {
    id: "graphql",
    name: "GraphQL",
  },
  {
    id: "next",
    name: "Next",
  },
  {
    id: "node",
    name: "Node",
  },
  {
    id: "prisma",
    name: "Prisma",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Petja Touru - Senior Software Engineer</title>
      </Head>
      <div className="space-y-4">
        <Topbar
          heading="Petja Touru"
          subtitle="Senior Software Engineer"
          avatar
        />
        <Container className="animate-fadeInUp">
          <main className="pb-10 lg:pb-20 space-y-20">
            <section className="space-y-4">
              <h1 className="font-bold text-lg text-white">Shortly about me</h1>
              <p>
                I&apos;m a software engineer from Helsinki, Finland, with 4+
                years of professional software development experience and 15+
                years as a hobby. My expertise is T-shaped, longest side
                describing my clout on the backend and two shorter sides
                frontend and DevOps. I have worked on several projects and
                clients including but not limited to &hellip;
              </p>
              <ul className="list-disc ml-8">
                <li>Helsinki Regional Transport (HSL)</li>
                <li>ÄrräTreeni Oy</li>
              </ul>
              <p>
                In my free time, I jump out of airplanes, fly in{" "}
                <Link href="/tunnel">a wind tunnel</Link>, play video games, and
                work on my personal software projects.
              </p>
            </section>

            <section className="space-y-4">
              <h1 className="font-bold text-lg text-white">
                Tech I like to work with
              </h1>
              <p>
                I always pick technologies case-by-case basis, but these are
                what I find most intriguing to use
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
                {techs.map((tech) => (
                  <li key={tech.id} className="gap-4 flex items-center">
                    <Image
                      aria-hidden
                      src={`/tech/${tech.id}.svg`}
                      alt={tech.name}
                      height={24}
                      width={24}
                    />
                    <span>{tech.name}</span>
                  </li>
                ))}
              </ul>
              <p>In fact, many of these technologies back this website too!</p>
            </section>

            <section className="space-y-4">
              <h1 className="font-bold text-lg text-white">Contact me</h1>
              <p>
                If you&apos;d like to have me on your development team, please{" "}
                <a
                  href="https://compile.fi/en/contact-us/"
                  rel="noreferrer nofollow"
                  target="_newtab"
                >
                  request a quote from Compile Oy
                </a>
                . They are providing consultants, including me, for client
                projects.
              </p>
              <p>
                In non-formal matters, you can contact me on social media. You
                can find me from <a href="https://t.me/petjato">Telegram</a>,{" "}
                <a href="https://twitter.com/petjato">Twitter</a> and{" "}
                <a href="https://instagram.com/petjato">Instagram</a> for
                example.
              </p>
              <p>I prefer to not use email for your first contact.</p>
            </section>
          </main>
        </Container>
      </div>
    </>
  );
}
