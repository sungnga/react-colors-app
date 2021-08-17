## NOTES AND STEPS TO BUILDING THIS APPLICATION
The codebase for each step can be found in the commit link

### [1. Create project using create-react-app](https://github.com/sungnga/react-colors-app/commit/6028992855c52f60ae669643f7b481908cada3e6?ts=2)
- Create project with create-react-app
  - `npx create-react-app react-colors-app --use-npm`
- The `--use-npm` flag uses npm instead of yarn

### [2. Add seedColors.js file](https://github.com/sungnga/react-colors-app/commit/dd9cad22dac3bfac96ca06327cfdbded8c76a612?ts=2)
- This file contains the initial color palettes that we can use for our project

### [3. Create the Palette component](https://github.com/sungnga/react-colors-app/commit/2155b5047017f1b86c2921aa0617ce559e3b8d86?ts=2)
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
  ```js
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

### [4. Add basic ColorBox component](https://github.com/sungnga/react-colors-app/commit/8dc1c4e162cd8831416430e9cf816bdd2cb9a46d?ts=2)
- Create the ColorBox.js component
  - Being rendered in Palette.js
  - Props received: `this.props.background` & `this.props.name`
  - Render the background color and name of color

### [5. Style the ColorBox component](https://github.com/sungnga/react-colors-app/commit/840e34adb22e8f48ec38a3fb055046112153eab8?ts=2)
- Add style

### [6. Use CopyToClipboard library on ColorBox component](https://github.com/sungnga/react-colors-app/commit/d2ca23b2cbc226d2f7f9607e734abc23e19f6ad0?ts=2)
- Add copy color to clipboard functionality. Do this in ColorBox component
  - Use copy-to-clipboard library
- Install: `npm install --save react-copy-to-clipboard`
- Import in ColorBox.js: `import { CopyToClipboard } from 'react-copy-to-clipboard';`
- Use: `<CopyToClipboard text={background}>...</CopyToClipboard>`

### [7. Add copy overlay animation](https://github.com/sungnga/react-colors-app/commit/c52f7f8c338c7f12c44e5d75c1a346a811b75eff?ts=2)
- Animate the copy color overlay
- Style the overlay

### [8. Add color helper to generate shades of colors](https://github.com/sungnga/react-colors-app/commit/88a078d86251616ec9390d85f29dfb799f6b6de3?ts=2)
- Source: https://www.npmjs.com/package/chroma-js
- Install: `npm install chroma-js`
- Import in colorHelpers.js: `import chroma from 'chroma-js'`
- Create color helper function to generate a range of shades of a color
  - colorHelpers.js
  - Use it in App.js

### [9. Add unstyled color slider - rc-slider library](https://github.com/sungnga/react-colors-app/commit/e35b1f6aa1cb5f6c46390a7a6e2ea367e329910e?ts=2)
- Source: https://www.npmjs.com/package/rc-slider
- Install: `npm install rc-slider`
- Import in Palette.js: `import Slider from 'rc-slider'` and `import 'rc-slider/assets/index.css';`
- Add color slider (at first in Palette comp, then move it to Navbar comp)
  - Use rc-slider library

### [10. Style the color slider, override default styles](https://github.com/sungnga/react-colors-app/commit/b688220016209256c9ff949ee605a4b684a47cbf?ts=2)
- Style the slider. And override default styles

### [11. Add Navbar component, styling, and font](https://github.com/sungnga/react-colors-app/commit/0b52669921e21e9e4621d253a38ee13437fa0391?ts=2)
- Create Navbar.js component
  - Being rendered in Palette.js
  - Props received: `const { level, changeLevel } = this.props;`
  - Render the logo, level text, and slider
  - Add style
- Import in Navbar.js: `import Slider from 'rc-slider'` and `import 'rc-slider/assets/index.css';`
- NOTE: ORDER OF IMPORT IS IMPORTANT!
- To override the default styles, import your style file AFTER the vendor style file

### [12. Add Select and Material UI, pass data upwards](https://github.com/sungnga/react-colors-app/commit/798148ca0dde2e32264292dd28ae445e0d0e3432?ts=2)
- Source: https://material-ui.com/
- Install: `npm install @material-ui/core`
- Import in Navbar.js to create select format menu:
  - The Select component: `import Select from '@material-ui/core/Select'`
  - The MenuItem component: `import MenuItem from '@material-ui/core/MenuItem';`
- Create the select format dropdown menu. Do this in Navbar component
  - Using Material-UI library: Select and MenuItem components
  - Create a controlled component of the Navbar to keep track of the changes of the format
    - When a new format is selected in the Select component in Navbar, the format state in Navbar will be synced with the new format
    - In the parent component(Palette) is also keeping track of the format state
    - When there's a new format, this format will also get passed to the parent component(Navbar to Palette): `this.props.handleChange(e.target.value);`
    - Set the value attribute of the Select comp to be the current state format
    - `<Select value={this.state.format} onChange={this.handleChange}>`
  - Now when a new format is selected(hex, rgb, or rgba), all the color boxes rendered in Palette component will be updated with that format

### [13. Add Snackbar, style Select](https://github.com/sungnga/react-colors-app/commit/987243b111021a737be10a0ff8dcd3f8a94b68b3?ts=2)
- Install: `npm install @material-ui/icons`
- Import in Navbar.js to create snackbar functionality:
  - `import Snackbar from '@material-ui/core/Snackbar';`
  - `import IconButton from '@material-ui/core/IconButton';`
  - `import CloseIcon from '@material-ui/icons/Close';`
- Create Snackbar letting user know what they've changed format. Do this in Navbar component
  - Use Material UI Snackbar, IconButton, and CloseIcon component
  - Style Snackbar

### [14. Add Palette footer](https://github.com/sungnga/react-colors-app/commit/ba83e9b6f2affbbff36e7a274ad637a231c65f7e?ts=2)
- Add footer to the Palette component
- Style the footer

### [15. Add React Router](https://github.com/sungnga/react-colors-app/commit/448e3c28fd29655b60e030a2735fa46810384e1b?ts=2)
- Integrate React Router in index.js and App.js files
- Install: `npm install react-router-dom`
- Import in index.js file: `import { BrowserRouter } from 'react-router-dom'`
- Use: `<BrowserRouter><App /></BrowserRouter>`
- Import in App.js: `import {Route, Switch} from 'react-router-dom'`
- Use:
  ```js
  <Switch>
		<Route exact path='/' render={() => <h1>Palette list goes here</h1>} />
		<Route exact path='/palette/:id' render={() => <h1>individual palette</h1>} />
  </Switch>
  ```
### [16. Fix Palette Route](https://github.com/sungnga/react-colors-app/commit/4aa8fafa4ce737fcc7c2815cd55ca4eaf96b3765?ts=2)
- Fix Palette route in App.js file
- Write a findPalette function that takes an id and finds the palette of that id in the seedColors array
- The Route path `path='/palette/:id'` displays a color palette coming from seedColor.js array with that id

### [17. Add PaletteList component and Links](https://github.com/sungnga/react-colors-app/commit/4aabab7cce85f2af65c21a94a0c48d8d5eb07e8f?ts=2)
- Create a PaletteList.js component
- Import in PaletteList.js: `import { Link } from 'react-router-dom'`
- Use: `<Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>`
- This page displays a list of palettes in mini-size. When clicked, it'll go to that individual palette page
- Being rendered in App.js
- Props received: `const { palettes } = this.props`
- Map over the palettes(coming from seedColors), for each palette display the paletteName and make it as a router link
- The 'to' path takes in the palette id.

### [18. Create MiniPalette component, add withStyles](https://github.com/sungnga/react-colors-app/commit/137c0415525d15488646214ecdba5faa94efcf94?ts=2)
- Source: https://material-ui.com/styles/basics/
- Install: `npm install @material-ui/styles`
- Import withStyles HOC in MiniPalatte.js: `import { withStyles } from '@material-ui/core/styles';`
- Use: `export default withStyles(styles)(MiniPalette);`
- Create a MiniPalette.js functional component
  - Being rendered in PaletteList.js
  - This is a Higher Order Component(HOC)
  - Use Material UI styles library (withStyles HOC) to style the component right inside the component file

### [19. Start styling MiniPalette](https://github.com/sungnga/react-colors-app/commit/22c4ee8838969adf004a48f6f9dc732bc2c37c93?ts=2)

### [20. Start styling PaletteList component using withStyles](https://github.com/sungnga/react-colors-app/commit/6d1174f246f3bbc41afa75cd5c10f1f870e0b83e?ts=2)
- Style the PaletteList.js component using Material UI withStyles HOC library
- Import withStyles HOC in PaletteList.js: `import { withStyles } from '@material-ui/core/styles';`
- Use: `export default withStyles(styles)(PaletteList);`

### [21. Finish styling MiniPalette component](https://github.com/sungnga/react-colors-app/commit/69af25debb0c19dd07120e25c895c60cac4966e0?ts=2)

### [22. Add Link to Palette page using routeProps](https://github.com/sungnga/react-colors-app/commit/dd56710502fd9d93a84ddf2a9701fa3afbb0ee1f?ts=2)
- We have two options to navigate to a different page. One is to use the `Link` component provided by react-router-dom. Second is to use `routeProps` that is available from the Route component provided by react-router-dom
  - A `Link` component is essentially like an anchor tag
  - Our MiniPalette component acts as a clickable link that takes user to that palette page, but it also has other interactive features
  - In our case scenario, it is best practice to use `routeProps` instead of the `Link` component
  - `routeProps` contains properties such as history.push() that we want to use
- In App.js file, pass the `routeProps` as props to the PaletteList child component

### [23. Add Link to ColorBox, add Route to single color page](https://github.com/sungnga/react-colors-app/commit/5d5dcc7bae3ac5834ff396ab035a8556d96184dc?ts=2)
- In the ColorBox.js component:
  - Add a Link component around the 'More' span. When click on it, it would take us to the home page
  - At this event when it transitions to the home page, other events from the parent component(Palette.js) also fire, such as the copy color animation and copying the hex color to the clipboard. We don't want events from the parents to fire as well when we click on the 'More' link
  - To prevent this from happening, add an onClick event listener to the Link component to execute the `e.stopPropagation()` method
- In App.js component:
  - Add another Route component that takes you to the single color page. Just render a simple text for now

### [24. Add SingleColorPalette component and Link](https://github.com/sungnga/react-colors-app/commit/6439c1d06429d6f34866fdfe6cd7e9a743765a3f?ts=2)
- Create SingleColorPalette.js component
  - Being rendered in App.js
  - Receive another props, colorId, from App.js
  - Add a Link to this SingleColorPalette page in ColorBox.js component in the 'More' text
  - Construct the 'moreUrl' path with the PaletteId and the colorId in Palette.js component. Pass this props down to ColorBox component and use it in the Link 'to' path

### [25. Display colors in SingleColorPalette](https://github.com/sungnga/react-colors-app/commit/28d4a2ad3978ef59b5762d6e3166de3157689546?ts=2)
- Display shades of that particular color
  - Create a helper function to gather all shades of the matching color id
  - Map over the shades array and render each shade using ColorBox component
  - Write conditional logic to hide the 'moreUrl' link in ColorBox.js
  
### [26. Add Navbar and Footer to SingleColorPalette](https://github.com/sungnga/react-colors-app/commit/282be17dff9d8bf0fc673a59a008d3d154e3990f?ts=2)
- When copy color to clipboard, set the correct format(hex, rgb, or rgba)
  - Create state to keep track of the format state
  - Include the changeFormat function to update the state if the format is changed
  - When rendering the color shades(using ColorBox), attach the current format to the color: `background={color[this.state.format]}`
- Add Navbar (hide the slider and level) and Footer. So render these two components
- Create a functional footer PaletteFooter.js component
  - Being rendered in Palette.js and SingleColorPalette.js
  - Props received: `const {paletteName, emoji} = this.props.palette`
  - Renders the palette name and the emoji

### [27. Add GoBack Link in SingleColorPalette](https://github.com/sungnga/react-colors-app/commit/38041b8af8f65873a8f34482976bb97bdd13a217?ts=2)
- Add GoBack link using Link. It takes you back to the color palette. 
- Style the link in ColorBox.css

### [28. Adjust text color based on luminance](https://github.com/sungnga/react-colors-app/commit/12d8e4525876021cbf60df744b195f7de35f40dc?ts=2)
- Adjust text color based on text's luminance
  - Use chroma-js library
  - Do this in ColorBox.js component

### [29. Refactor ColorBox styles](https://github.com/sungnga/react-colors-app/commit/3e746a38c1317be75a7f4aa97381504e296c2c58?ts=2)
- Refactor styles of ColorBox.js component using Material UI Styles (withStyles)
  - All styles for ColorBox now live in the component
  - Pass classes as props to the component
  - Use conditionals to display texts and 'more' link in light or dark color depending on the luminance of the background color

### [30. Refactor Palette and SingleColorPalette styles](https://github.com/sungnga/react-colors-app/commit/c3928194a1b21b5920ea95770efec78337a372c3?ts=2)
- Refactor Palette.js and SingleColorPalette.js styles

### [31. Move out all styles into a new styles folder](https://github.com/sungnga/react-colors-app/commit/8741e71b19fcfbe90f96af203eb644bcc13fa343?ts=2)
- Refactor PaletteFooter.js, PaletteList.js, MiniPalette.js styles
- Move out styles for all components into a new styles folder
  - Each component has its own stylesheet of the same name and the word 'Styles' added: `ColorBoxStyles.js`
  - Import the stylesheet in the component: `import styles from './styles/ColorBoxStyles'`

### [32. Refactor Navbar styles and remove CSS files](https://github.com/sungnga/react-colors-app/commit/7bcdfbe13b4b14aab2d67a9660476265e58bf56a?ts=2?ts=2)
- Refactor Navbar.js styles and remove CSS files

### [33. Add NewPaletteForm component and Link](https://github.com/sungnga/react-colors-app/commit/902ce1c55af0489aba6ef83ae62ca7de6fac9c73?ts=2)
- CREATE NEW PALETTE FORM
  - Create a NewPaletteForm.js component
  - Being rendered in App.js in a Route. The path is `path="/palette/new"`
  - Create a Link to the NewPaletteForm page in PaletteList.js component and style link

### [34. Add Drawer to NewPaletteForm](https://github.com/sungnga/react-colors-app/commit/79615d86edc2f5e04f4eebfecb3c70c4844b2bc7?ts=2)
- In NewPaletteForm.js component:
  - Add Drawer functionality using Material UI Persistent Drawer

### [35. Add ChromePicker and Button to Drawer](https://github.com/sungnga/react-colors-app/commit/b02ee9415b55d1e13d6eddd8102250f8f3e3e5c0?ts=2)
- In NewPaletteForm.js component:
  - Add ChromePicker component (color picker) to Drawer
    - Install React Color component: `npm install react-color`
    - Import: `import { ChromePicker } from 'react-color'`
    - Use: `<ChromePicker />`
  - Add 3 buttons to Drawer using Material UI: 
    - Clear Palette, Random Color, and Add Color
    - Import: `import Button from '@material-ui/core/Button'`
    - Use: `<Button variant='contained' color='primary'>Add Color</Button>`

### [36. Connect colorpicker to button, display the colors](https://github.com/sungnga/react-colors-app/commit/b17d063042850b1bbaade1fa73de21dc3a357a5a?ts=2)
- In NewPaletteForm.js component:
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

### [37. Add DraggableColorBox component](https://github.com/sungnga/react-colors-app/commit/51fb85668355b6828c165459dcb3d1a9b4b50ca0?ts=2)
- Create a DraggableColorBox.js functional component
  - Being rendered in NewPaletteForm.js
  - props received: `<DraggableColorBox color={color} />`
  - render each color, give the backgroundColor style, and style the color box

### [38. Add FormValidator](https://github.com/sungnga/react-colors-app/commit/96135b6ff144063293191df378f5e9654f398b92?ts=2)
- Install: `npm install react-material-ui-form-validator`
- Import in NewPaletteForm.js: `import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'`
- Add Material UI form validator
  - Install the library and import in NewPaletteForm.js component
  - Create a state to keep track of the text input coming from `<TextValidator />`
    - add a handleChange method to sync up the newName state
  - Add validator rules to the ValidatorForm component. Do this in a `componentDidMount()` method
    - check to make sure user enters a color name
    - check to see if the color name is unique
    - check to see if the color is unique

