import {NavLink } from "react-router-dom"

const Navitem = ( route:string, label:string) => {
    return (
        <>
            <li>
            <NavLink to={route} className="Navitem">
                {label}
            </NavLink>
        </li>
        </>
    )

}
export default Navitem