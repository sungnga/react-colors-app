import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';
import PaletteFooter from './PaletteFooter';

export default class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, format: 'hex' };
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}
	changeLevel(newLevel) {
		// console.log(newLevel)
		this.setState({ level: newLevel });
	}
	// The value of 'val' comes from the handleChange function in Navbar component
	// Update the format state
	changeFormat(val) {
		this.setState({ format: val });
	}
	render() {
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox
				key={color.id}
				background={color[format]}
				name={color.name}
				moreUrl={`/palette/${id}/${color.id}`}
				showingFullPalette={true}
			/>
		));
		return (
			<div className='Palette'>
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
					showingAllColors={true}
				/>
				<div className='Palette-colors'>{colorBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}