### [39. Add savePalette function](https://github.com/sungnga/react-colors-app/commit/1d43434179617644474b25f762389568c2f35c19?ts=2)
- In App.js component:
  - Write a savePalette() function that takes newPalette as an argument and saves this newPalette to the `palettes` array in the state
  - Pass down the savePalette function as props to the NewPaletteForm child component
- In NewPaletteForm.js component:
  - Saving new palettes
    - Create a 'Save Palette' button
    - Add an onClick event function that will trigger the savePalette() function that was passed as props from the App component: `this.props.savePalette(newPalette)`
    - Inside the handleSubmit() function, create a newPalette object with its properties. This object will get passed up the chain to the parent component(App.js) when onClick event is triggered
    - Once the newPalette is saved, redirect user back to the main page
- In the App.js component, the savePalette() function will concatenate the newPalette to the current palettes list

### [40. Add palette name form and validation](https://github.com/sungnga/react-colors-app/commit/758d48079ee4b87244f4702f3d7fa41340b3e488?ts=2)
- In NewPaletteForm.js component:
  - Add new palette name form and apply ValidatorForm rules
    - Check to make sure a palette name is provided
    - Check to make sure the palette name is unique
    - To save a unique palette name, we need access to all the palette names
      - in App.js, need to pass down palettes as a prop to the NewPaletteForm component: `palettes={this.state.palettes}`
      - then add a ValidatorForm rule in componentDidMount() method in NewPaletteForm component

