import Nav from './components/NavigationBar/Nav'
import Card from './components/Posts/Card'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Card} />
      </Switch>
    </Router>
  )
}

export default App
