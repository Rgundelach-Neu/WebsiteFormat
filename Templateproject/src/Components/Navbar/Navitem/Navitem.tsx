import {NavLink } from "react-router-dom"
import './Navitem.css';

const Navitem = ( route:string, label:string,position:string) => {
    return (
        <>
            <li className={position}>
            <NavLink to={route} className="Navitem">
                {label}
            </NavLink>
        </li>
        </>
    )

}
export default Navitem