### [41. Style DraggableColorBox and add delete icon](https://github.com/sungnga/react-colors-app/commit/cb6a00c33380245738070e707119cfe4bf34286f?ts=2)
- Style the DraggableColorBox component and add the delete icon

### [42. Add delete to NewPaletteForm](https://github.com/sungnga/react-colors-app/commit/f4c842d9c3e7f524505a017eb37a89f8daa2536a?ts=2)
- Adding the color box delete functionality
  - Add an onClick event in the `<DeleteIcon onClick={this.props.handleClick} />` in DraggableColorBox.js. Call the handleClick function that gets passed down from the parent component
  - In the parent component(NewPaletteForm.js), write a removeColor() function that filters out(removes) the given color name from the current color list

### [43. Implement drag and drop](https://github.com/sungnga/react-colors-app/commit/d2e3bcb4cefb4ecec23b9546caf6604203ba5d53?ts=2)
- Install: `npm install react-sortable-hoc`
- Import in DraggableColorList.js: `import {SortableContainer} from 'react-sortable-hoc'`
- Import in DraggableColorBox.js: `import { SortableElement } from 'react-sortable-hoc';`
- Import in NewPaletteForm.js: `import { arrayMove } from 'react-sortable-hoc'`
- Drag and drop functionality
  - Create a functional component called DraggableColorList.js
    - Being rendered in NewPaletteForm.js. Note that this is replacing the DraggableColorBox.js component
    - In the DraggableColorList component, map over colors list and render each color as `<DraggableColorBox />` instance

