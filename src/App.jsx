import React, { useState, createContext, useEffect} from 'react';
import './App.css';
import { getSession } from './services';
import Home from './components/Home';
import Login from './components/Login';
import Blog from './components/Blog';
import Admin from './components/Admin';
import Nav from './components/Nav';
import Growl from './components/Growl';
import AddEditBlog from './components/AddEditBlog';

function App() {
  const [appState, setAppState] = useState({nav: "Home", loggedIn: false});

  return (
    <div className="App Grid-rows Gap-one">
      <AppContext.Provider value={[appState, setAppState]}>
        {
          appState.error && <Growl></Growl> 
        }
        {
          appState.nav === "Home" && <Home></Home>
        }
        {
          appState.nav !== "Home" && <Nav></Nav>
        }
        {
          appState.nav === "Login" && <Login></Login>
        }
        {
          appState.nav === "Blog" && <Blog></Blog>
        }
        {
          appState.nav === "Admin" && <Admin></Admin>
        }
        {
          appState.nav === "AddEditBlog" && <AddEditBlog></AddEditBlog>
        }
      </AppContext.Provider>
    </div>
  );
}

export const AppContext = createContext({});
export default App;
