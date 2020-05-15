import React, { Component } from 'react'

export class Show extends Component {

  state = {
      user: "null"
  }

  componentDidMount = () => {
    this.getInfo()
  }

  getInfo = () => {
    fetch('http://localhost:3000/users')
      .then(resp => resp.json())
      .then(user => {
        this.setState({
            user
        })
      })
  }

  render() {
    return (
      <div>
       {this.state.user.name }
      </div>
    )
  }
}

export default Show
