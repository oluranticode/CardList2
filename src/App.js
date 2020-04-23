import React from 'react';
import App1 from './App1'

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      Tope: 'Aluko Temitope' 
    };
  }

getClick = () => {
  this.setState({Tope: 'Damilotun Oluranti'})
}

  render(){
    return(
<div>
<h1 className="name">my name is {this.state.Tope}</h1>
<button onClick={this.getClick}> click</button>
      <div className="App">
      <App1 />
      </div>
</div>
   
 );
    
  }
}


export default App;
