import React, { Component } from 'react';
import ColorBox from './ColorBox';

// NOTE: ORDER OF IMPORT IS IMPORTANT!
// To override the default styles, import your style file after the vendor style file
import 'rc-slider/assets/index.css';
import './Palette.css';
import Slider from 'rc-slider';

export default class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500 };
		this.changeLevel = this.changeLevel.bind(this);
	}
	changeLevel(newLevel) {
		// console.log(newLevel)
		this.setState({ level: newLevel });
	}
	render() {
		const { colors } = this.props.palette;
		const { level } = this.state;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox key={color.hex} background={color.hex} name={color.name} />
		));
		return (
			<div className='Palette'>
				<div className='slider'>
					<Slider
						defaultValue={level}
						min={100}
						max={900}
						step={100}
						onAfterChange={this.changeLevel}
					/>
				</div>
				{/* Navbar goes here */}
				<div className='Palette-colors'>{colorBoxes}</div>
				{/* footer */}
			</div>
		);
	}
}
