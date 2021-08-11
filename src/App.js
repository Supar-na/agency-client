import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Service from './Components/Home/Service/Service';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import LogIn from './Components/LogIn/LogIn/LogIn';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/LogIn/PrivateRoute/PrivateRoute';
import AddService from './Components/Dashboard/AddService/AddService';
import BookedService from './Components/BookedService/BookedService';

export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] =useState({})
  return (

    <UserContext.Provider value={[loggedInUser , setLoggedInUser]} className="App">
     <Router>
        <Switch>
          <Route path="/service">
            <Service></Service>
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route> */}
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          {/* <Route path="/bookService">
            <BookedService></BookedService>
          </Route> */}
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
        </Switch>
     
    </Router>
    </UserContext.Provider>
  );
}

export default App;
