import React from 'react';

function PaletteFooter(props) {
  // Use 'props' instead of 'this.props' because this is a functional component, not state component
	const { paletteName, emoji } = props;
	return (
		<footer className='Palette-footer'>
			{paletteName}
			<span className='emoji'>{emoji}</span>
		</footer>
	);
}

export default PaletteFooter;