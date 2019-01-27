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
    textAlign: 'center'
  }
}

export default withStyles(styles)(App)
