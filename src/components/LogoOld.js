import React from 'react'

import withStyles from 'react-jss'
import Anime from 'react-anime'

class Logo extends React.Component {
  state = {
    stars: {
      '0': { left: 0, top: 0 },
      '1': { left: 10, top: 0 },
      '2': { left: 0, top: 0 },
      '3': { left: 0, top: 0 },
      '4': { left: 0, top: 0 }
    }
  }

  render = () => (
    <React.Fragment>
      <Anime scale={[0, 1]} delay={500}>
        <img
          src="https://petja.me/img/petjalogo.svg"
          alt="Logo"
          className={this.props.classes.root}
        />
      </Anime>
      {new Array(5).fill('').map(this.renderBlink)}
    </React.Fragment>
  )

  renderBlink = (_, i) => (
    <Anime
      key={i}
      scale={[0, 1]}
      //direction="alternate"
      //loop
      complete={() => {
        console.log('eh', i)
        /*this.setState(
          {
            ...this.state,
            stars: {
              ...this.state.stars,
              [i]: { left: 100, top: 100 }
            }
          },
          console.log
        )*/
        console.log(this.setState)
      }}
      duration={100}
    >
      <img
        src="https://petja.me/img/star.svg"
        className={this.props.classes.star}
        style={
          {
            //left: (this.state.stars[i] || [0, 0])[0],
            //...(this.state.stars[i] || { left: 0, top: 0 })
          }
        }
      />
    </Anime>
  )
}

const styles = {
  root: {
    width: '100%',
    maxWidth: '40em',
    margin: '0 auto'
  },
  star: {
    position: 'absolute'
  }
}

export default withStyles(styles)(Logo)
