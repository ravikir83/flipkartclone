import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './container/Home'
import Signin  from './container/Signin'
import Signup  from './container/Signup'

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Signin" exact component={Signin}/>
          <Route path="/Signup" exact component={Signup}/>
        </Switch>
      </BrowserRouter>     
    </div>
  );  
}

export default App;
