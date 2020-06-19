import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js'
import './ColorBox.css';

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = { copied: false };
		this.changeCopyState = this.changeCopyState.bind(this);
	}
	// On onCopy event, set 'copied' state to be true and run a callback function
	// The setTimeout() says set 'copied' state back to false after 1.5 secs
	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500);
		});
	}
	render() {
		const { background, name, moreUrl, showLink } = this.props;
		const { copied } = this.state;
		const isDarkColor = chroma(background).luminance() <= .08
		const isLightColor = chroma(background).luminance() >= .7
		// If 'copied' state is set to true, add the 'show' className
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div style={{ background: background }} className='ColorBox'>
					<div
						style={{ background: background }}
						className={`copy-overlay ${copied && 'show'}`}
					/>
					<div className={`copy-msg ${copied && 'show'}`}>
						<h1>copied!</h1>
						<p className={isLightColor && 'dark-text'}>{background}</p>
					</div>
					<div className='copy-container'>
						<div className='box-content'>
							<span className={isDarkColor && 'light-text'}>{name}</span>
						</div>
						<button className={`copy-button ${isLightColor && 'dark-text'}`}>Copy</button>
					</div>
					{showLink && (
						<Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
							<span className={`see-more ${isLightColor && 'dark-text'}`}>More</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
