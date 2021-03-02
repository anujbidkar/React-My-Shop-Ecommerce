
import Navbar_component from '../Components/Navbar_component';
import Image_slider from '../Components/Image_slider';
import My_card_component from '../Components/My_card_component';
import productImage from '../Images/product.jpg';
import productImage2 from '../Images/product2.jpg';


import '../App.css';
function Home()
{
    return(<div>
        <Navbar_component />
        <Image_slider />

        <h1 className="  text-center">My Products</h1>


        <div className="row">
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


                </div>
                <div className="col-lg-3">

                         <My_card_component product_image={productImage} product_name="Urban Fashion Sneakers For Men(Red)" product_price="₹1,860" product_description="ColorBlack, GreenOuter material"/>

                </div>

                <div className="col-lg-3">

                       <My_card_component product_image={productImage2} product_name="Canon PowerShot SX430 IS" product_price="₹16,999" product_description="Product is  under one-year e."/>


                </div>

       


        </div>

        


    </div>);
}

export default Home;