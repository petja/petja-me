import React from 'react'
import styled, { keyframes } from 'styled-components'

import Code from './Code'

import Logo1Src from '../images/name1.svg'
import Logo2Src from '../images/name2.svg'

const Base = styled.img`
  height: 5em;
  max-width: 50vw;
  display: block;
  height: 5em;
  width: 20em;
`

const slide = keyframes`
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(-3em);
  }
`

const slide2 = keyframes`
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(3em);
  }
`

const subheaderAnimation = keyframes`
  0% {
    transform: translateY(3em);
    opacity: 0;
  }

  100% {
    transform: translateY(0em);
    opacity: 1;
  }
`

const logoScaleKeyframes = keyframes`
0%{
  transform:scale(1);
}
50%{
  transform:scale(1.2);
}
100%{
  transform:scale(0);
}
`

const Logo1 = styled(Base)`
  transform: translateX(-3em);
  animation: 0.5s ${slide};
`

const Logo2 = styled(Base)`
  transform: translateX(3em);
  animation: 0.5s ${slide2};
`

const Container = styled.div`
  animation: 0.5s ${logoScaleKeyframes};
  animation-delay: 1s;
  animation-fill-mode: forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  overflow: hidden;
`

const Biography = styled.div`
  opacity: 0;
  animation: 0.5s ${subheaderAnimation};
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  width: 100%;
  max-width: 800px;
  padding: 4em;
  box-sizing: border-box;
  margin: 0 auto;
`

const Link = styled.a`
  color: inherit;
`

const spinnerKeyframes = keyframes`
0%{
  transform:rotate(0deg);
}
100%{
  transform:rotate(360deg);
}`

const Spinner = styled.span`
  animation: 0.5s ${spinnerKeyframes} infinite linear;
`

const Avatar = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-right: 1em;
`

const SocialMediaLinks = styled.div`
  & ${Link} {
    margin: 1em 0.5em;
    &:first-child {
      margin-left: 0;
    }
  }
`

const Splitted = styled.div`
  display: flex;
