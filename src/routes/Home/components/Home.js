import React, { Component } from 'react'

import s from '../assets/Home.scss'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      homes: []
    }
  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  render () {
    return (
      <div className={s.homeContain}>

      </div>
    )
  }
}

export default Home
