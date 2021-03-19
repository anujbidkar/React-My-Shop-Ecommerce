import React,{useState} from 'react'
import Navbar_component from '../Components/Navbar_component';
import {Function_registerAPI} from './API2';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

export default function Register_second() 
{

  
    //array use state 
   const [myvalues,setValues] = useState({
            name:'',
            email:'',
            password:'',
            error:false,
            success:false
        }
    );

    
    const [datafromBackend, updatedatafromBackendadd] = useState();



    const { email, name, password, error, success } = myvalues;  
    
    

      const handleChange = inputtype_name => e => 
      {
        setValues( { ...myvalues,[inputtype_name]: e.target.value } );
      };


      const onSubmit = event =>
      {

       event.preventDefault();
       
       setValues({ ...myvalues, error: false });

       Function_registerAPI({ name, email, password })
         .then(data => 
            {
           if (data.error) 
           {
             setValues({ ...myvalues, error: data.error, success: false });
           } 
           else 
           {
            
            setValues({ ...myvalues,  success: true });
               
              updatedatafromBackendadd(data);
                    console.log(data);
                    setValues({
                    ...myvalues,
                    name: "",
                    email: "",
                    password: "",
                    error: false,
                    success: true
                    });
           }
         })
       
     };



     const Successmsg = () =>{
       return(<div className="row">
         <div className="col-lg-4 offset-4">

            <div className="alert alert-success">
              Account Is Created !!!!! 

              now you can login Click here for login <Link to="/">Home</Link>
            </div>


         </div>



       </div>);
     }

     const errorssmsg = () =>{
       return(<div className="row">
         <div className="col-lg-4 offset-4 mt-4">

            <div className="alert alert-danger">
             {error} 
            </div>


         </div>



       </div>);
     }
    
     const myfunction = ()=>{
      if(error) {
        return errorssmsg()
      }
      else if(success)
      {
        return  Successmsg()
      }
     }
  
     

    return (
        <div>
            <Navbar_component />
            {myfunction()}

            <div className="row">

                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">

                                <h1>Second Register Screen</h1>

                                <div className="form-group">
                                            <label htmlFor="">User Name : </label>
                                            <input type="text" value={name}  onChange={handleChange("name")}  required placeholder="Enter User Name"
                                             className="form-control" />

                                </div>
                                <div className="form-group">
                                            <label htmlFor="">User Email : </label>
                                            <input type="email" value={email} onChange={handleChange("email")}   required placeholder="Enter User Email"
                                             className="form-control"/>

                                </div>
                                <div className="form-group">
                                            <label htmlFor="">User Password : </label>
                                            <input type="password" value={password}   onChange={handleChange("password")}     required placeholder="Enter User Password"
                                             className="form-control"/>

                                </div>
                                <div className="form-group">

                                            <button onClick={onSubmit}   className="btn btn-danger mx-auto d-block">Register</button>

                                </div>

                    </div>
                    <div className="col-lg-4"></div>

                    <ul>
                        <li>User Name : {myvalues.name}</li>
                        <li>User Email : {myvalues.email}</li>
                        <li>User password : {myvalues.password}</li>
                        <li>User succss : {myvalues.success}</li>
                    </ul>
                    <br />
                   

                    <p>
                        Data From Backend :   {JSON.stringify(datafromBackend)}

                    </p>

            </div>
          
        </div>
    )
}
