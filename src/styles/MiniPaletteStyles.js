export default {
	root: {
		backgroundColor: 'white',
		border: '1px solid black',
		borderRadius: '5px',
		padding: '.5rem',
		position: 'relative',
		overflow: 'hidden',
		cursor: 'pointer',
		'&:hover svg': {
			opacity: 1
		}
	},
	colors: {
		backgroundColor: '#dae1e4',
		height: '150px',
		width: '100%',
		borderRadius: '3px',
		overflow: 'hidden'
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0',
		color: 'black',
		paddingTop: '.5rem',
		fontSize: '1rem',
		position: 'relative'
	},
	emoji: {
		marginLeft: '.5rem',
		fontSize: '1.5rem'
	},
	miniColor: {
		height: '25%',
		width: '20%',
		display: 'inline-block',
		margin: '0 auto',
		position: 'relative',
		marginBottom: '-3.5px'
	},
	deleteIcon: {
		color: 'white',
		backgroundColor: '#eb3d30',
		width: '25px',
		height: '25px',
		padding: '3px',
		position: 'absolute',
		right: '0',
		top: '0',
		opacity: 0,
		zIndex: 10,
		transition: 'all .25s ease-in-out'
	}
};