### [44. Add clear palette button](https://github.com/sungnga/react-colors-app/commit/c63e84435d5a67969d3c730650418ab828562e1b?ts=2)
- Add clear palette button in NewPaletteForm.js component
  - To clear the palette: create clearColors() method to set the colors state to an empty array

### [45. Add random color button](https://github.com/sungnga/react-colors-app/commit/1590cb3782ce122714e298b47e53baf0a166b8ce?ts=2)
- Add random color button in NewPaletteForm.js component
  - To generate a random color: create addRandomColor() method that generate a random color from existing palettes and add the randomColor to the colors state
  - Write a condition to check if palette is full

### [46. Refactor nav to its own component: PaletteFormNav](https://github.com/sungnga/react-colors-app/commit/acec76f81263022d7df979a085812d0de21f8573?ts=2)
- Refactor nav to its own component
  - Create a stateful nav component: PaletteFormNav.js
  - Being rendered in NewPaletteForm.js component

### [47. Refactor to ColorPickerForm component](https://github.com/sungnga/react-colors-app/commit/cf7376df4b89eeebec0616c04b67342df6b52ff1?ts=2)
- Refactor colorPicker to its own component
  - Create a stateful color picker component: ColorPickerForm.js
  - Being rendered in NewPaletteForm.js component

