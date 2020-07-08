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
  - Receive another props, colorId, from App.js
  - Add a Link to this SingleColorPalette page in ColorBox.js component in the 'More' text
  - Construct the 'moreUrl' path with the PaletteId and the colorId in Palette.js component. Pass this props down to ColorBox component and use it in the Link 'to' path
  - Display shades of that particular color
    - Create a helper function to gather all shades of the matching color id
    - Map over the shades array and render each shade using ColorBox component
    - Write conditional logic to hide the 'moreUrl' link in ColorBox.js
  - When copy color to clipboard, set the correct format(hex, rgb, or rgba)
    - Create state to keep track of the format state
    - Include the changeFormat function to update the state if the format is changed
    - When rendering the color shades(using ColorBox), attach the current format to the color: `background={color[this.state.format]}`
  - Add Navbar (hide the slider and level) and Footer. So render these two components
  - Add GoBack link using Link. It takes you back to the color palette. Style the link
- Create a functional footer PaletteFooter.js component
  - Being rendered in Palette.js and SingleColorPalette.js
  - Props received: `const {paletteName, emoji} = this.props.palette`
  - Renders the palette name and the emoji
- Adjust text color based on text's luminance
  - Use chroma-js library
  - Do this in ColorBox.js component
- Refactor styles of ColorBox.js component using Material UI Styles (withStyles)
  - All styles for ColorBox now live in the component
  - Pass classes as props to the component
  - Use conditionals to display texts and 'more' link in light or dark color depending on the luminance of the background color
- Refactor Palette.js and SingleColorPalette.js styles
- Refactor PaletteFooter.js, PaletteList.js, MiniPalette.js styles
- Move out styles for all components into a new styles folder
  - Each component has its own stylesheet of the same name and the word 'Styles' added: `ColorBoxStyles.js`
  - Import the stylesheet in the component: `import styles from './styles/ColorBoxStyles'`
- Refactor Navbar.js styles and remove CSS files
- CREATE NEW PALETTE FORM. NewPaletteForm.js component
  - Being rendered in App.js in a Route
  - Create a Link to the NewPaletteForm page in PaletteList.js component and style link
  - Add Drawer functionality using Material UI Persistent Drawer
  - Add ChromePicker component (color picker) to Drawer
    - Install React Color component: `npm install react-color`
    - Import: `import { ChromePicker } from 'react-color'`
    - Use: `<ChromePicker />`
  - Add 3 buttons to Drawer using Material UI: 
    - Clear Palette, Random Color, and Add Color
    - Import: `import Button from '@material-ui/core/Button'`
    - Use: `<Button variant='contained' color='primary'>Add Color</Button>`
  - Connect color picker to button
    - Set 'Add Color' button's backgroundColor to be the currentColor
    - Write a function (updateCurrentColor) that updates the currentColor to the newColor
      - This function receives the new color data coming from the ChromePicker component's onChangeComplete attribute. Call it newColor
      - Set the currentColor state to be the newColor (in hex)
      - Call this function in the ChromePicker component
    - The backgroundColor of the 'Add Color' button should now update with the newColor
    - Add the newColor to the array of colors when the 'Add Color' is clicked
      - Create a state for an array of colors. This keeps track of the current list of colors
      - Write a function (addNewColor) that adds the newColor to colors list
        - Call this function in the 'Add Color' button
  - Display the list of colors in the main container
    - Map over the colors list and display each color in a list form
    - Set the style backgroundColor for each color
  - Create a DraggableColorBox.js functional component
    - Being rendered in NewPaletteForm.js
    - props received: `<DraggableColorBox color={color} />`
    - render each color, give the backgroundColor style, and style the color box
  - Add Material UI form validator
    - Install the library and import in NewPaletteForm.js
    - Create a state to keep track of the text input coming from `<TextValidator />`
      - add a handleChange method to sync up the newName state
    - Add validator rules to the ValidatorForm component. Do this in a `componentDidMount()` method
      - check to make sure user enters a color name
      - check to see if the color name is unique
      - check to see if the color is unique
  - Saving new palettes
    - Create a 'Save Palette' button
    - Add an onClick event function that will trigger the savePalette() function that was passed as props from the App component: `this.props.savePalette(newPalette)`
    - Inside the handleSubmit() function, create a newPalette object with its properties. This object will get passed up the chain to the parent component(App.js) when onClick event is triggered
    - Once the newPalette is saved, redirect user back to the main page
    - In the App.js component, the savePalette() function will concatinate the newPalette to the current palette list
  - Add new palette name form and apply ValidatorForm rules
    - Check to make sure a palette name is provided
    - Check to make sure the palette name is unique
    - To save a unique palette name, we need access to all the palette names
      - in App.js, need to pass down palettes as a prop to the NewPaletteForm component: `palettes={this.state.palettes}`
      - then add a ValidatorForm rule in componentDidMount() method in NewPaletteForm component
  - Style the DraggableColorBox component and add the delete icon
  - Adding the color box delete functionality
    - Add an onClick event in the `<DeleteIcon onClick={this.props.handleClick} />` in DraggableColorBox.js. Call the handleClick function that gets passed down from the parent component
    - In the parent component(NewPaletteForm.js), write a removeColor() function that filters out(removes) the given color name from the current color list
