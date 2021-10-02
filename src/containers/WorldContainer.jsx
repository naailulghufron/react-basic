import React, { Component } from 'react'
import HelloComponent from '../components/HelloComponent'

export default class WorldContainer extends Component {
    render() {
        return (
            <div>
                <HelloComponent name="Hello 1"/>
                <HelloComponent name="Hello 2"/>
                <HelloComponent name="Hello 3"/>
                <HelloComponent name="Hello 4"/>
                <HelloComponent name="Hello 5"/>
                <HelloComponent name="Hello 6"/>
                <HelloComponent name="Hello 7"/>
                <HelloComponent name="Hello 8"/>
                <HelloComponent name="Hello 9"/>
                <HelloComponent/>
            </div>
        )
    }
}
