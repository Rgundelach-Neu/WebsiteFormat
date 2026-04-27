import Navitem from "./Navitem/Navitem";
import './Navbar.css';

const Navbar = () => {
    const AppName = import.meta.env.VITE_APP_NAME;

    return (
        <>    
        <span>                
            <div>
                <ul className="Navbar Navbar-Left">
                    <p className="websiteHeader">{AppName}</p>
                        {Navitem("/", "home","Left")}
                        {Navitem("/login", "login","Right")}
                </ul>
            </div>
        </span>
        </>
    );
}
    export default Navbar