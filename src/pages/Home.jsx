import Form from "../components/Form";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <Navbar title={"Create Employee"} home={true} />
            <div className="container">
                <Form />
            </div>    
        </>
    )
};

export default Home;