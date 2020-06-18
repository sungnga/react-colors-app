import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		// Don't need to the shades in the state
		// Gather the shades in the constructor one time, and use it
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		// console.log(this._shades)
	}
	gatherShades(palette, colorToFilterBy) {
		let shades = [];
		let allColors = palette.colors;
		for (let key in allColors) {
			shades = shades.concat(
				allColors[key].filter((color) => color.id === colorToFilterBy)
			);
		}
		// Return all shades of a given color
		// The shade at index 0 is white. With slice(1), it will return from 1 onward
		return shades.slice(1);
	}
	render() {
		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={color.id}
				name={color.name}
				background={color.hex}
				showLink={false}
			/>
		));
		return (
			<div className='Palette'>
				<h1>Single Color Palette</h1>
				<div className='Palette-colors'>{colorBoxes}</div>
			</div>
		);
	}
}

export default SingleColorPalette;
