import { Link } from "react-router-dom";

function Navbar (props) {

    const home = props.home;

    return (
        <>
            <nav className="title">
                <div className="navbar_content">
                    <h1>HRnet</h1>
                </div>
                <div className="navbar_content">
                    <h2>{props.title}</h2>
                </div>
                <div className="navbar_content">
                    {home ? <Link className="links" to="/employee">View Current Employees</Link> : <Link className="links" to="/">Home</Link>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;