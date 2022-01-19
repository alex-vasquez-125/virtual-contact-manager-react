Resources:
* https://prettier.io/
* https://eslint.org/
* https://www.npmjs.com/package/eslint-plugin-react
* https://www.npmjs.com/package/eslint-plugin-react-hooks
* https://github.com/prettier/eslint-config-prettier
* https://www.npmjs.com/package/eslint-plugin-jsx-a11y
* https://www.npmjs.com/package/eslint-plugin-import

// todo: finish eslint-plugin-import config
* https://www.npmjs.com/package/babel-eslint

// todo: finish babel-eslint install and config

#
* https://material-ui.com/

#
* https://webpack.js.org/guides/getting-started/

#
* https://testing-library.com/docs/react-testing-library/setup
* https://jestjs.io/docs/en/getting-started

#
// todo https://reactjs.org/docs/accessibility.html#testing-accessibility-in-the-browser


#
Finished:
* webpack dev server serves app
* webpack bundles app and outputs index.html and bundle.js to ./dist
* jest is set up and first test passes

// project setup todo:
* split webpack into base, dev, prod configs
* look into different babel config file extensions and which is best to use
* finish configuring eslint
    * https://github.com/testing-library/eslint-plugin-testing-library
    * https://github.com/testing-library/eslint-plugin-jest-dom
* finish configuring prettier
* look into implementing lint fix on save in both webstorm and vscode
* look into implementing git precommit lint fix hook

// devops todo:
* add jenkinsfile
    * add reports for unit test, code coverage, and linting
* add git
* add dockerfile
* deploy to k8s
* look into a free nexus account
    * if free, connect jenkins and publish artifacts
        * npm publish or a docker image? probably both?
        
// virtual contact todo: EVERYTHING HERE IS TDD!
* make header component with navigation
* make table page
* make component carousel page
* make list page       
* switch to using a form component with validation instead of all by hand

// testing todo:
* kent c dodds, react testing library, and other things have testing setup optimizations to reduce boiler plate that need to be implemented
* Implement a few tests using nested describe blocks and a few that follow kent c dodd suggestion of different test files per class under test

// node todo:
* make node backend
    * make server and frontend folders in repo
    * configure frontend to build to backend public folder
    * write node and express code to serve react bundle.js

// security todo:
* use jwt or other auth login

// rationale todo: include section in this README that explains why I made decisions I made
* https://material-ui.com/guides/minimizing-bundle-size/#when-and-how-to-use-tree-shaking
* https://material-ui.com/guides/minimizing-bundle-size/#option-1
    * I picked option 1 for simplicity of my demo
* RTL priority guide - https://testing-library.com/docs/queries/about#priority    
 
