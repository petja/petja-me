import clsx from 'clsx'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const itcGaramondStdLightNarrow = localFont({
  src: '../fonts/ITCGaramondStd-LtNarrow.otf',
  variable: '--font-itc',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={clsx(
        inter.variable,
        itcGaramondStdLightNarrow.variable,
        'font-sans'
      )}
    >
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
