## STEPS TO BUILDING THE COLOR PALETTE APP
---------------

- Install create-react-app: `npx create-react-app react-colors-app`
- In the App.js file:
  - Render the Palette component
  - Pass props to Palette comp: `palette={generatePalette(seedColors[4])}`
  - `<Palette palette={generatePalette(seedColors[4])} />`
  - Import the seedColors.js file. This is the starter color palettes
- Create a Palette.js component
  - Being rendered in App.js
  - Props received: `this.props.palette`
  - map over the seedColor palette colors and for each color, extract the color and color name and pass it to ColorBox component as props
  - Render the ColorBox component after mapping over each color
  ```javascript
	const { colors } = this.props.palette;
	const colorBoxes = colors[level].map((color) => (
		<ColorBox key={color.hex} background={color.hex} name={color.name} />
	));
  ```
  - Props passed to ColorBox component: background, name
  - Create state to keep track of the currently selected level
  - Create changeLevel function to update state with the newLevel received from Navbar component(child). Pass this as props down to Navbar component
  - Render the Navbar component. Props passed to Navbar component: level, changeLevel
  - `<Navbar level={level} changeLevel={this.changeLevel} />`
- Create the ColorBox.js component
  - Being rendered in Palette.js
  - Props received: `this.props.background` & `this.props.name`
  - Render the background color and name of color
  - Add style
- Add copy color to clipboard functionality. Do this in ColorBox component
  - Use copy-to-clipboard library
  - Animate the copy color overlay
  - Style the overlay
- Create color helper function to generate a range of shades of a color
  - colorHelpers.js
  - Use it in App.js
- Add color slider (at first in Palette comp, then move it to Navbar comp)
  - Use rc-slider library
  - Style the slider. And override default styles
- Create Navbar.js component
  - Being rendered in Palette.js
  - Props received: `const { level, changeLevel } = this.props;`
  - Render the logo, level text, and slider
  - Add style
- Create the select format dropdown menu. Do this in Navbar component
  - Using Material-UI library: Select and MenuItem components
  - Create a controlled component of the Navbar to keep track of the changes of the format
    - When a new format is selected in the Select component in Navbar, the format state in Navbar will be synced with the new format
    - In the parent component(Palette) is also keeping track of the format state
    - When there's a new format, this format will also get passed to the parent component(Navbar to Palette): `this.props.handleChange(e.target.value);`
    - Set the value attribute of the Select comp to be the current state format
    - `<Select value={this.state.format} onChange={this.handleChange}>`
  - Now when a new format is selected(hex, rgb, or rgba), all the color boxes rendered in Palette component will be updated with that format
- Create Snackbar letting user know what they've changed format. Do this in Navbar component
  - Use Material UI Snackbar, IconButton, and CloseIcon component
  - Style Snackbar
- Add footer to the Palette component
  - Style the footer
- Integrate React Router. In index.js and App.js files
- Create a PaletteList.js component
  - This page displays a list of palettes in mini-size. When clicked, it'll go to that  individual palette page
  - Being rendered in App.js
  - Props received: `const { palettes } = this.props`
  - map over the palletes(coming from seedColors), for each palette display the paletteName and make it as a router link
  - The 'to' path takes in the palette id.
- Create a MiniPalette.js functional component
  - Being rendered in PaletteList.js
  - This is a Higher Order Component(HOC)
  - Use Material UI styles library (withStyles HOC) to style the component right inside the component file
- Style the PaletteList.js component using Material UI withStyles HOC library
- Create SingleColorPalette.js component
  - Being rendered in App.js
  - Add a Link to this SingleColorPalette page in ColorBox.js component in the 'More' text
  - Construct the 'moreUrl' path with the PaletteId and the colorId in Palette.js component. Pass this props down to ColorBox component and use it in the Link 'to' path


## Libraries Used
---------------

### Copy to clipboard
- Install: `npm install --save react-copy-to-clipboard`
- Import in ColorBox.js: `import { CopyToClipboard } from 'react-copy-to-clipboard';`
- Use: `<CopyToClipboard text={background}>...</CopyToClipboard>`

### Chroma-js
- Source: https://www.npmjs.com/package/chroma-js
- Install: `npm install chroma-js`
- Import in colorHelpers.js: `import chroma from 'chroma-js'`

### rc-slider
- Source: https://www.npmjs.com/package/rc-slider
- Install: `npm install rc-slider`
- Import in Navbar.js: `import Slider from 'rc-slider'` and `import 'rc-slider/assets/index.css';`
- NOTE: ORDER OF IMPORT IS IMPORTANT!
- To override the default styles, import your style file AFTER the vendor style file

### Material-UI
- Source: https://material-ui.com/
- Install: `npm install @material-ui/core`
- Import in Navbar.js to create select format menu:
  - The Select component: `import Select from '@material-ui/core/Select'`
  - The MenuItem component: `import MenuItem from '@material-ui/core/MenuItem';`
- Install: `npm install @material-ui/icons`
- Import in Navbar.js to create snackbar functionality:
  - `import Snackbar from '@material-ui/core/Snackbar';`
  - `import IconButton from '@material-ui/core/IconButton';`
  - `import CloseIcon from '@material-ui/icons/Close';`

### React Router
- Install: `npm install react-router-dom`
- Import in index.js file: `import { BrowserRouter } from 'react-router-dom'`
- Use: `<BrowserRouter><App /></BrowserRouter>`
- Import in App.js: `import {Route, Switch} from 'react-router-dom'`
- Use:
  ```javascript
  <Switch>
		<Route exact path='/' render={() => <h1>Palette list goes here</h1>} />
		<Route exact path='/palette/:id' render={() => <h1>individual paletteh1>} />
  </Switch>
  ```
- Import in PaletteList.js: `import { Link } from 'react-router-dom'`
- Use: `<Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>`

### Material UI Styles
- Source: https://material-ui.com/styles/basics/
- Install: `npm install @material-ui/styles`
- Import withStyles HOC in MiniPalatte.js, PaletteList.js: `import { withStyles } from '@material-ui/core/styles';`
- Use: `export default withStyles(styles)(MiniPalette);`







This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
