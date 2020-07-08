const styles = {
	root: {
		width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-3.5px',
		'&:hover svg': {
			color: 'white',
			transform: 'scale(1.5)'
		}
	},
	boxContent: {
		width: '100%',
		position: 'absolute',
		border: 'none',
		left: '0',
		bottom: '0',
		padding: '10px',
		fontSize: '12px',
		color: 'rgba(0,0,0,.5)',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		display: 'flex',
		justifyContent: 'space-between'
	},
	deleteIcon: {
		transition: 'all .2s ease-in-out'
	}
};

export default styles;