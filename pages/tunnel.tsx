import { Topbar } from "../components/Topbar";
import { Container } from "../components/Container";
import Head from "next/head";
import Image from "next/image";

const skills = [
  {
    name: "Belly flying",
  },
  {
    name: "Back flying",
  },
  {
    name: "Belly carving",
  },
  {
    name: "Barrel rolls",
  },
  {
    name: "Knee flying",
  },
  {
    name: "Sit flying",
  },
  {
    name: "Belly-back-belly transitions",
  },
  {
    name: "The very basics of head down",
  },
];

const skillsUpcoming = [
  {
    name: "Back carving",
  },
  {
    name: "Vertical big-way",
  },
  {
    name: "Dynamic flying",
  },
];

/*
        <p>
          <strong>Tunnel flying</strong> (a.k.a. <em>indoor skydiving</em>) is a
          hobby in vertical wind tunnel where you &hellip;
          <ul className="list-disc ml-8">
            <li>Exercise to fly with your body in certain positions</li>
            <li>
              Exercise to transition from one position to another, smoothly
            </li>
            <li>
              Exercise to do the aforementioned with other flyers together
            </li>
            <li>Have a lot of fun!</li>
          </ul>
        </p>
*/

const hours = 15;
const costPerHour = 590;

export default function Tunnel() {
  return (
    <>
      <Head>
        <title>Tunnel Flying - Petja Touru</title>
      </Head>
      <Topbar
        heading="Tunnel flying"
        subtitle="Last updated on July 7th, 2022"
      />
      <Container className="space-y-8 pb-20 animate-fadeInUp">
        <h1 className="font-bold text-lg text-white">Stats</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-slate-300">
          <div>
            Currently I have had around{" "}
            <span className="text-xl font-bold block text-white">
              {hours} hours
            </span>{" "}
            of time in a tunnel
          </div>

          <div>
            This have cost me around{" "}
            <span className="text-xl font-bold block text-white">
              {((hours * costPerHour) / 1_000).toFixed(1)} k€
            </span>
            at the approx. cost of {costPerHour} € an hour, incl. coaching
          </div>
        </div>

        <h1 className="font-bold text-lg text-white">Learned so far</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {skills.map((skill) => (
            <li key={skill.name}>✅ {skill.name}</li>
          ))}
        </ul>

        <h1 className="font-bold text-lg text-white">Coming up</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {skillsUpcoming.map((skill) => (
            <li key={skill.name}>🟡 {skill.name}</li>
          ))}
          <li className="text-slate-500 italic">This ain&apos;t the end :)</li>
        </ul>

        <div className="flex gap-4 border-y border-y-slate-700 py-4">
          <Image
            src="/social/instagram.svg"
            height="24"
            width="24"
            alt="Instagram logo"
          />
          <div>
            Follow my learning path on my{" "}
            <a href="https://instagram.com/petjato" target="_newtab">
              Instagram
            </a>{" "}
            stories
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <div>
              But what is <em>tunnel flying</em>?
            </div>
            <a
              href="https://en.wikipedia.org/wiki/Vertical_wind_tunnel#Recreational_vertical_wind_tunnels"
              target="_newtab"
            >
              Head to Wikipedia &rarr;
            </a>
          </div>

          <div className="flex flex-col">
            <div>Want to start a new hobby right in Helsinki downtown?</div>
            <a href="https://shop.xn--fni-snaa.fi/catalog_5" target="_newtab">
              Fly in Fööni &rarr;
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
