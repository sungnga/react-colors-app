import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
		const { background, name } = this.props;
		const { copied } = this.state;
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
						<p>{background}</p>
					</div>
					<div className='copy-container'>
						<div className='box-content'>
							<span>{name}</span>
						</div>
						<button className='copy-button'>Copy</button>
					</div>
					<span className='see-more'>More</span>
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;