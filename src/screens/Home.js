
import Navbar_component from '../Components/Navbar_component';
import Image_slider from '../Components/Image_slider';

function Home()
{
    return(<div>
        <Navbar_component />
        <Image_slider />
        <h1 className="text-center">Home Screen</h1>
    </div>);
}

export default Home;