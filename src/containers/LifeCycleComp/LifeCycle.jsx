import React, { Component } from 'react'

export default class LifeCycle extends Component {
    // Constructor  -> Cannot rename function
    constructor (props){
        super(props)
        this.state = {
            count : 1,
        }
        console.log('constructor')
    }

    // getDerivedStateFromProps -> Cannot rename function
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null
    }

    // componentDidMount -> Cannot rename function
    componentDidMount(){
        console.log('componentDidMount')
        // setTimeout(() => {
        //     this.setState({
        //         count : 2
        //     })
        // }, 5000)
    }
    
    // shouldComponentUpdate -> Cannot rename function
    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate')
        console.log('nextProps', nextProps)
        console.log('nextState', nextState)
        console.log('state', this.state)
        console.groupEnd()

        if(nextState.count >= 4){
            return false
        }
        return true
    }

    // getSnapshotBeforeUpdate -> Cannot rename function
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null
    }

    // componentDidUpdate -> Cannot rename function
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
    }

    // componentWillUnmount -> Cannot rename function
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    

    render() {
        console.log('render')
        return (
            <div>
                <button onClick={this.changeCount}>Button : {this.state.count}</button>
            </div>
        )
    }
}
