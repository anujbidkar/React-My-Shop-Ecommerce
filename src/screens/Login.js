import React,{useState} from 'react';
import Navbar_component from '../Components/Navbar_component';


import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import {Function_loginAPI} from './API2';


function Login()
{
    const [myvalues,setmyvalues] = useState(
        {
            email:'',
            password:'',
            error :false,
            errorMSG:'',
            success:false
        }
    );


    const {email,password,error,errorMSG,success} = myvalues;
   


    const Errordiv = () =>{
        return(

           
            <div className="col-lg-12">

                <div className="alert alert-danger">
                    Error In Login : {errorMSG}
                </div>
            </div>


        );
    }


    const SuccessDiv = () =>
    {
        return(

            <div className="col-lg-12 ">
                <div className="alert alert-success">
                    Welcome , Login Sucess !!!
                </div>
            </div>

     );
    }


    const msgDIv = () =>
    {
        if(error === true)
        {
            return  Errordiv();
        }
        else if(success === true)
        {

            return SuccessDiv();
        }
    }




    
   const handleChange = inputtype_name => e => 
   {
    setmyvalues( { ...myvalues,[inputtype_name]: e.target.value } );
   };


   const onSubmit = event =>
   {
    event.preventDefault();

    console.log("email :"+email);
    console.log("password :"+password);

 
    Function_loginAPI({email, password })
      .then(data => {


        if (data.error) 
        {
            setmyvalues({ ...myvalues, error: true, errorMSG:data.error, success: false, });
        }
        else if (data.err) 
        {
            setmyvalues({ ...myvalues, error: true, errorMSG:data.err, success: false, });
        }
        else 
        {
        
            setmyvalues({ ...myvalues, success: true });


           setmyvalues({
            ...myvalues,
            email: "",
            password: "",
            error: false,
            success: true
          });

      
        }
      })
  
  };

    
    
    return(<div>
        <Navbar_component />


        <div className="row">

                    {msgDIv()}

                    <div className="col-lg-4 "></div>
                    <div className="col-lg-4 my_login_div ">
                        <h1 className="text-center">Login {password}  </h1>

                        <div className="form-group">
                            <label >Email <span className="text-danger">*</span></label>
                            <input type="email" onChange={handleChange("email")} required placeholder="Enter Your Email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label >Password <span className="text-danger">*</span></label>
                            <input type="password" onChange={handleChange("password")}  required placeholder="Enter Your Password" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button onClick={onSubmit} className="mx-auto btn-lg d-block btn btn-success">
                                Login
                            </button>
                        </div>
                        <div className="form-group text-center">
                            <h4>OR</h4>
                        </div>
                        <div className="form-group">
                            <Link to="/register"   className="btn mx-auto d-block btn-danger">
                                Register
                            </Link>
                        </div>

                    </div>
                    <div className="col-lg-4 ">
                        {myvalues.email}
                    </div>



        </div>



    </div>);
}

export default Login;