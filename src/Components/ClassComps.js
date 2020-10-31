import React, { Component } from 'react';

class ClassComps extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        console.log("This will fire First");
    }

    incrementFucn = () => {
      this.setState({ count: this.state.count + 1 });
    }
    decrementFucn = () => {
      this.setState({ count: this.state.count - 1 });
    }

    componentDidMount(){
       console.log("Inside Component Did Mount: This will fire Third");
    }

    componentDidUpdate(prevProps,prevState,snapshot){

        console.log("prevProps: ", prevProps, "prevState", prevState,"snapshot: ", snapshot);

        console.log("Will be called when component is updated (if Props or state changed)");
    }


    componentWillUnmount(){
        console.warn("Component Unmounted");
    }

    render() {
        console.log("This will fire Second");
        return (
            <div>
                <h1>Counter</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.incrementFucn}> Increment </button>
                <button onClick={this.decrementFucn}> Decrement </button>
            </div>
        )
    }
}

export default ClassComps;