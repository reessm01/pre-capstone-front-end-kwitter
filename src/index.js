import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { App } from "./components"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from "react-router-dom"
import configureStore, { history } from "./configureStore"

export const store = configureStore({})

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister()
