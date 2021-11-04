import { lazy, Suspense } from "react"

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import Header from "./components/Header"

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App

