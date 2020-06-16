### STEPS TO BUILD THE COLOR PALETTE PROJECT
- Install create-react-app: `npx create-react-app react-colors-app`
- In the App.js file:
  - Render the Palette component
  - pass in as props(spread in) the seedColors (coming from seedColors.js) in the Palette component 
- Create a Palette.js component
  - Rendered in App.js. Props: `this.props.colors`
  - map over the seedColor props and for each color, extract the color and color name and pass it to ColorBox component as props
  - Render the ColorBox component after mapping over each color
  ```javascript
  const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
  ))
  ```
- Create the ColorBox component
  - Rendered in Palette.js. Props: `this.props.background` & `this.props.name`
  - Render the background color and name of color




# Libraries
---------------

### Copy to clipboard
- Install: `npm install --save react-copy-to-clipboard`
- Import in ColorBox.js: `import { CopyToClipboard } from 'react-copy-to-clipboard';`
- Use: `<CopyToClipboard text={background}>...</CopyToClipboard>`

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
