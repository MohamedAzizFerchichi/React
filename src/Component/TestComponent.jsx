import React, { Component } from 'react';

class TestComponent extends Component {
    constructor() {
        super();
        this.state = { 
            counter: 0
         };
         console.log("Constructor");
    }
    componentDidMount(){
        console.log("Mounted");
    }

 counter(){
        this.setState((prevState)=>({...prevState,
            counter: prevState.counter + 1}));
 }

    render() {
        console.log("Rendered");
        return (
            <div>
              <h1>{this.state.counter}</h1>
              <button onClick = {()=>this.counter()}>
            +</button>  
            </div>
        );
    }
}

export default TestComponent;