`

export default class Logo extends React.PureComponent {
  state = {
    blobs: null,
    gone: false,
    now: null,
  }

  componentDidMount = async () => {
    this.setState({
      blobs: {
        logo1: await this.imageToBlobUrl(Logo1Src),
        logo2: await this.imageToBlobUrl(Logo2Src),
        avatar: await this.imageToBlobUrl(
          'https://gravatar.com/avatar/3fe5cfc5d9eaeea3d15c8b5605c93514?s=160'
        ),
      },
    })

    setTimeout(() => {
      this.runLightning()
    }, 250)

    setTimeout(() => {
      this.setState({
        gone: true,
      })
    }, 1500)

    setInterval(() => {
      this.setState({
        now: Date.now(),
      })
    }, 1000)
  }

  private runLightning = () => {
    document.body.animate &&
      document.body.animate(
        [
          { backgroundColor: 'hsl(239, 65%, 66%)', offset: 0.0 },
          { backgroundColor: 'hsl(239, 65%, 16%)', offset: 0.5 },
          { backgroundColor: 'hsl(239, 65%, 66%)', offset: 0.51 },
          { backgroundColor: 'hsl(239, 65%, 16%)', offset: 1.0 },
        ],
        250
      )

    // setTimeout(() => this.runLightning(), Math.random() * 30000)
  }

  private prettierConfig = {
    arrowParens: 'avoid',
    printWidth: 100,
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'es5',
  }

  render = () => {
    if (this.state.gone) {
      const formatter = new Intl.DateTimeFormat([], {
        timeZone: 'Europe/Helsinki',
        hour: 'numeric',
        minute: 'numeric',
      })

      const timeInFinland = formatter.format(new Date())

      const utcHours = new Date().getUTCHours()

      const date = new Date()
      const age = date.getFullYear() - 1997 + (date.getMonth() * 30 + date.getDate() < 23 ? -1 : 0)

      return (
        <Biography>
          <Splitted>
            <Avatar src={this.state.blobs.avatar} alt="Picture of me" />
            <p>
              <strong>Hey! My name is Petja 👋</strong>
              <br />I am {age} years old software developer based in{' '}
              <Link href="https://maps.google.com/?q=Espoo, Finland">Espoo, Finland</Link> 🇫🇮
            </p>
          </Splitted>
          <p>
            Currently I'm Full Stack Software Developer at{' '}
            <Link href="https://www.poplatek.fi/">Poplatek&nbsp;Oy</Link> (acquired by
            Nets&nbsp;A/S). I have previous experience from another software company but have also
            freelanced several projects. I studied Bachelor of Information Technology at HAMK
            University of Applied Sciences and graduated at December 2019.
          </p>
          <p>
            On my free time I'm also gathering new skills and working on my personal projects
            &mdash; some of them being open source. I'm also public transport aficionado and
            interested in timetables, routes, ticketing systems, vehicles, infrastructure and
            history of all these. When I'm not experimenting with code or railfanning, you can find
            me walking around town, enjoying museums and culture or maybe telling jokes.
          </p>

          <h2>Uses</h2>
          <h3>Development</h3>
          <p>
            👨‍💻 My preferred technologies are TypeScript, React, Node, Docker, PostgreSQL, GraphQL
            and AWS. I also have experience from dozen other technologies out there. For example
            this site is deployed with Netlify.
          </p>
          <p>
            My preferred coding style expressed as <code>.prettierrc</code> is:
          </p>
          <Code>{JSON.stringify(this.prettierConfig, null, 2)}</Code>

          <h3>Software</h3>
          <p>
            ⌨️ For coding I mostly use Visual Studio Code with{' '}
            <Link href="https://marketplace.visualstudio.com/items?itemName=Nimda.deepdark-material">
              Deepdark Material Theme
            </Link>{' '}
            and several other extensions. I don't fear using Vim either <kbd>:wq</kbd>
          </p>
          <p>
            🦊 Firefox is my browser of choice. With it I'm using several great extensions such as{' '}
            <Link href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin">
              uBlock Origin
            </Link>
            ,{' '}
            <Link href="https://addons.mozilla.org/en-US/firefox/addon/sponsorblock">
              SponsorBlock
            </Link>
            ,{' '}
            <Link href="https://addons.mozilla.org/en-US/firefox/addon/i-dont-care-about-cookies">
              I don't care about cookies
            </Link>
            ,{' '}
            <Link href="https://addons.mozilla.org/en-US/firefox/addon/simple-translate">
              Simple Translate
            </Link>
            , <Link href="https://addons.mozilla.org/en-US/firefox/addon/json-lite">JSON Lite</Link>{' '}
            and{' '}
            <Link href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools">
              React Developer Tools
            </Link>
            .
          </p>
          <p>
            🔑 For passwords and secrets I'm using{' '}
            <Link href="https://1password.eu">1Password</Link> 💰
          </p>
          <p>
            ✉️ My primary communication channel is Telegram. If you want to catch me up, have a look
            at the bottom of the page.
          </p>

          <h3>Hardware</h3>
          <p>
            I use 🍎 Macbook Pro 16" (Late 2019) as my main computer. Custom-built 🎮 gaming PC with
            GeForce RTX 2080 Ti, 16 gigs of RAM and Intel i5-9600K 3.7 GHz fulfills my gaming needs.
            With Alienware AW3418DW display I can enjoy games in 120 FPS and ultra-wide 🖥
          </p>
          <p>📱 I have iPhone XS Max 256 Gb</p>

          <h2>Contact</h2>
          <p>Feel free to contact me &mdash; whether just to say hi or to ask me for a pint 🍻</p>
          <SocialMediaLinks>
            <Link href="https://twitter.com/petjato">Twitter</Link>
            <Link href="https://github.com/petja">Github</Link>
            <Link href="https://www.linkedin.com/in/tourupetja/">LinkedIn</Link>
            <Link href="https://dev.to/petja">Dev</Link>
            <Link href="https://t.me/petjato">Telegram</Link>
            <Link href="mailto:hello@petja.me">Email</Link>
            <Link href="https://keys.openpgp.org/search?q=hello%40petja.me">PGP</Link>
          </SocialMediaLinks>
          {utcHours < 5 || utcHours >= 19 ? (
            <p>😴 It's {timeInFinland} here in Finland but I try my best to reply ASAP</p>
          ) : null}
        </Biography>
      )
    }

    if (this.state.blobs) {
      return (
        <Container>
          <div>
            <Logo1 src={this.state.blobs.logo1} />
            <Logo2 src={this.state.blobs.logo2} />
          </div>
        </Container>
      )
    }

    return <Spinner>⏳</Spinner>
  }

  private imageToBlobUrl = (src: string) =>
    fetch(src)
      .then(resp => resp.blob())
      .then(URL.createObjectURL)
}
