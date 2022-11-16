import React from 'react'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import UserManual from './components/UserManual';
import FAQ from './components/FAQ';
import TyC from './components/TyC';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeDap from './components/HomeDap';
import Nosotros from './components/Nosotros';
import Products from './components/Products';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/' component={HomeDap} />
          <Route path = '/nosotros' component={Nosotros} />
          <Route path = '/products' component={Products} />
          <Route path = '/team' component={Team} />
          <Route path = '/album' component={Home} />
          <Route path = '/amanual' component={UserManual} />
          <Route path = '/afaq' component={FAQ} />
          <Route path = '/atyc' component={TyC} />
        </Switch>
      </Router>
    </div>
    
  )
}

export default App
