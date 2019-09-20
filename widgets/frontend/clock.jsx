import React from 'react';

class Clock extends React.Component {
  constructor(props){
    // debugger
    super(props);
    this.state = { 
      time : new Date() 
    }
    this.tick = this.tick.bind(this);
    this.intId = this.intId
  } 

  componentDidMount() {
     this.intId = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intId)
  }

render(){
  return (
    <>
      <h1> Clockity Click Clock </h1>
      <li><span>Time: </span> { this.state.time.toTimeString() } </li>
      <li><span>Date: </span> { this.state.time.toDateString() } </li>
    </>
  )
}

  tick(){
    this.setState({ time: new Date() })
  }

}

export default Clock;