### [48. Start to style PaletteFormNav](https://github.com/sungnga/react-colors-app/commit/91f11b0fc713b3fc505d30f3ac1c2d70774dcbbe?ts=2)
- Style PaletteFormNav.js using withStyles

### [49. Style ColorPickerForm and NewPaletteForm](https://github.com/sungnga/react-colors-app/commit/b94faaa15b8005277dca5fa1b1f3d25cb4bdaa63?ts=2)
- Style ColorPickerForm.js and NewPaletteForm.js components using withStyles

### [50. Add PaletteMetaForm component and Dialog](https://github.com/sungnga/react-colors-app/commit/641db8c21a0879589951849f1d1ce5fc333eabc1?ts=2)
- Add PaletteMetaForm.js component and Dialog
  - Being rendered in PaletteFormNav.js component
  - Use the Material UI Dialog library
  - The 'Save Palette Name' button is now in the Dialog
  - Move the TextValidator, ValidatorForm, componentDidMount, and handleChange to here

### [51. Style PaletteMetaForm and the Dialog](https://github.com/sungnga/react-colors-app/commit/afa7f09754e4987023281da23ca4860564bd2d82?ts=2)
- In PaletteFormNav.js component:
  - Create a state called formShowing and initialize it to false
  - Write a showForm() function that sets the formShowing state to true
  - Conditionally render the PaletteMetaForm component. If formShowing state is true, then render this component
