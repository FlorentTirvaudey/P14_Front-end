import { Link } from "react-router-dom";

function Navbar (props) {

    const home = props.home;

    return (
        <>
            <nav className="title">
                    <h1>HRnet</h1>
                    <h2>{props.title}</h2>
                    {home ? <Link to="/employee">View Current Employees</Link> : <Link to="/">Home</Link>}
            </nav>
        </>
    )
}

export default Navbar;