import React, { Component } from 'react'

export class Lificycle extends Component {
    constructor() {
        super();
        this.state = { counter:null, color:null}
    }
    componentDidMount() {
        this.setState({counter:0,color:"red"})
    }
    clicked = () => {
        this.setState({ counter: this.state.counter + 1 ,color:'green'})
    }
    
    render() {
        return (
            <div>
                <p>{`this is a clss component , now value of counter ${this.state.color}\n after buttun click`}</p>
                <button onClick={this.clicked}>Add</button>

                {this.state.counter}
            </div>
        )
    }
}

export default Lificycle