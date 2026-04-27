import Navitem from "./Navitem/Navitem";
import './Navbar.css';

const Navbar = () => {
    const AppName = import.meta.env.VITE_APP_NAME;

    return (
        <>    
        <span>                
            <div>
                <ul className="Navbar">
                    <p className="websiteHeader">{AppName}</p>
                    <div className="Navbar-Left">
                        {Navitem("/", "home")}
                    </div>
                    <div className="Navbar-Right">
                        {Navitem("/login", "login")}
                    </div>
                </ul>
            </div>
        </span>
        </>
    );
}
    export default Navbar