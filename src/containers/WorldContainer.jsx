import React, { Component } from 'react'
import LifeCycle from './LifeCycleComp/LifeCycle'
// import Product1 from './products/Product1'
// import HelloComponent from '../components/HelloComponent'

export default class WorldContainer extends Component {
    state = {
        showComponent : true
    }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             showComponent: false
    //         })
    //     }, 15000);
    // }
    render() {
        return (
            <div>
                {/* <HelloComponent name="Hello 1"/>
                <HelloComponent name="Hello 2"/>
                <HelloComponent name="Hello 3"/>
                <HelloComponent name="Hello 4"/>
                <HelloComponent name="Hello 5"/>
                <HelloComponent name="Hello 6"/>
                <HelloComponent name="Hello 7"/>
                <HelloComponent name="Hello 8"/>
                <HelloComponent name="Hello 9"/>
                <HelloComponent/> */}
                {/* <Product1 /> */}
                <hr></hr>
                {
                    this.state.showComponent ? <LifeCycle /> : null
                }
                
            </div>
        )
    }
}
