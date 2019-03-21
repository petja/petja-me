import React from 'react'

import withStyles from 'react-jss'
import Anime from 'react-anime'

import Logo1 from '../img/logo1.svg'
import Logo2 from '../img/logo2.svg'
import Face from '../img/face.png'

class Logo extends React.Component {
  render = () => (
    <div className={this.props.classes.root}>
      <div>
        <Anime translateX={['-100%', '-3em']}>
          <img src={Logo1} alt="Petja" className={this.props.classes.part} />
        </Anime>
        <br />
        <Anime translateX={['100%', '3em']}>
          <img src={Logo2} alt="Touru" className={this.props.classes.part} />
        </Anime>
      </div>
    </div>
  )
}

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  foo: {
    backgroundImage: `url("${Face}")`,
    backgroundBlendMode: 'overlay',
    background: '#000040',
    display: 'inline-block',
    height: '20em',
    width: '20em',
    backgroundSize: 'contain',
    position: 'relative',
    zIndex: 1
  },
  part: {
    height: '5em',
    zIndex: 2,
    position: 'relative'
  }
}

export default withStyles(styles)(Logo)
