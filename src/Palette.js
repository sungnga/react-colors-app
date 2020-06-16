import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'

export default class Palette extends Component {
    render() {
        // console.log(this.props.colors)
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox key={color.color} background={color.color} name={color.name}/>
        ))
        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <div className="Palette-colors">{colorBoxes}</div>
                {/* footer */}
            </div>
        )
    }
}
