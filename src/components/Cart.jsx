import React, { Component } from 'react'

export default class Cart extends Component {
    state = {
        order: this.props.stateOrder,
        name: "Banana"
    }

    handlePlus = () => {
        // alert('Button Plus')
        this.setState({
            order: this.state.order + 1
        }, () => this.handleChange(this.state.order))       
    }
    handleMinus = () => {
        if(this.state.order > 0)
        this.setState({
            order: this.state.order - 1
        }, () => this.handleChange(this.state.order))  
        // alert('Button Minus')

    }
    handleChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }
    render() {
        return (
            <div>
                {/* <div>Counter</div>
                <h1>Cart : {this.state.order}</h1>
                <hr></hr> */}
                <div>
                    <button onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}
