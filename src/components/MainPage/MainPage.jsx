import React from 'react'
require('./index.scss')

class MainPage extends React.Component {
  componentDidMount () {

  }
  render () {
    return (
      <div className='mainPage m-auto'>
        <h1 id='welcome-phrase'>welcome to pokedex!</h1>
      </div>
    )
  }
}

export default MainPage
