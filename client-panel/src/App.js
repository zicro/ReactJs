import React from 'react';
import './App.css';
import AddContact from './Components/Contacts/AddContact';
import Navbar from './Components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Contacts from './Components/Contacts/Contacts';

import { Provider } from './Components/context';

function App() {
 
  return (
    <Provider>
      <div>
        <Navbar  title="Clients Listes"/>
        <AddContact />
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
