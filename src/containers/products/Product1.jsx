import React, { Component } from 'react'
import Cart from '../../components/Cart'
// import Cart from '../../components/Cart'

export default class Product1 extends Component {
    state = {
        order: 5,
        name: "Banana"
    }

    // handlePlus = () => {
    //     // alert('Button Plus')
    //     this.setState({
    //         order: this.state.order + 1
    //     })       
    // }
    // handleMinus = () => {
    //     if(this.state.order > 0)
    //     this.setState({
    //         order: this.state.order - 1
    //     })        // alert('Button Minus')

    // }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }
    render() {
        return (
            <div>
                <div>Counter</div>
                <h1>Cart : {this.state.order}</h1>
                <hr></hr>
                {/* <div>
                    <button onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button onClick={this.handlePlus}>+</button>
                </div> */}
                <Cart onCounterChange={(value) => this.handleCounterChange(value)} />
            </div>
        )
    }
}
