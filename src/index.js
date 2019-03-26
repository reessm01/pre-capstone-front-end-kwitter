import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { App } from "./components"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import {Router} from 'react-router-dom'
import { Route } from "react-router-dom"
import configureStore, { history } from "./configureStore"

export const store = configureStore({})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister()
