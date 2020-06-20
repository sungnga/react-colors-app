import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorBoxStyles';

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
		const {
			background,
			name,
			moreUrl,
			showingFullPalette,
			classes
		} = this.props;
		const { copied } = this.state;
		// const isDarkColor = chroma(background).luminance() <= 0.08;
		// const isLightColor = chroma(background).luminance() >= 0.7;
		// If 'copied' state is set to true, add the 'show' className
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div style={{ background: background }} className={classes.ColorBox}>
					<div
						style={{ background: background }}
						className={`${classes.copyOverlay} ${
							copied && classes.showOverlay
						}`}
					/>
					<div
						className={`${classes.copyMessage} ${
							copied && classes.showMessage
						}`}
					>
						<h1>copied!</h1>
						<p className={classes.copyText}>{background}</p>
					</div>
					<div>
						<div className={classes.boxContent}>
							<span className={classes.colorName}>{name}</span>
						</div>
						<button className={classes.copyButton}>Copy</button>
					</div>
					{showingFullPalette && (
						<Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
							<span className={classes.seeMore}>MORE</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default withStyles(styles)(ColorBox);
