import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Page404() {
    return (
        <>
            <Navbar home={false} />
            <div className="errorpage_container">
                <span className="title_errorpage">404</span>
                <span>This page doesn't exist, please return to hompage to continue</span>
                <Link className="links" to="/">Back to homepage</Link>
            </div>
        </>
    )
};

export default Page404;