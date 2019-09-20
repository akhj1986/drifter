import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/views/home"
import Browse from "./components/views/browse"
import Contact from "./components/views/contact"
import Articles from "./components/views/articles"

import Layout from "./components/layout"

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/browse/:id" component={Articles}></Route>
          <Route path="/browse" component={Browse}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