- Style PaletteMetaForm.js and the Dialog component

### [52. Fix Form Dialog and install emoji-mart picker](https://github.com/sungnga/react-colors-app/commit/45931448b946b6151aaa01a80136393f990f1c61?ts=2)
- In PaletteFormNav.js component:
  - Write a hideForm() function that sets the formShowing state to false
  - Pass down this function as props to the PaletteMetaForm child component
- Install: `npm install emoji-mart`
- Import the Picker component in PaletteMetaForm.js: `import {Picker} from 'emoji-mart'`
- Import the css: `import 'emoji-mart/css/emoji-mart.css'`
- In PaletteMetaForm.js component and inside the Dialog component:
  - Execute the hideForm() function when closing the Dialog
  - Execute the hideForm() function when the 'Cancel' button is clicked
  - Render the Picker component inside the Dialog component

### [53. Finish emoji picker and form](https://github.com/sungnga/react-colors-app/commit/08b8f38bec764175cd30f197bd04432a8e9921a0?ts=2)
- In NewPaletteForm.js component:
  - Update the handleSubmit() function save the newPalette's name and colors
- In PaletteMetaForm.js component:
  - Write a showEmojiPicker() function
  - Write a savePalette() function that create properties for the newPalette object and executes the handleSubmit() function
  - In the Picker component, when an emoji is selected, savePalette() method is called. This adds an emoji property to the newPalette object. This newPalette object is then passed to the parent component(NewPaletteForm.js) via the handleSubmit() props method
  - The emoji is now included when a palette is saved

### [54. Move JSS styles out and add constants file](https://github.com/sungnga/react-colors-app/commit/83faaa19ec787e54e0ab1a27f6c065ee96c56284?ts=2)
- Move JSS styles out and add constants file for these components:
  - ColorPickerForm.js
  - DraggableColorBox.js
  - NewPaletteForm.js
  - PaletteFormNav.js

