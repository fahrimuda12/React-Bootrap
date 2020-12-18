import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavbarMe from './component/NavbarMe';
import Footer from './component/Footer';
import Home from './page/Home';
import About from './page/About';
import { Switch, Route, Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
function Routing(){
  
  return (
      <Router history={history}>
      <>
        <NavbarMe />
        <Switch>
          <Route  path="/about">
            <About />
          </Route>
          <Route  path="/">
            <Home />
          </Route>
          <Route  path="">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </>
      </Router>
  );  
}

ReactDOM.render(
  <Routing />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