- Drag and drop functionality
  - Create a functional component called DraggableColorList.js
    - Being rendered in NewPaletteForm.js. Note that this is replacing the DraggableColorBox.js component
    - In the DraggableColorList component, map over colors list and render each color as `<DraggableColorBox />` instance
- Add clear palette and random color buttons in NewPalette.js component
  - To clear the palette: create clearColors() method to set the colors state to an empty array
  - To generate a random color: create addRandomColor() method that generate a random color from existing palettes and add the randomColor to the colors state
  - Write a condition to check if palette is full
- Refactor nav to its own component
  - Create a stateful nav component: PaletteFormNav.js
  - Being rendered in NewPaletteForm.js component
- Refactor colorPicker to its own component
  - Create a stateful color picker component: ColorPickerForm.js
  - Being rendered in NewPaletteForm.js component
- Style ColorPickerForm.js
- Add PaletteMetaForm.js component and Dialog
  - Being rendered in PaletteFormNav.js component
  - Use the Material UI Dialog library
  - The 'Save Palette Name' button is now in the Dialog
  - Move the TextValidator, ValidatorForm, componentDidMount, and handleChange to here
- Style PaletteMetaForm.js and the Dialog
- Fix the Form Dialog and add emoji-mart picker
  - Using emoji-mart npm package
  - import the Picker component and css file in PaletteMetaForm.js component
  - In the Picker instance, when an emoji is selected, savePalette() method is called. This adds an emoji property to the newPalette object. This newPalette object is then passed to the parent component(NewPaletteForm.js) via the handleSubmit() props method
  - The emoji is now included when a palette is saved
- Move JSS styles out and add constants file




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
		<Route exact path='/palette/:id' render={() => <h1>individual palette</h1>} />
  </Switch>
  ```
- Import in PaletteList.js: `import { Link } from 'react-router-dom'`
- Use: `<Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>`

### Material UI Styles
- Source: https://material-ui.com/styles/basics/
- Install: `npm install @material-ui/styles`
- Import withStyles HOC in MiniPalatte.js, PaletteList.js: `import { withStyles } from '@material-ui/core/styles';`
- Use: `export default withStyles(styles)(MiniPalette);`

### React Color
- Install: `npm install react-color`
- Import in NewPaletteForm.js: `import {ChromePicker} from 'react-color'`

### react-material-ui-form-validator
- Install: `npm install react-material-ui-form-validator`
- Import in NewPaletteForm.js: `import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'`

### Drag and Drop: react-sortable-hoc
- Install: `npm install react-sortable-hoc`
- Import in DraggableColorList.js: `import {SortableContainer} from 'react-sortable-hoc'`
- Import in DraggableColorBox.js: `import { SortableElement } from 'react-sortable-hoc';`
- Import in NewPaletteForm.js: `import { arrayMove } from 'react-sortable-hoc'`

### emoji-mart
- Install: `npm install emoji-mart`
- Import the Picker component in PaletteMetaForm.js: `import {Picker} from 'emoji-mart'`
- Import the css: `import 'emoji-mart/css/emoji-mart.css'`


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
