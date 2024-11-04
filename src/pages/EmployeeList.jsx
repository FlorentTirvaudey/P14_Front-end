import TableEmployee from "../components/TableEmployee";
import Navbar from "../components/Navbar";

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