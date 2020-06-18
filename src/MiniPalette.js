import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal'
  },
  secondary: {
    backgroundColor: 'tomatoe',
    '& h1': {
      color: 'green',
      '& span': {
        backgroundColor: 'pink'
      }
    }
  }
}

function MiniPalette(props) {
  const { classes } = props
  console.log(classes)
	return (
		<div className={classes.main}>
      <h1>Mini Palette</h1>
      <section className={classes.secondary}>
        <h1>Mini mini palette <span>inner span</span></h1>
        <span>outer span</span>
      </section>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
