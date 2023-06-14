import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'

import './App.css'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
