import React from 'react'

import withStyles from 'react-jss'
import Anime from 'react-anime'

class Logo extends React.PureComponent {
  render = () => (
    <Anime scale={[0, 1]} delay={500}>
      <img
        src="https://petja.me/img/petjalogo.svg"
        alt="Logo"
        className={this.props.classes.root}
      />
    </Anime>
  )
}

const styles = {
  root: {
    width: '100%',
    maxWidth: '40em',
    margin: '0 auto'
  }
}

export default withStyles(styles)(Logo)
