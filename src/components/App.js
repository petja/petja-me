import React from 'react'

import withStyles from 'react-jss'

import Logo from './Logo'

class App extends React.PureComponent {
  render = () => (
    <div className={this.props.classes.root}>
      <Logo />
    </div>
  )
}

const styles = {
  root: {
    textAlign: 'center',
    overflow: 'hidden',
    height: '100%'
  }
}

export default withStyles(styles)(App)
