import Navitem from "./Navitem/Navitem";

const Navbar = () => {
    const AppName = import.meta.env.VITE_APP_NAME;

    return (
        <>
            <div className="Navbar">
                <ul>
                    <h1>{AppName}</h1>
                    {Navitem("/", "home")}
                </ul>
            </div>
        </>
    );
}
    export default Navbar