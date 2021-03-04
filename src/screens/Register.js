import Navbar_component from '../Components/Navbar_component';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

function Register()
{
    return(<div>
        <Navbar_component />

        <div className="row">

                    <div className="col-lg-4 "></div>
                    <div className="col-lg-4 my_login_div ">
                        <h1 className="text-center">Register    </h1>

                        <div className="form-group">
                            <label >Email <span className="text-danger">*</span></label>
                            <input type="email" required placeholder="Enter Your Email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label >Password <span className="text-danger">*</span></label>
                            <input type="password" required placeholder="Enter Your Password" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label >Mobile <span className="text-danger">*</span></label>
                            <input type="number" required placeholder="Enter Your Mobile" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label >Address <span className="text-danger">*</span></label>
                            <input type="text" required placeholder="Enter Your Address" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-danger mx-auto d-block">
                                Register
                            </button>
                        </div>
                       

                    </div>
                    <div className="col-lg-4 "></div>



        </div>



    </div>);
}

export default Register;