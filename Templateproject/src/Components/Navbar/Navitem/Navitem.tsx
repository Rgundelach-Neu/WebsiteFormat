

const Navitem = ( route:string, label:string) => {
    return (
        <>
            <li>
            <a href={route} className="Navitem">
                {label}
            </a>
        </li>
        </>
    )

}
export default Navitem