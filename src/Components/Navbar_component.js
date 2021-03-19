import React, { useState, useEffect } from "react";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {getCategories} from '../screens/API2';

function Navbar_component()
{
    const [categories, setCategories] = useState([]);

    const preload = () => {
        getCategories().then(data => {
          if (data.error) {
            console.log(data.error);
          } else {
            setCategories(data);
          }
        });
      };
    
      useEffect(() => {
        preload();
      }, []);

    // const [categories,setCategories] = useState();

    // const loadCategories = ()=>{
    //     FunctionAllCategories().then(data =>{
    //         if(data.error)
    //         {

    //         }
    //         else
    //         {
    //             setCategories(data)
    //         }
    //     });

    // };


    // useEffect(() => {
    //     loadCategories();
    //     console.log(categories);
    // }, [])
    // const MyActive = (path) =>
    // {
    //     if(window.location.pathname === path)
    //     {
    //         return{color:"green"};
    //     }
    //     else
    //     {
    //         return{color:"black"};

    //     }
    // }

    const MyActiveClass = (path) =>
    {

        if(window.location.pathname === path)
        {
            return "text-danger";
        }
        else
        {
            return "text-black";
        }
    }

   
    
    return(<div>
        <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand href="/"  >Anuj-Myshop  </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">
                          

  <Link className={"nav-link " + MyActiveClass("/")}  to="/">Home </Link>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {categories.map((category, index) => {
                            return (
                            
                            <NavDropdown.Item href="#action/3.1"> {category.name}</NavDropdown.Item>
                            );
                             })}
                           
                        </NavDropdown>
                            <Link className={"nav-link " + MyActiveClass("/Mycart")}  to="/Mycart">Mycart </Link>
                            <Link className={"nav-link " + MyActiveClass("/login")}  to="/login">Login </Link>

                            <Link className={"nav-link " + MyActiveClass("/register")}  to="/register">Register </Link>
                            <Link className={"nav-link " + MyActiveClass("/Contact")}  to="/Contact">Contact us </Link>
                            {/* <Link className={"nav-link " + MyActiveClass("/register_second")}  to="/register_second">Register Second </Link> */}
                            <Link className={"nav-link " + MyActiveClass("/Insert_product")}  to="/Insert_product">Insert Product </Link>
                            <Link className={"nav-link " + MyActiveClass("/testing")}  to="/testing">Testing </Link>
                        
                        
                </Nav>
                
                </Navbar.Collapse>
        </Navbar>
    </div>);

}

export default Navbar_component;