### [55. Tweak styles of form](https://github.com/sungnga/react-colors-app/commit/357cb7daae7cb0b57a95139bc118dbe765c5f39c?ts=2)
- In PaletteFormNav and NewPaletteFormStyles components, and PaletteFormNavStyles.js
- Tweak styles of palette form: replace menu icon, remove extra padding, hide icon when drawer is open

### [56. Save palettes to local storage](https://github.com/sungnga/react-colors-app/commit/9295cd75af65ff948ca72cda8b3174b24e62922b?ts=2)
- Save palettes to localStorage
  - Do this in App.js
  - Create the syncLocalStorage() method to save the palettes to local storage
  - Inside savePalette() method, after state is updated, call the syncLocalStorage() method as callback

### [57. Add DeleteIcon to MiniPalette](https://github.com/sungnga/react-colors-app/commit/1da8d059a30c58b2335fe6f5565a73de0e451f9d?ts=2)
- Add DeleteIcon component from Material UI to MiniPalette.js and add styles to it

### [58. Finish MiniPalette delete functionality](https://github.com/sungnga/react-colors-app/commit/0413b98fb2083dce4156c4fbbdeb10023c39f3a1?ts=2)
- Delete a MiniPalette functionality
- In App.js, write a deletePalette() function that takes a palette id and deletes it from the palettes list
    - Pass down this deletePalette() as props to PaletteList component
- In PaletteList.js, pass down handleDelete function and the palette id as props to the MiniPalette component
- In MiniPalette.js, when the deleteIcon is clicked, call the deletePalette() function which triggers the `this.props.handleDelete(this.props.id)` function

### [59. Add responsive helper: sizes.js, style ColorBox](https://github.com/sungnga/react-colors-app/commit/f20b783f52e1120bb150339e0267bcb38c7903c0?ts=2)
- Media queries in JSS Styles:
  - Add a responsive helper
    - Create a sizes.js helper that defines different media query breakpoints
  - Import this helper in ColorBoxStyles.js to style ColorBox at different screen sizes

### [60. Make ColorBox responsive](https://github.com/sungnga/react-colors-app/commit/d2da841d594817eea197e8936f54bef5be836937?ts=2)
- Make ColorBox responsive by changing the width and height at different media query breakpoints
  - ColorBoxStyles.js
  - PaletteStyles.js

### [61. Make form and navbar responsive](https://github.com/sungnga/react-colors-app/commit/e1792ba04915dea8039165ecdbe1570c08fb1a72?ts=2)
- Make form and navbar responsive
  - DraggableColorBoxStyles.js
  - NavbarStyles.js
  - PaletteFormNavStyles.js

### [62. Make PaletteList responsive](https://github.com/sungnga/react-colors-app/commit/3683d2df05cb972a68b5a2fdcd73437bedd4153e?ts=2)
- Make PaletteList responsive
  - PaletteListStyles.js
  - Add an additional breakpoint for xl size: sizes.js

### [63. Add background svg to PaletteList](https://github.com/sungnga/react-colors-app/commit/2a0bbe7a62af7f39a68ef0fc6291456c9003e025?ts=2)
- Add background SVG to PaletteListStyles.js
  - Generate the background SVG at www.svgbackgrounds.com
  - Click the "download svg" button to download the svg code
  - Create a bg.svg file inside the styles directory and paste the code in here
  - Import the background svg file and use it in PaletteListStyles.js: `import bg from './bg.svg'`
  - To use: `backgroundImage: `url(${bg})``

### [64. Animate MiniPalette deletion](https://github.com/sungnga/react-colors-app/commit/3eb53699c3efab749a121ec8b059492370e70f77?ts=2)
- Add animation to MiniPalette deletion using React Transition Group library
  - Install: `npm install react-transition-group`
  - Import in PaletteList.js: `import { CSSTransition, TransitionGroup } from 'react-transition-group'`
  - Add styles in PaletteListStyles.js

