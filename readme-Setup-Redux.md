# Set up Redux in your app

### Documentation

- [React Redux](https://react-redux.js.org/introduction/quick-start)
- [Install Redux](https://redux-docs.netlify.com/introduction/installation/)
- [Set up Redux Store](https://redux-docs.netlify.com/recipes/configuring-your-store/)

### Installation

- Install `react-redux` and `redux`

```js
npm install react-redux
npm install redux
```

### Setup Redux Store: `<Provider>`

- **React Redux provides** `<Provider />`, which makes the Redux store available to the rest of your app:

```js
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux"; //<== Provider
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";

const store = createStore(rootReducer);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

[ 1/24/2020 ]

<hr  />

# Redux Dev Tool

- [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)

```js
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

[ 1/24/2020 ]

<hr  />
