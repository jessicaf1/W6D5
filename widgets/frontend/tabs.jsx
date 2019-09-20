import React from 'react';


class Tabs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      index: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }  


  handleClick(index){
    debugger
    console.log(this.state.index)
    debugger
    this.setState({index: 5}) 
    debugger
    console.log(this.state.index)
  }

  render(){

    // const titles = this.props["arr"]
    // titles.map(el => {
    //   return <h1> {el.title} </h1>
    // })
    const arr = [];
    this.props["arr"].forEach(el => {
      arr.push(<h1 onClick={this.handleClick}>{el.title}</h1>)
    })

    const arr2 = [];
    this.props["arr"].forEach(el => {
      arr.push(<article>{el.content}</article>)
    })

    return (
    <>
    <ul> {arr} </ul>
    <ul>{arr2}</ul>
    </>
    )
  }




}


export default Tabs 