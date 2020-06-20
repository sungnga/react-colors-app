import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PaletteFooterStyles';

function PaletteFooter(props) {
	// Use 'props' instead of 'this.props' because this is a functional component, not state component
	const { paletteName, emoji, classes } = props;
	return (
		<footer className={classes.PaletteFooter}>
			{paletteName}
			<span className={classes.emoji}>{emoji}</span>
		</footer>
	);
}

export default withStyles(styles)(PaletteFooter);
