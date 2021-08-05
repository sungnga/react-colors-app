import sizes from './sizes';
import bg from './bg.svg';

export default {
	'@global': {
		'.fade-exit': {
			opacity: 1
		},
		'.fade-exit-active': {
			opacity: 0,
			transition: 'opacity .5s ease-out'
		}
	},
	root: {
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		/* background by SVGBackgrounds.com */
		// backgroundColor: '#dfede5',
		backgroundColor: 'rgba(14, 22, 34, 0.02)',
		// backgroundImage: `url(${bg})`,
		overflow: 'scroll',
		paddingBottom: '1rem'
	},
	heading: {
		fontSize: '2rem',
		margin: '1rem 0',
		color: '#444444'
	},
	container: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		[sizes.down('xl')]: {
			width: '80%'
		},
		[sizes.down('xs')]: {
			width: '75%'
		}
	},
	nav: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		fontWeight: 700,
		color: '#444444',
		'& a, visited': {
			textDecoration: 'none',
			color: '#444444'
		}
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '2.5rem',
		[sizes.down('md')]: {
			gridTemplateColumns: 'repeat(2, 50%)'
		},
		[sizes.down('xs')]: {
			gridTemplateColumns: 'repeat(1, 100%)',
			gridGap: '1.4rem'
		}
	}
};
