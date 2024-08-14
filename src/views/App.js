import logo from './logo.svg';
import './App.scss';
import MyComponent from './Exmaple/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Exmaple/Home';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
/**
 * 2 Component : class Component and function Component (function,arrow)
 * JSx
 */


function App() {
  return (
      <BrowserRouter>
       <div className="App">
         <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
      
        <Switch>
          <Route exact path = "/" >
            <Home />
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>
          <Route path="/user" exact>
            <ListUser />
          </Route>
          <Route path="/user/:id">
            <DetailUser />
          </Route>
        </Switch>
    
      </header>

          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            <ToastContainer />
      </div>
      </BrowserRouter>
  );
}

export default App;
