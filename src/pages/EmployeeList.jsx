import { Link } from "react-router-dom";
import TableEmployee from "../components/TableEmployee";

    // foreach columns, on créé une table à afficher dans mon DOM avec le return
    // puis faire un map dedans pour ajouter les users récupérer avec useSelector depuis le store

function EmployeeList() {
    return (
        <>
            <div id="employee-div" className="container">
                <h1>Current Employees</h1>
                <TableEmployee />
                <Link to="/">Home</Link>
            </div>
        </>
    )
};

export default EmployeeList;