# bip-start

Frontend for bip-initializer; a generator for BIP config

## Functionality

## Run Locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Requirements

|Requirement        | Installation | Version  | Description     |
| ------------------ | ------------ | -------- | ----------------|
| Node | <https://nodejs.org/en/> | Current version | JavaScript runtime |
| Yarn | <https://yarnpkg.com/getting-started/install> | Berry (latest)  | Package manager. To update later: `yarn set version latest` |
| standardJS | <https://standardjs.com/#install> Install locally for this project | Latest | Code formatting |

### Run locally

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

See the script definition for `test` in [package.json](./package.json).

When you do `yarn test`, the script will check the code formatting for the entire project using `standard` (see [Requirements](#requirements) above) and then use the test library which locates any files called `*.test.js` and run their tests.

To only run either code formatting control or the tests, use `yarn run`:

```shell
# To run tests: 
yarn run react-scripts test

# To run code formatting control:
yarn run standard

# To automatically fix most problems reported by `standard`:
yarn run standard --fix
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).y)
