import React from 'react';
import Clock from './clock.jsx'
import Tabs from './tabs.jsx'

class App extends React.Component{
  constructor(props){
  super(props)
  }

  render(){
    const arr = [{ title: 'Onesie', content: 'A Chef’s Hat Has Exactly 100 Pleats.' }, 
      { title: 'Twosie', content: 'Too Much Water Can Kill You.' }, 
      { title: 'Threesie', content: 'Some Cats Are Actually Allergic to Humans.' }];
    return( 
    <>
      <Clock/>
      <Tabs arr={arr} />
    </>
    ) 
  }

}

export default App 