### [65. Add delete confirmation Dialog](https://github.com/sungnga/react-colors-app/commit/35506a6e4ca2fbc819de67abb83cfcd98085cd02?ts=2)
- Add delete confirmation Dialog to delete a MiniPalette
  - Use Material UI components: List, Avatar and Icons
- In PaletteList.js component:
  - Write a openDialog() function that sets the openDeleteDialog state to true and sets the deletingId state to the provided id
  - Write a closeDialog() function that sets the openDeleteDialog state to false and sets the deletingId state to an empty string
  - Write a handleDelete() function that executes the deletePalette() function and calls the closeDialog() function
  - Render the delete confirmation Dialog component and its content here

### [66. Fix delete dragging bug, add padding to deleteIcon](https://github.com/sungnga/react-colors-app/commit/40a5a2f1e05665ca9632385d5220ad84b16ebdd9?ts=2)
- In NewPaletteForm.js and DraggableColorBoxStyles.js

### [67. Add basic route transitions](https://github.com/sungnga/react-colors-app/commit/a90e36e8d2011bf88dce0bcc85f62018fc5e302b?ts=2)
- Add basic route transition using react-transition-group library
- In App.js component:
  - `import { TransitionGroup, CSSTransition } from 'react-transition-group'`

### [68. Clean up route animations](https://github.com/sungnga/react-colors-app/commit/e0746738d2fb1add6e5526b74b5bed98701ed98d?ts=2)
- Refactoring Route transitions
  - Create a functional component called Page.js
  - Render the Page component in App.js where each component in the Route is wrapped inside the Page component
  - Create a separate css page to style the Page component, Page.css

### [69. Refactor MiniPalette with PureComponent](https://github.com/sungnga/react-colors-app/commit/d880a4e1f8b7a3d5f33cae42b4bec3ca7886adec?ts=2)
- Optimizing with PureComponent
  - Every time we delete a MiniPalette, it causes the list of palettes in PaletteList to be re-rendered
  - To solve this issue, inside MiniPalette.js component, use extends PureComponent instead of extends Component
  - Also, whenever we use an inline arrow function in render(), it creates a new function everytime render() is called
  - Because of this, it causes the PaletteList to be re-rendered
  - To solve this problem, change the handleClick arrow function to be a separate function and pass it down as props to MiniPalette component

### [70. Fix navbar slider size, add classnames to ColorBox](https://github.com/sungnga/react-colors-app/commit/dfc21893cf2700d3895e427c1307b807034e82b1?ts=2)
- Fix navbar slider size for different screen sizes
- Add classnames to ColorBox component

### [71. Clean up files](https://github.com/sungnga/react-colors-app/commit/7a67cda538cd7ac467370d8fc2dc7b3e79805db4?ts=2)
- Clean up all files

### [72. Fix issues with NewPaletteForm, ColorPickerForm](https://github.com/sungnga/react-colors-app/commit/d5e8d91f85a838c27b80fe485f76dc7ec1203f3c?ts=2)
- Fix issues with ValidatorForm in ColorPickerForm.js to not validate the color right away
- Fix issues with NewPaletteForm.js when all MiniPalettes are deleted
- Add chroma to DraggableColorBoxStyle.js based on the color luminance

### [73. Prevent duplicate random colors in NewPaletteForm](https://github.com/sungnga/react-colors-app/commit/e5ec39710cd550d43163114e7b10dc45481e7ceb?ts=2)
- With 404 page, redirect user to main palette page. Do this in App.js
- Prevent duplicate random colors in NewPaletteForm.js


## LIBRARIES USED

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

### SVG backgrounds
- Source: www.svgbackgrounds.com
- Generate the background SVG at www.svgbackgrounds.com
- Click the "download svg" button to download the svg code
- Create a bg.svg file inside the styles directory and paste the code in here
- Import the bg svg file in PaletteListStyles.js: `import bg from './bg.svg'`
- To use: `backgroundImage: `url(${bg})``

### React Transition Group
- Install: `npm install react-transition-group`
- Import in PaletteList.js: `import { CSSTransition, TransitionGroup } from 'react-transition-group'`
- Add styles in PaletteListStyles.js
