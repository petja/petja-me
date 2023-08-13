import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  heading: string
  subtitle?: string
  avatar?: boolean
}

const links = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Tunnel flying',
    url: '/tunnel',
  },
  {
    text: 'Contact',
    url: '/contact',
  },
]

export const Topbar = (props: Props) => {
  const router = useRouter()

  return (
    <div className="pb-10 lg:pb-20 max-w-3xl mx-auto">
      <div className="mb-10 lg:mb-20 mt-4 px-4">
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.text}
            className={clsx(
              'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 px-4 py-2 rounded-lg',
              {
                'font-bold text-slate-700 dark:text-white':
                  router.pathname === link.url,
              }
            )}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:items-center px-8 title animate-fadeInDown">
        <div className="flex flex-col flex-1">
          <span className="text-4xl font-bold tracking-widest">
            {props.heading}
          </span>
          {props.subtitle && (
            <span className="text-slate-900 dark:text-slate-400">
              {props.subtitle}
            </span>
          )}
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
  )
}
