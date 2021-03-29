
import React,{ useState, useEffect} from 'react';
import Navbar_component from '../Components/Navbar_component';
import Image_slider from '../Components/Image_slider';
import My_card_component from '../Components/My_card_component';
import productImage from '../Images/product.jpg';
import productImage2 from '../Images/product2.jpg';
import {getAllproducts} from '../screens/API2';


import '../App.css';
function Home()
{

       const [products,setproducts] = useState();


       const preload = () =>
        {
              getAllproducts().then(data => {
                if (data.error) 
                {
                  console.log(data.error);
                } 
                else 
                {
                     setproducts(data);
                }
              });
            };
          
       


         useEffect(() =>
         {

           preload();
           

         }, []);


   
    return(<div>
        <Navbar_component />
        <Image_slider />

        <h1 className="text-center">My Products {window.location.pathname}</h1>

        {/* {products.map((p, index) => {
                            return (<h1>{p.name}</h1>
                            );
                            })}
 */}

        <div className="row">
                      {products.map((products, index) => {
                            return (
                            
                            <div className="col-lg-3">

                            <My_card_component product_image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" product_name={products.name} product_price={products.price} product_description={products.description}/>
   
                                   </div>
                            );
                             })}
               

                {/* <div className="col-lg-3">

                       <My_card_component product_image={productImage2} product_name="Canon PowerShot SX430 IS" product_price="₹16,999" product_description="Product is  under one-year e."/>


                </div>
                <div className="col-lg-3">

                         <My_card_component product_image={productImage} product_name="Urban Fashion Sneakers For Men(Red)" product_price="₹1,860" product_description="ColorBlack, GreenOuter material"/>

                </div>

                <div className="col-lg-3">

                       <My_card_component product_image={productImage2} product_name="Canon PowerShot SX430 IS" product_price="₹16,999" product_description="Product is  under one-year e."/>


                </div>
                <div className="col-lg-3">

                         <My_card_component product_image={productImage} product_name="Urban Fashion Sneakers For Men(Red)" product_price="₹1,860" product_description="ColorBlack, GreenOuter material"/>

                </div>

                <div className="col-lg-3">

                       <My_card_component product_image={productImage2} product_name="Canon PowerShot SX430 IS" product_price="₹16,999" product_description="Product is  under one-year e."/>


                </div>
                <div className="col-lg-3">

                         <My_card_component product_image={productImage} product_name="Urban Fashion Sneakers For Men(Red)" product_price="₹1,860" product_description="ColorBlack, GreenOuter material"/>

                </div>

                <div className="col-lg-3">

                       <My_card_component product_image={productImage2} product_name="Canon PowerShot SX430 IS" product_price="₹16,999" product_description="Product is  under one-year e."/>


                </div>
                <div className="col-lg-3">

                         <My_card_component product_image={productImage} product_name="Urban Fashion Sneakers For Men(Red)" product_price="₹1,860" product_description="ColorBlack, GreenOuter material"/>

                </div>

                <div className="col-lg-3">

                       <My_card_component product_image={productImage2} product_name="Canon PowerShot SX430 IS" product_price="₹16,999" product_description="Product is  under one-year e."/>


                </div>
                <div className="col-lg-3">

                         <My_card_component product_image={productImage} product_name="Urban Fashion Sneakers For Men(Red)" product_price="₹1,860" product_description="ColorBlack, GreenOuter material"/>

                </div>

                <div className="col-lg-3">

                       <My_card_component product_image={productImage2} product_name="Canon PowerShot SX430 IS" product_price="₹16,999" product_description="Product is  under one-year e."/>


                </div> */}

       


        </div>

        


    </div>);
}

export default Home;