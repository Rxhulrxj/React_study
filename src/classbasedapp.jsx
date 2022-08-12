import { Component } from "react";
// import './App.css'

class App1 extends Component {
    constructor(){
      super();
      this.name = "ReactJs";
    }
    render() {
        return (    
           <div className="App">
             <h1>Welcome to {this.name}</h1>
             <h1>{this.props.text}</h1>
           </div>
     
        );
      }
    }
        
    export default App1;