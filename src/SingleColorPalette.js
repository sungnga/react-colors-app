import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		// Don't need to the shades in the state
		// Gather the shades in the constructor one time, and use it
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		// console.log(this._shades)
		this.state = { format: 'hex' };
		this.changeFormat = this.changeFormat.bind(this);
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
	changeFormat(val) {
		this.setState({ format: val });
	}
	render() {
		const { paletteName, emoji, id } = this.props.palette;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={color.name}
				name={color.name}
				background={color[this.state.format]}
				showingFullPalette={false}
			/>
		));
		return (
			<div className='SingleColorPalette Palette'>
				<Navbar handleChange={this.changeFormat} showingAllColors={false} />
				<div className='Palette-colors'>
					{colorBoxes}
					<div className='go-back ColorBox'>
						<Link to={`/palette/${id}`} className='back-button'>
							Go Back
						</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default SingleColorPalette;
