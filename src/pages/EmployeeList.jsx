import TableEmployee from "../components/TableEmployee";
import Navbar from "../components/Navbar";

    // foreach columns, on créé une table à afficher dans mon DOM avec le return
    // puis faire un map dedans pour ajouter les users récupérer avec useSelector depuis le store

function EmployeeList() {
    return (
        <>
        <Navbar title={"Current Employees"} home={false} />
            <div id="employee-div" className="list_employee_container">
                <TableEmployee />
            </div>
        </>
    )
};

export default EmployeeList;