import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './screens/Home';
import Login from './screens/Login';
import ProductInformation from './screens/ProductInformation';
import Register from './screens/Register';
import Notfound from './screens/Notfound';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Mycart from './screens/Mycart';
// import 'https://kit.fontawesome.com/06100ca41c.js'; 
{/* <script src="" crossorigin="anonymous"></script> */}

const routing = (<BrowserRouter>
       
        <Switch>
                <Route exact path="/"  component={Home} /> 
                <Route path="/login"  component={Login} />
                <Route path="/register"  component={Register} />
                <Route path="/ProductInformation"  component={ProductInformation} />
                <Route path="/Mycart"  component={Mycart} />
                <Route component={Notfound} ></Route>
          
        </Switch>

  
  </BrowserRouter>
)



ReactDOM.render(routing,document.getElementById('root'));

reportWebVitals();
