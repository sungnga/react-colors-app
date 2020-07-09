import sizes from './sizes';

export default {
	Navbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '8vh'
	},
	logo: {
		marginRight: '15px',
		padding: '0 15px',
		fontSize: '22px',
		backgroundColor: '#eceff1',
		fontFamily: 'Roboto',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		'& a': {
			textDecoration: 'none',
			color: 'black'
		},
		[sizes.down('xs')]: {
			display: 'none'
		}
	},
	slider: {
		width: '340px',
		margin: '0 15px',
		display: 'inline-block',
		'& .rc-slider-rail': {
			height: '8px'
		},
		'& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus': {
			backgroundColor: '#e56264',
			outline: 'none',
			border: '2px solid #e56264',
			boxShadow: 'none',
			width: '15px',
			height: '15px',
			marginLeft: '-7px',
			marginTop: '-4px'
		},
		'& .rc-slider-track': {
			backgroundColor: 'transparent'
		},
		[sizes.down('md')]: {
			width: '150px'
		}
	},
	selectContainer: {
		marginLeft: 'auto',
		marginRight: '15px'
	}
};
