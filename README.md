## How to design and implement features

All features can be broken down into

- components - containers connected to the store, or needing to use component life-cycle methods or refs (pages, forms, modals, routes, navigation, and other shared components)
- snippets - functions that return JSX (sections, cards, buttons)
- utilities - functions that can be unit tested or does not rely on any component
- content - what gets displayed, and some configuration variables when needed
- updateSchemaCreators - used to update the store. you can find documentation on updateSchemas [here](https://github.com/Neil-G/redux-mastermind/wiki/updateSchemas-and-updateSchemaCreators).



## Commonly Used Libraries

- alertify.js
- moment
- react-chartjs-2
- react-slick
- react-scroll
- semantic-ui-react
- sweetalert
- fuse.js



## Testing

### Unit
- Everything in `/src/utilities` should be (able to be) unit tested.  
- Make individual tests, and then import them into ```/test/unit/index.js```
- Import utility functions from ```/test/unit/utilities```. The utilities folder gets transpiled to this folder before every test, so that you can use es6, flow, etc.


### End-to-end
-  in the command line from the main directory ```npm run test:e2e:chrome test/e2e/<fileName>.js```



-------------------
This project was bootstrapped with Facebook's Create React App. Documentation for this project can be found [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).
