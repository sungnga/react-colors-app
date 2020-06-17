import React, { Component } from 'react';
import Slider from 'rc-slider';

// NOTE: ORDER OF IMPORT IS IMPORTANT!
// To override the default styles, import your style file after the vendor style file
import 'rc-slider/assets/index.css';
import './Navbar.css'

class Navbar extends Component {
	render() {
		const { level, changeLevel } = this.props;
		return (
			<header className='Navbar'>
				<div className='logo'>
					<a href='#'>reactcolorpicker</a>
				</div>
				<div className='slider-container'>
					<span>Level: {level}</span>
					<div className='slider'>
						<Slider
							defaultValue={this.props.level}
							min={100}
							max={900}
							step={100}
							onAfterChange={changeLevel}
						/>
					</div>
				</div>
			</header>
		);
	}
}

export default Navbar;
