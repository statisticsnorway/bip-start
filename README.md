# bip-start

Frontend for bip-initializer; a generator for BIP config

## Functionality

The purpose of this application is to help the developer to create a correct HelmRelease for an
application that will run on BIP. This is very much a WIP and further functionality will be
added.

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

* `yarn up` (will upgrade all packages; must be done before running first time)
* `yarn start`

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

### Build container

Podman or docker:
`docker build . -t eu.gcr.io/prod-bip/ssb/stratus/bip-start:<version>`

### Run container locally

Podman or docker:
`docker run -p 8180:8180 eu.gcr.io/prod-bip/ssb/stratus/bip-start:<version>`

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).y)
