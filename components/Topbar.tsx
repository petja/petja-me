import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  heading: string;
  subtitle?: string;
  avatar?: boolean;
}

const links = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Tunnel flying",
    url: "/tunnel",
  },
];

export const Topbar = (props: Props) => {
  const router = useRouter();

  return (
    <div className="pb-10 lg:pb-20 max-w-3xl mx-auto">
      <div className="mb-10 lg:mb-20 mt-4 px-4">
        {/*<Link href="/">
        <a className="text-current font-bold">Petja Touru</a>
</Link>*/}
        {links.map((link) => (
          <Link href={link.url} key={link.text}>
            <a
              className={clsx(
                "text-slate-400 hover:bg-slate-800 px-4 py-2 rounded-lg",
                { "font-bold text-slate-200": router.pathname === link.url }
              )}
            >
              {link.text}
            </a>
          </Link>
        ))}
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:items-center px-8 text-white animate-fadeInDown">
        <div className="flex flex-col flex-1">
          <span className="text-4xl font-bold tracking-widest">
            {props.heading}
          </span>
          {props.subtitle && <span>{props.subtitle}</span>}
        </div>
        {props.avatar && (
          <div>
            <Image
              src="https://www.gravatar.com/avatar/3fe5cfc5d9eaeea3d15c8b5605c93514?s=200"
              height={100}
              width={100}
              alt="Picture of Petja"
              className="rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};
