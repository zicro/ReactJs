import React from 'react';
import './App.css';
import AddContact from './Components/Contacts/AddContact';
import Navbar from './Components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Contacts from './Components/Contacts/Contacts';

import { Provider } from './Components/context';
import About from './Components/pages/About';
import PageNotFound from './Components/pages/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
 
  return (
    <Provider>
      <Router>
      <div>
        <Navbar  title="Clients Listes"/>
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/contact/add" component={AddContact} />
          <Route exact path="/about/:id" component={About} />
         
          <Route component={PageNotFound} />
        </Switch>
      </div>
      </Router>
    </Provider>
  );
}
// la derniere route ajouter (PageNotFound) se declanche lors du saisie d'une route
// qui n'existe pas dans l'application
export default App;
